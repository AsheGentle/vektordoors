universe.catalog = (function($, api){
    var catalog = {};

    catalog.offers = function(settings){
        var self = this;
        var properties = [];
        var list = [];
        var current = null;

        settings = api.extend({}, settings);

        api.each(settings.properties, function(index, property){
            properties.push(property);
        });

        api.each(settings.list, function(index, offer){
            list.push(offer);
        });

        self.getProperties = function(){
            return properties;
        };

        self.getList = function(){
            return list;
        };

        self.getCurrent = function(){
            return current;
        };

        self.setCurrentById = function(id){
            var offer = self.getById(id);
            var changed = false;

            if (offer !== null) {
                changed = current !== offer;
                current = offer;
            }

            if (changed) {
                self.trigger('change', current, self.getValues());
                return current;
            }

            return null;
        };

        api.extend(self, api.ext.events(self));
    };

    catalog.offers.prototype.getById = function(id){
        var result = null;

        api.each(this.getList(), function(index, offer){
            if (offer.id === id) {
                result = offer;
                return false;
            }
        });

        return result;
    };

    catalog.offers.prototype.getByValues = function(values){
        var self = this;
        var result = null;

        api.each(self.getList(), function(index, offer){
            var equal = true;

            api.each(self.getProperties(), function(index, property){
                var value = offer.values[property.code];

                if (!api.isEmpty(value) && !api.isEmpty(values[property.code])) {
                    if (value != values[property.code])
                        equal = false;
                }
            });

            if (equal) {
                result = offer;
                return false;
            }
        });

        return result;
    };

    catalog.offers.prototype.setCurrentByValue = function(code, value){
        var offer = this.getCurrent();
        var result = null;
        var values;

        if (offer === null)
            return result;

        values = api.extend({}, offer.values);
        values[code] = value;

        result = this.getByValues(values);

        if (result !== null)
            return this.setCurrentById(result.id);

        values = {};

        api.each(offer.values, function(offerValueCode, offerValue){
            values[offerValueCode] = offerValue;

            if (offerValueCode == code) {
                values[offerValueCode] = value;
                return false;
            }
        });

        result = this.getByValues(values);

        if (result !== null)
            return this.setCurrentById(result.id);

        return result;
    };

    catalog.offers.prototype.setCurrentByValues = function(values){
        var result = this.getByValues(values);

        if (result !== null)
            return this.setCurrentById(result.id);

        return result;
    };

    catalog.offers.prototype.getValues = function(){
        var self = this;
        var current = self.getCurrent();
        var properties = [];
        var result = {
            'displayed': {},
            'disabled': {},
            'enabled': {},
            'selected': {}
        };

        api.each(self.getList(), function(index, offer){
            api.each(offer.values, function(code, value){
                if (!api.isDeclared(result.displayed[code]))
                    result.displayed[code] = [];

                if (!api.inArray(value, result.displayed[code]))
                    result.displayed[code].push(value);
            });
        });

        api.each(self.getProperties(), function(index, property){
            var code = property.code;

            api.each(self.getList(), function(index, offer){
                var compared = true;
                var value = offer.values[property.code];

                if (current !== null) {
                    intec.each(properties, function(index, property){
                        if (offer.values[property.code] != current.values[property.code]) {
                            compared = false;
                            return false;
                        }
                    });
                } else if (properties.length > 0) {
                    compared = false;
                }

                if (compared) {
                    if (!api.isDeclared(result.enabled[code]))
                        result.enabled[code] = [];

                    if (!api.inArray(value, result.enabled[code]))
                        result.enabled[code].push(value);
                }
            });

            properties.push(property);
        });

        api.each(result.displayed, function(code, values){
            if (!api.isDeclared(result.disabled[code]))
                result.disabled[code] = [];

            api.each(values, function(index, value){
                if (!api.inArray(value, result.enabled[code]))
                    result.disabled[code].push(value);
            });
        });

        if (current !== null)
            intec.each(current.values, function(code, value){
                if (!api.isDeclared(result.selected[code]))
                    result.selected[code] = [];

                result.selected[code].push(value);
            });

        return result;
    };

    catalog.offers.prototype.isEmpty = function(){
        return this.getList().length === 0;
    };

    return catalog;
})(jQuery, intec);

