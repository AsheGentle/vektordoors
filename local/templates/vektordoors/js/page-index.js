(function($, api){
    var root = $('#i-12-bitrix-catalog-section-default-OQ3k9PHlVICg');

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
})(jQuery, intec);