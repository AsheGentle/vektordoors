(function($, api){
    var root = $('#i-12-bitrix-catalog-element-catalog-default');

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
            'AJAX_OPTION_ADDITIONAL': 'i-12-bitrix-catalog-element-catalog-default-reviews',
            'AJAX_OPTION_SHADOW': 'N',
            'AJAX_OPTION_JUMP': 'Y',
            'AJAX_OPTION_STYLE': 'Y',
            'ITEM_NAME': 'Возможные варианты дверей '
        }
    }, function(content){
        $('.catalog-element-section-reviews', root).html(content);
    });
})(jQuery, intec);

(function($, api){
    $(function(){
        var root = $('#i-12-bitrix-catalog-element-catalog-default');
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
})(jQuery, intec);