(function($, api){
    if ($('#bitrix-catalog-section-index').length > 0) {
        var root = $('#bitrix-catalog-section-index');

        $(function(){
            var properties = root.data('properties');
            var items;
            var order;


            root.update = function(){
                var handled = [];

                if (api.isDeclared(items))
                    handled = items.handled;

                items = $('[data-role="item"]', root);
                items.handled = handled;
                items.each(function(){
                    var item = $(this);
                    var data = item.data('data');
                    var entity = data;
                    var expanded = false;

                    if (handled.indexOf(this) > -1)
                        return;

                    handled.push(this);
                    item.offers = new universe.catalog.offers({
                        'properties': properties.length !== 0 ? properties : data.properties,
                        'list': data.offers
                    });

                    item.image = $('[data-role="image"]', item);
                    item.counter = $('[data-role="item.counter"]', item);
                    item.price = $('[data-role="item.price"]', item);
                    item.price.base = $('[data-role="item.price.base"]', item.price);
                    item.price.discount = $('[data-role="item.price.discount"]', item.price);
                    item.order = $('[data-role="item.order"]', item);
                    item.quantity = api.controls.numeric({}, item.counter);

                    item.update = function(){
                        var price = null;

                        item.attr('data-available', entity.available ? 'true' : 'false');
                        api.each(entity.prices, function(index, object){
                            if (object.quantity.from === null || item.quantity.get() >= object.quantity.from)
                                price = object;
                        });

                        if (price !== null) {
                            item.price.attr('data-discount', price.discount.use ? 'true' : 'false');
                            item.price.base.html(price.base.display);
                            item.price.discount.html(price.discount.display);
                        } else {
                            item.price.attr('data-discount', 'false');
                            item.price.base.html(null);
                            item.price.discount.html(null);
                        }

                        item.price.attr('data-show', price !== null ? 'true' : 'false');
                        item.quantity.configure({
                            'bounds': {
                                'minimum': entity.quantity.ratio,
                                'maximum': entity.quantity.trace && !entity.quantity.zero ? entity.quantity.value : false
                            },
                            'step': entity.quantity.ratio
                        });

                        item.find('[data-offer]').css('display', '');

                        if (entity !== data) {
                            item.find('[data-offer=' + entity.id + ']').css('display', 'block');
                            item.find('[data-offer="false"]').css('display', 'none');

                            if (item.image.filter('[data-offer=' + entity.id + ']').length === 0)
                                item.image.filter('[data-offer="false"]').css('display', 'block');
                        }

                        item.find('[data-basket-id]')
                                .data('basketQuantity', item.quantity.get())
                                .attr('data-basket-quantity', item.quantity.get());
                    };

                    item.update();


                    item.quantity.on('change', function(event, value){
                        item.update();
                    });

                    if (!item.offers.isEmpty()) {
                        item.properties = $('[data-role="item.property"]', item);
                        item.properties.values = $('[data-role="item.property.value"]', item.properties);
                        item.properties.attr('data-visible', 'false');
                        item.properties.each(function(){
                            var self = $(this);
                            var property = self.data('property');
                            var values = self.find(item.properties.values);

                            values.each(function(){
                                var self = $(this);
                                var value = self.data('value');

                                self.on('click', function(){
                                    item.offers.setCurrentByValue(property, value);
                                });
                            });
                        });

                        api.each(item.offers.getList(), function(index, offer){
                            api.each(offer.values, function(key, value){
                                if (value == 0)
                                    return;

                                item.properties
                                        .filter('[data-property=' + key + ']')
                                        .attr('data-visible', 'true');
                            });
                        });

                        item.offers.on('change', function(event, offer, values){
                            entity = offer;

                            api.each(values, function(state, values){
                                api.each(values, function(property, values){
                                    property = item.properties.filter('[data-property="' + property + '"]');

                                    api.each(values, function(index, value){
                                        value = property.find(item.properties.values).filter('[data-value="' + value + '"]');
                                        value.attr('data-state', state);
                                    });
                                });
                            });

                            item.update();
                        });

                        item.offers.setCurrentById(item.offers.getList()[0].id);
                    }

                    item.expand = function(){
                        var rectangle = item[0].getBoundingClientRect();
                        var height = rectangle.bottom - rectangle.top;

                        if (expanded)
                            return;

                        expanded = true;
                        item.css('height', height);
                        item.attr('data-expanded', 'true');
                    };

                    item.narrow = function(){
                        if (!expanded)
                            return;

                        expanded = false;
                        item.attr('data-expanded', 'false');
                        item.css('height', '');
                    };

                    item.on('mouseenter', item.expand)
                            .on('mouseleave', item.narrow);

                    $(window).on('resize', function(){
                        if (expanded) {
                            item.narrow();
                            item.expand();
                        }
                    });
                });

                $(function(){
                    var slider = $('.owl-carousel', root);
                    var parameters = {
                        'items': 1,
                        'nav': true,
                        'dots': false
                    }
                    slider.owlCarousel({
                        'items': parameters.items,
                        'nav': parameters.nav,
                        'navText': [
                            '<i class="far fa-chevron-left"></i>',
                            '<i class="far fa-chevron-right"></i>'
                        ],
                        'dots': parameters.dots
                    });
                });
            };

            root.update();
        });
    }
})(jQuery, intec);

(function($, api){
    if ($('#bitrix-catalog-element-item').length > 0) {
        var root = $('#bitrix-catalog-element-item');

        universe.components.get({
            'component': 'intec.universe:reviews',
            'template': '.default',
            'parameters': {
                'IBLOCK_TYPE': 'reviews',
                'IBLOCK_ID': 18,
                'ELEMENT_ID': 781,
                'DISPLAY_REVIEWS_COUNT': 5,
                'PROPERTY_ELEMENT_ID': 'products_id',
                'MAIL_EVENT': '',
                'USE_CAPTCHA': 'N',
                'AJAX_MODE': 'Y',
                'AJAX_OPTION_ADDITIONAL': 'bitrix-catalog-element-item-reviews',
                'AJAX_OPTION_SHADOW': 'N',
                'AJAX_OPTION_JUMP': 'Y',
                'AJAX_OPTION_STYLE': 'Y',
                'ITEM_NAME': 'Возможные варианты дверей '
            }
        }, function(content){
            $('.catalog-element-section-reviews', root).html(content);
        });
    }
})(jQuery, intec);

(function($, api){
    if ($('#bitrix-catalog-element-item').length > 0) {
        $(function(){
            var root = $('#bitrix-catalog-element-item');
            var properties = root.data('properties');
            var data = root.data('data');
            var entity = data;

            root.offers = new universe.catalog.offers({
                'properties': properties,
                'list': data.offers
            });

            window.offers = root.offers;

            //console.log(window.offers);

            root.gallery = $('[data-role="gallery"]', root);
            root.gallery.pictures = $('[data-role="gallery.pictures"]', root.gallery);
            root.gallery.pictures.items = $('[data-role="gallery.picture"]', root.gallery.pictures);
            root.gallery.previews = $('[data-role="gallery.previews"]', root.gallery);
            root.gallery.previews.items = $('[data-role="gallery.preview"]', root.gallery.previews);
            root.article = $('[data-role="article"]', root);
            root.article.value = $('[data-role="article.value"]', root.article);
            root.counter = $('[data-role="counter"]', root);
            root.price = $('[data-role="price"]', root);
            root.price.base = $('[data-role="price.base"]', root.price);
            root.price.discount = $('[data-role="price.discount"]', root.price);
            root.quantity = api.controls.numeric({}, root.counter);
            root.panel = $('[data-role="panel"]', root);
            root.panel.picture = $('[data-role="panel.picture"]', root.panel);
            root.panel.counter = $('[data-role="panel.counter"]', root.panel);
            root.panel.quantity = api.controls.numeric({}, root.panel.counter);

            root.update = function(){
                var article = entity.article;
                var price = null;
                var quantity = {
                    'bounds': {
                        'minimum': entity.quantity.ratio,
                        'maximum': entity.quantity.trace && !entity.quantity.zero ? entity.quantity.value : false
                    },
                    'step': entity.quantity.ratio
                };

                root.attr('data-available', entity.available ? 'true' : 'false');

                if (article == null)
                    article = data.article;

                root.article.attr('data-show', article == null ? 'false' : 'true');
                root.article.value.text(article);

                api.each(entity.prices, function(index, object){
                    if (object.quantity.from === null || root.quantity.get() >= object.quantity.from)
                        price = object;
                });

                if (price !== null) {
                    root.price.attr('data-discount', price.discount.use ? 'true' : 'false');
                    root.price.base.html(price.base.display);
                    root.price.discount.html(price.discount.display);
                } else {
                    root.price.attr('data-discount', 'false');
                    root.price.base.html(null);
                    root.price.discount.html(null);
                }

                root.price.attr('data-show', price !== null ? 'true' : 'false');
                root.quantity.configure(quantity);
                root.panel.quantity.configure(quantity);

                root.find('[data-offer]').css('display', '');

                if (entity !== data) {
                    root.find('[data-offer=' + entity.id + ']').css('display', 'block');
                    root.find('[data-offer="false"]').css('display', 'none');

                    if (root.gallery.filter('[data-offer=' + entity.id + ']').length === 0)
                        root.gallery.filter('[data-offer="false"]').css('display', '');

                    if (root.panel.picture.filter('[data-offer=' + entity.id + ']').length === 0)
                        root.panel.picture.filter('[data-offer="false"]').css('display', '');
                }

                root.find('[data-basket-id]')
                        .data('basketQuantity', root.quantity.get())
                        .attr('data-basket-quantity', root.quantity.get());
            };

            root.update();

            (function(){
                var update = false;

                root.quantity.on('change', function(event, value){
                    if (!update) {
                        update = true;
                        root.panel.quantity.set(value);
                        root.update();
                        update = false;
                    }
                });

                root.panel.quantity.on('change', function(event, value){
                    root.quantity.set(value);
                });
            })();

            if (!root.offers.isEmpty()) {
                root.properties = $('[data-role="property"]', root);
                root.properties.values = $('[data-role="property.value"]', root.properties);
                root.properties.each(function(){
                    var self = $(this);
                    var property = self.data('property');
                    var values = self.find(root.properties.values);

                    values.each(function(){
                        var self = $(this);
                        var value = self.data('value');

                        self.on('click', function(){
                            root.offers.setCurrentByValue(property, value);
                        });
                    });
                });

                root.offers.on('change', function(event, offer, values){
                    entity = offer;

                    api.each(values, function(state, values){
                        api.each(values, function(property, values){
                            property = root.properties.filter('[data-property="' + property + '"]');

                            api.each(values, function(index, value){
                                value = property.find(root.properties.values).filter('[data-value="' + value + '"]');
                                value.attr('data-state', state);
                            });
                        });
                    });

                    root.update();
                });

                root.offers.setCurrentById(root.offers.getList()[0].id);
            }

            root.gallery.each(function(){
                var gallery = $(this);
                var pictures;
                var previews;

                pictures = gallery.find(root.gallery.pictures);
                pictures.items = pictures.find(root.gallery.pictures.items);
                previews = gallery.find(root.gallery.previews);
                previews.items = previews.find(root.gallery.previews.items);

                pictures.owlCarousel({
                    'items': 1,
                    'nav': false,
                    'dots': false
                });

                pictures.lightGallery({
                    'share': false,
                    'selector': '.catalog-element-gallery-picture'
                });

                pictures.items.each(function(){
                    var picture = $(this);
                    var source = picture.data('src');

                    picture.zoom({
                        'url': source,
                        'touch': false
                    });
                });

                previews.owlCarousel({
                    'items': 6
                });

                previews.set = function(number){
                    previews.items.attr('data-active', 'false');
                    previews.items.eq(number).attr('data-active', 'true');
                };

                previews.items.on('click', function(){
                    var preview = $(this);
                    var previewIndex = preview.parent('.owl-item').index();

                    pictures.trigger('to.owl.carousel', [previewIndex]);
                    previews.set(previewIndex);
                });

                pictures.on('changed.owl.carousel', function(event){
                    previews.set(event.item.index);
                });
            });



            if (root.panel.length === 1)
                (function(){
                    var state = false;
                    var area = $(window);
                    var update;
                    var panel;

                    update = function(){
                        var bound = 0;

                        if (root.is(':visible')) {
                            bound += root.offset().top;
                        }

                        if (area.scrollTop() > bound) {
                            panel.show();
                        } else {
                            panel.hide();
                        }
                    };

                    panel = root.panel;
                    panel.css({
                        'top': -panel.height()
                    });

                    panel.show = function(){
                        if (state)
                            return;

                        state = true;
                        panel.css({
                            'display': 'block'
                        });

                        panel.trigger('show');
                        panel.stop().animate({
                            'top': 0
                        }, 500)
                    };

                    panel.hide = function(){
                        if (!state)
                            return;

                        state = false;
                        panel.stop().animate({
                            'top': -panel.height()
                        }, 500, function(){
                            panel.trigger('hide');
                            panel.css({
                                'display': 'none'
                            })
                        })
                    };

                    update();

                    area.on('scroll', update)
                            .on('resize', update);
                })();
        });
    }
})(jQuery, intec);