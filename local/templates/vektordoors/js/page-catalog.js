(function($, api){
    var root = $('#i-17-bitrix-catalog-section-catalog-tile-2-OQ3k9PHlVICg');

    $(function(){
        var properties = root.data('properties');
        var items;
        var component;
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

        BX.message({
            'BTN_MESSAGE_LAZY_LOAD': '',
            'BTN_MESSAGE_LAZY_LOAD_WAITER': ''
        });

        component = new JCCatalogSectionComponent({
            'siteId': 's1',
            'componentPath': '/bitrix/components/bitrix/catalog.section',
            'navParams': {
                'NavPageCount': 7,
                'NavPageNomer': 1,
                'NavNum': 1
            },
            'deferredLoad': false,
            'initiallyShowHeader': false,
            'bigData': null,
            'lazyLoad': true,
            'loadOnScroll': false,
            'template': 'catalog.tile.2.f50c2eb1184979172deca28776b6028850f25922ee6795873a28b7ecfc4ea24c',
            'parameters': 'YToxODY6e3M6NjoiQUNUSU9OIjtzOjM6ImJ1eSI7czo3OiJCT1JERVJTIjtzOjE6IlkiO3M6MTM6IkJPUkRFUlNfU1RZTEUiO3M6Nzoic3F1YXJlZCI7czo3OiJDT0xVTU5TIjtpOjM7czoxMjoiQ09VTlRFUl9TSE9XIjtzOjE6IlkiO3M6MTc6IkRFU0NSSVBUSU9OX0FMSUdOIjtzOjQ6ImxlZnQiO3M6MTY6IkRFU0NSSVBUSU9OX1NIT1ciO3M6MToiWSI7czoyMjoiSU1BR0VfU0xJREVSX0FOSU1BVElPTiI7czo4OiJzdGFuZGFyZCI7czoxNjoiSU1BR0VfU0xJREVSX05BViI7czoxOiJZIjtzOjE3OiJJTUFHRV9TTElERVJfU0hPVyI7czoxOiJZIjtzOjE3OiJNQVJLU19PUklFTlRBVElPTiI7czoxMDoiaG9yaXpvbnRhbCI7czoxMDoiTUFSS1NfU0hPVyI7czoxOiJZIjtzOjEwOiJOQU1FX0FMSUdOIjtzOjQ6ImxlZnQiO3M6MTM6Ik5BTUVfUE9TSVRJT04iO3M6NjoibWlkZGxlIjtzOjEyOiJPRkZFUlNfQUxJR04iO3M6NToic3RhcnQiO3M6MTA6Ik9GRkVSU19VU0UiO3M6MToiWSI7czoxMToiT0ZGRVJTX1ZJRVciO3M6NzoiZGVmYXVsdCI7czoxMToiUFJJQ0VfQUxJR04iO3M6NDoibGVmdCI7czoxNDoiUVVBTlRJVFlfQUxJR04iO3M6NDoibGVmdCI7czoxMzoiUVVBTlRJVFlfU0hPVyI7czoxOiJZIjtzOjEwOiJWT1RFX0FMSUdOIjtzOjQ6ImxlZnQiO3M6OToiVk9URV9TSE9XIjtzOjE6IlkiO3M6MTI6IldFSUdIVF9BTElHTiI7czo0OiJsZWZ0IjtzOjExOiJXRUlHSFRfU0hPVyI7czoxOiJZIjtzOjE3OiJRVUlDS19WSUVXX0FDVElPTiI7czozOiJidXkiO3M6MjM6IlFVSUNLX1ZJRVdfQ09VTlRFUl9TSE9XIjtzOjE6IlkiO3M6Mjc6IlFVSUNLX1ZJRVdfREVTQ1JJUFRJT05fTU9ERSI7czo3OiJwcmV2aWV3IjtzOjI3OiJRVUlDS19WSUVXX0RFU0NSSVBUSU9OX1NIT1ciO3M6MToiWSI7czoyNDoiUVVJQ0tfVklFV19HQUxMRVJZX1BBTkVMIjtzOjE6IlkiO3M6MjY6IlFVSUNLX1ZJRVdfR0FMTEVSWV9QUkVWSUVXIjtzOjE6IlkiO3M6MzA6IlFVSUNLX1ZJRVdfSU5GT1JNQVRJT05fUEFZTUVOVCI7czoxOiJZIjtzOjMxOiJRVUlDS19WSUVXX0lORk9STUFUSU9OX1NISVBNRU5UIjtzOjE6IlkiO3M6MjE6IlFVSUNLX1ZJRVdfTUFSS1NfU0hPVyI7czoxOiJZIjtzOjIyOiJRVUlDS19WSUVXX1BBWU1FTlRfVVJMIjtzOjE5OiIvaGVscC9idXlzL3BheW1lbnQvIjtzOjI0OiJRVUlDS19WSUVXX1BST1BFUlRZX0NPREUiO2E6MTc6e2k6MDtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7aToxO3M6NDoiVFlQRSI7aToyO3M6MTg6IlFVQU5USVRZX09GX1NUUklQUyI7aTozO3M6NToiUE9XRVIiO2k6NDtzOjEwOiJQUk9DUkVBVE9SIjtpOjU7czo1OiJTQ09QRSI7aTo2O3M6NzoiRElTUExBWSI7aTo3O3M6NjoiV0VJR1RIIjtpOjg7czoxODoiRU5FUkdZX0NPTlNVTVBUSU9OIjtpOjk7czo4OiJTRVRUSU5HUyI7aToxMDtzOjExOiJDT01QT1NJVElPTiI7aToxMTtzOjY6IkxFTkdUSCI7aToxMjtzOjY6IlNFQVNPTiI7aToxMztzOjc6IlBBVFRFUk4iO2k6MTQ7czoxNzoiU1lTVEVNX0FERElUSU9OQUwiO2k6MTU7czoxMzoiUFJPUEVSVFlfVEVTVCI7aToxNjtzOjA6IiI7fXM6MzE6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfREVTQ1JJUFRJT04iO3M6MDoiIjtzOjI0OiJRVUlDS19WSUVXX1BST1BFUlRZX1RFWFQiO3M6MDoiIjtzOjI0OiJRVUlDS19WSUVXX1FVQU5USVRZX1NIT1ciO3M6MToiWSI7czoyMzoiUVVJQ0tfVklFV19TSElQTUVOVF9VUkwiO3M6MjA6Ii9oZWxwL2J1eXMvZGVsaXZlcnkvIjtzOjE5OiJRVUlDS19WSUVXX1RFTVBMQVRFIjtpOjI7czoxNDoiUVVJQ0tfVklFV19VU0UiO3M6MToiWSI7czoyMjoiUVVJQ0tfVklFV19XRUlHSFRfU0hPVyI7czoxOiJZIjtzOjc6IkZPUk1fSUQiO3M6MToiMyI7czoxODoiUVVJQ0tfVklFV19GT1JNX0lEIjtzOjE6IjMiO3M6MTM6IkZPUk1fVEVNUExBVEUiO3M6MTA6InRlbXBsYXRlLjEiO3M6MjQ6IlFVSUNLX1ZJRVdfRk9STV9URU1QTEFURSI7czoxMDoidGVtcGxhdGUuMSI7czoyMToiRk9STV9QUk9QRVJUWV9QUk9EVUNUIjtzOjE6IjciO3M6MzI6IlFVSUNLX1ZJRVdfRk9STV9QUk9QRVJUWV9QUk9EVUNUIjtzOjE6IjciO3M6MjQ6IlBST1BFUlRZX01BUktTX1JFQ09NTUVORCI7czoxNjoiU1lTVEVNX1JFQ09NTUVORCI7czozNToiUVVJQ0tfVklFV19QUk9QRVJUWV9NQVJLU19SRUNPTU1FTkQiO3M6MTY6IlNZU1RFTV9SRUNPTU1FTkQiO3M6MTg6IlBST1BFUlRZX01BUktTX05FVyI7czoxMDoiU1lTVEVNX05FVyI7czoyOToiUVVJQ0tfVklFV19QUk9QRVJUWV9NQVJLU19ORVciO3M6MTA6IlNZU1RFTV9ORVciO3M6MTg6IlBST1BFUlRZX01BUktTX0hJVCI7czoxMDoiU1lTVEVNX0hJVCI7czoyOToiUVVJQ0tfVklFV19QUk9QRVJUWV9NQVJLU19ISVQiO3M6MTA6IlNZU1RFTV9ISVQiO3M6MTE6IkNPTlNFTlRfVVJMIjtzOjE3OiIvY29tcGFueS9jb25zZW50LyI7czoyMjoiUVVJQ0tfVklFV19DT05TRU5UX1VSTCI7czoxNzoiL2NvbXBhbnkvY29uc2VudC8iO3M6OToiTEFaWV9MT0FEIjtzOjE6IlkiO3M6MjA6IlFVSUNLX1ZJRVdfTEFaWV9MT0FEIjtzOjE6IlkiO3M6OToiVk9URV9NT0RFIjtzOjY6InJhdGluZyI7czoyMDoiUVVJQ0tfVklFV19WT1RFX01PREUiO3M6NjoicmF0aW5nIjtzOjk6IkRFTEFZX1VTRSI7czoxOiJZIjtzOjIwOiJRVUlDS19WSUVXX0RFTEFZX1VTRSI7czoxOiJZIjtzOjEzOiJRVUFOVElUWV9NT0RFIjtzOjY6Im51bWJlciI7czoyNDoiUVVJQ0tfVklFV19RVUFOVElUWV9NT0RFIjtzOjY6Im51bWJlciI7czoxOToiUVVBTlRJVFlfQk9VTkRTX0ZFVyI7TjtzOjMwOiJRVUlDS19WSUVXX1FVQU5USVRZX0JPVU5EU19GRVciO047czoyMDoiUVVBTlRJVFlfQk9VTkRTX01BTlkiO047czozMToiUVVJQ0tfVklFV19RVUFOVElUWV9CT1VORFNfTUFOWSI7TjtzOjE3OiJWSURFT19JQkxPQ0tfVFlQRSI7czo3OiJjb250ZW50IjtzOjI4OiJRVUlDS19WSUVXX1ZJREVPX0lCTE9DS19UWVBFIjtzOjc6ImNvbnRlbnQiO3M6MTU6IlZJREVPX0lCTE9DS19JRCI7czoyOiIzMCI7czoyNjoiUVVJQ0tfVklFV19WSURFT19JQkxPQ0tfSUQiO3M6MjoiMzAiO3M6MTg6IlZJREVPX1BST1BFUlRZX1VSTCI7czo0OiJMSU5LIjtzOjI5OiJRVUlDS19WSUVXX1ZJREVPX1BST1BFUlRZX1VSTCI7czo0OiJMSU5LIjtzOjIwOiJTRVJWSUNFU19JQkxPQ0tfVFlQRSI7czo4OiJjYXRhbG9ncyI7czozMToiUVVJQ0tfVklFV19TRVJWSUNFU19JQkxPQ0tfVFlQRSI7czo4OiJjYXRhbG9ncyI7czoxODoiU0VSVklDRVNfSUJMT0NLX0lEIjtzOjI6IjIyIjtzOjI5OiJRVUlDS19WSUVXX1NFUlZJQ0VTX0lCTE9DS19JRCI7czoyOiIyMiI7czoyMzoiU0VSVklDRVNfUFJPUEVSVFlfUFJJQ0UiO3M6MTI6IlNZU1RFTV9QUklDRSI7czozNDoiUVVJQ0tfVklFV19TRVJWSUNFU19QUk9QRVJUWV9QUklDRSI7czoxMjoiU1lTVEVNX1BSSUNFIjtzOjE5OiJSRVZJRVdTX0lCTE9DS19UWVBFIjtzOjc6InJldmlld3MiO3M6MzA6IlFVSUNLX1ZJRVdfUkVWSUVXU19JQkxPQ0tfVFlQRSI7czo3OiJyZXZpZXdzIjtzOjE3OiJSRVZJRVdTX0lCTE9DS19JRCI7czoyOiIxOCI7czoyODoiUVVJQ0tfVklFV19SRVZJRVdTX0lCTE9DS19JRCI7czoyOiIxOCI7czoyNzoiUkVWSUVXU19QUk9QRVJUWV9FTEVNRU5UX0lEIjtzOjExOiJwcm9kdWN0c19pZCI7czozODoiUVVJQ0tfVklFV19SRVZJRVdTX1BST1BFUlRZX0VMRU1FTlRfSUQiO3M6MTE6InByb2R1Y3RzX2lkIjtzOjE5OiJSRVZJRVdTX1VTRV9DQVBUQ0hBIjtzOjE6Ik4iO3M6MzA6IlFVSUNLX1ZJRVdfUkVWSUVXU19VU0VfQ0FQVENIQSI7czoxOiJOIjtzOjE2OiJQUk9QRVJUWV9BUlRJQ0xFIjtzOjE0OiJTWVNURU1fQVJUSUNMRSI7czoyNzoiUVVJQ0tfVklFV19QUk9QRVJUWV9BUlRJQ0xFIjtzOjE0OiJTWVNURU1fQVJUSUNMRSI7czoxNDoiUFJPUEVSVFlfQlJBTkQiO3M6MTI6IlNZU1RFTV9CUkFORCI7czoyNToiUVVJQ0tfVklFV19QUk9QRVJUWV9CUkFORCI7czoxMjoiU1lTVEVNX0JSQU5EIjtzOjE3OiJQUk9QRVJUWV9QSUNUVVJFUyI7czoxMzoiU1lTVEVNX0lNQUdFUyI7czoyODoiUVVJQ0tfVklFV19QUk9QRVJUWV9QSUNUVVJFUyI7czoxMzoiU1lTVEVNX0lNQUdFUyI7czoxNzoiUFJPUEVSVFlfU0VSVklDRVMiO3M6MjM6IlNZU1RFTV9SRUxBVEVEX1NFUlZJQ0VTIjtzOjI4OiJRVUlDS19WSUVXX1BST1BFUlRZX1NFUlZJQ0VTIjtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7czoxODoiUFJPUEVSVFlfRE9DVU1FTlRTIjtzOjE2OiJTWVNURU1fRE9DVU1FTlRTIjtzOjI5OiJRVUlDS19WSUVXX1BST1BFUlRZX0RPQ1VNRU5UUyI7czoxNjoiU1lTVEVNX0RPQ1VNRU5UUyI7czoxOToiUFJPUEVSVFlfQURESVRJT05BTCI7czoxNzoiU1lTVEVNX0FERElUSU9OQUwiO3M6MzA6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfQURESVRJT05BTCI7czoxNzoiU1lTVEVNX0FERElUSU9OQUwiO3M6MTk6IlBST1BFUlRZX0FTU09DSUFURUQiO3M6MTc6IlNZU1RFTV9BU1NPQ0lBVEVEIjtzOjMwOiJRVUlDS19WSUVXX1BST1BFUlRZX0FTU09DSUFURUQiO3M6MTc6IlNZU1RFTV9BU1NPQ0lBVEVEIjtzOjIwOiJQUk9QRVJUWV9SRUNPTU1FTkRFRCI7czoxODoiU1lTVEVNX1JFQ09NTUVOREVEIjtzOjMxOiJRVUlDS19WSUVXX1BST1BFUlRZX1JFQ09NTUVOREVEIjtzOjE4OiJTWVNURU1fUkVDT01NRU5ERUQiO3M6MTQ6IlBST1BFUlRZX1ZJREVPIjtzOjU6IlZJREVPIjtzOjI1OiJRVUlDS19WSUVXX1BST1BFUlRZX1ZJREVPIjtzOjU6IlZJREVPIjtzOjIzOiJPRkZFUlNfUFJPUEVSVFlfQVJUSUNMRSI7czoxNDoiU1lTVEVNX0FSVElDTEUiO3M6MzQ6IlFVSUNLX1ZJRVdfT0ZGRVJTX1BST1BFUlRZX0FSVElDTEUiO3M6MTQ6IlNZU1RFTV9BUlRJQ0xFIjtzOjI0OiJPRkZFUlNfUFJPUEVSVFlfUElDVFVSRVMiO3M6MTM6IlNZU1RFTV9JTUFHRVMiO3M6MzU6IlFVSUNLX1ZJRVdfT0ZGRVJTX1BST1BFUlRZX1BJQ1RVUkVTIjtzOjEzOiJTWVNURU1fSU1BR0VTIjtzOjE2OiJDT05WRVJUX0NVUlJFTkNZIjtzOjE6IlkiO3M6Mjc6IlFVSUNLX1ZJRVdfQ09OVkVSVF9DVVJSRU5DWSI7czoxOiJZIjtzOjExOiJDVVJSRU5DWV9JRCI7czozOiJSVUIiO3M6MjI6IlFVSUNLX1ZJRVdfQ1VSUkVOQ1lfSUQiO3M6MzoiUlVCIjtzOjEwOiJQUklDRV9DT0RFIjthOjQ6e2k6MDtzOjQ6IkJBU0UiO2k6MTtzOjA6IiI7aToyO3M6NDoiQkFTRSI7aTozO3M6MDoiIjt9czoyMToiUVVJQ0tfVklFV19QUklDRV9DT0RFIjthOjI6e2k6MDtzOjQ6IkJBU0UiO2k6MTtzOjA6IiI7fXM6MTE6IklCTE9DS19UWVBFIjtzOjg6ImNhdGFsb2dzIjtzOjk6IklCTE9DS19JRCI7czoyOiIxNiI7czoxODoiRUxFTUVOVF9TT1JUX0ZJRUxEIjtzOjQ6InNvcnQiO3M6MTg6IkVMRU1FTlRfU09SVF9PUkRFUiI7czozOiJhc2MiO3M6MTk6IkVMRU1FTlRfU09SVF9GSUVMRDIiO3M6MjoiaWQiO3M6MTk6IkVMRU1FTlRfU09SVF9PUkRFUjIiO3M6NDoiZGVzYyI7czoxMzoiUFJPUEVSVFlfQ09ERSI7YToxNjp7aTowO3M6NjoiV0VJR1RIIjtpOjE7czo3OiJESVNQTEFZIjtpOjI7czo2OiJMRU5HVEgiO2k6MztzOjE3OiJTWVNURU1fQURESVRJT05BTCI7aTo0O3M6MTg6IlFVQU5USVRZX09GX1NUUklQUyI7aTo1O3M6NToiUE9XRVIiO2k6NjtzOjg6IlNFVFRJTkdTIjtpOjc7czo1OiJTQ09QRSI7aTo4O3M6MTA6IlBST0NSRUFUT1IiO2k6OTtzOjY6IlNFQVNPTiI7aToxMDtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7aToxMTtzOjExOiJDT01QT1NJVElPTiI7aToxMjtzOjEzOiJQUk9QRVJUWV9URVNUIjtpOjEzO3M6NDoiVFlQRSI7aToxNDtzOjc6IlBBVFRFUk4iO2k6MTU7czoxODoiRU5FUkdZX0NPTlNVTVBUSU9OIjt9czoxMzoiTUVUQV9LRVlXT1JEUyI7czoxOiItIjtzOjE2OiJNRVRBX0RFU0NSSVBUSU9OIjtzOjE6Ii0iO3M6MTM6IkJST1dTRVJfVElUTEUiO3M6MToiLSI7czoxOToiSU5DTFVERV9TVUJTRUNUSU9OUyI7czoxOiJZIjtzOjEwOiJCQVNLRVRfVVJMIjtzOjE3OiIvcGVyc29uYWwvYmFza2V0LyI7czoxNToiQUNUSU9OX1ZBUklBQkxFIjtzOjY6ImFjdGlvbiI7czoxOToiUFJPRFVDVF9JRF9WQVJJQUJMRSI7czoyOiJpZCI7czoxOToiU0VDVElPTl9JRF9WQVJJQUJMRSI7czoxMDoiU0VDVElPTl9JRCI7czoyNToiUFJPRFVDVF9RVUFOVElUWV9WQVJJQUJMRSI7czo4OiJxdWFudGl0eSI7czoyMjoiUFJPRFVDVF9QUk9QU19WQVJJQUJMRSI7czo0OiJwcm9wIjtzOjExOiJGSUxURVJfTkFNRSI7czo5OiJhcnJGaWx0ZXIiO3M6MTA6IkNBQ0hFX1RZUEUiO3M6MToiQSI7czoxMDoiQ0FDSEVfVElNRSI7czo4OiIzNjAwMDAwMCI7czoxMjoiQ0FDSEVfRklMVEVSIjtzOjE6Ik4iO3M6MTI6IkNBQ0hFX0dST1VQUyI7czoxOiJZIjtzOjk6IlNFVF9USVRMRSI7czoxOiJZIjtzOjExOiJNRVNTQUdFXzQwNCI7TjtzOjE0OiJTRVRfU1RBVFVTXzQwNCI7czoxOiJZIjtzOjg6IlNIT1dfNDA0IjtzOjE6IlkiO3M6ODoiRklMRV80MDQiO3M6ODoiLzQwNC5waHAiO3M6MTg6IlBBR0VfRUxFTUVOVF9DT1VOVCI7czoyOiIzMCI7czoxODoiTElORV9FTEVNRU5UX0NPVU5UIjtpOjM7czoxNToiRElTUExBWV9QUkVWSUVXIjtOO3M6MTg6IkRJU1BMQVlfUFJPUEVSVElFUyI7TjtzOjI0OiJVU0VfTUFJTl9FTEVNRU5UX1NFQ1RJT04iO3M6MToiWSI7czoxNToiVVNFX1BSSUNFX0NPVU5UIjtzOjE6IlkiO3M6MTY6IlNIT1dfUFJJQ0VfQ09VTlQiO3M6MToiMSI7czoxNzoiUFJJQ0VfVkFUX0lOQ0xVREUiO3M6MToiWSI7czoyMDoiUFJJQ0VfVkFUX1NIT1dfVkFMVUUiO3M6MToiTiI7czoxNzoiRElTUExBWV9UT1BfUEFHRVIiO3M6MToiTiI7czoyMDoiRElTUExBWV9CT1RUT01fUEFHRVIiO3M6MToiWSI7czoxMToiUEFHRVJfVElUTEUiO3M6MTI6ItCi0L7QstCw0YDRiyI7czoxNzoiUEFHRVJfU0hPV19BTFdBWVMiO3M6MToiTiI7czoxNDoiUEFHRVJfVEVNUExBVEUiO3M6ODoiLmRlZmF1bHQiO3M6MjA6IlBBR0VSX0RFU0NfTlVNQkVSSU5HIjtzOjE6Ik4iO3M6MzE6IlBBR0VSX0RFU0NfTlVNQkVSSU5HX0NBQ0hFX1RJTUUiO3M6NToiMzYwMDAiO3M6MTQ6IlBBR0VSX1NIT1dfQUxMIjtzOjE6Ik4iO3M6MjU6IkhJREVfTk9UX0FWQUlMQUJMRV9PRkZFUlMiO3M6MToiTiI7czoyMDoiUFJPRFVDVF9ESVNQTEFZX01PREUiO3M6MToiWSI7czoxODoiUFJPRFVDVF9QUk9QRVJUSUVTIjtzOjA6IiI7czoxNjoiT0ZGRVJfVFJFRV9QUk9QUyI7YToxOntpOjA7czoxMToiT0ZGRVJTX1NJWkUiO31zOjIyOiJPRkZFUlNfQ0FSVF9QUk9QRVJUSUVTIjtzOjA6IiI7czoxNzoiT0ZGRVJTX0ZJRUxEX0NPREUiO3M6MDoiIjtzOjIwOiJPRkZFUlNfUFJPUEVSVFlfQ09ERSI7YToxOntpOjA7czoxMToiT0ZGRVJTX1NJWkUiO31zOjE3OiJPRkZFUlNfU09SVF9GSUVMRCI7czo0OiJzb3J0IjtzOjE3OiJPRkZFUlNfU09SVF9PUkRFUiI7czozOiJhc2MiO3M6MTg6Ik9GRkVSU19TT1JUX0ZJRUxEMiI7czoyOiJpZCI7czoxODoiT0ZGRVJTX1NPUlRfT1JERVIyIjtzOjQ6ImRlc2MiO3M6MTI6Ik9GRkVSU19MSU1JVCI7czoxOiIwIjtzOjEwOiJTRUNUSU9OX0lEIjtzOjI6IjExIjtzOjEyOiJTRUNUSU9OX0NPREUiO3M6MTk6Im1lemhrb21uYXRueWVfZHZlcmkiO3M6MTE6IlNFQ1RJT05fVVJMIjtzOjI5OiIvY2F0YWxvZy8jU0VDVElPTl9DT0RFX1BBVEgjLyI7czoxMDoiREVUQUlMX1VSTCI7czo0NDoiL2NhdGFsb2cvI1NFQ1RJT05fQ09ERV9QQVRIIy8jRUxFTUVOVF9DT0RFIy8iO3M6MTg6IkhJREVfTk9UX0FWQUlMQUJMRSI7czoxOiJOIjtzOjExOiJVU0VfQ09NUEFSRSI7czoxOiJZIjtzOjEyOiJDT01QQVJFX05BTUUiO3M6NzoiY29tcGFyZSI7czoxMjoiQ09NUEFSRV9QQVRIIjtzOjQxOiIvY2F0YWxvZy9jb21wYXJlLnBocD9hY3Rpb249I0FDVElPTl9DT0RFIyI7czo0OiJXSURFIjtzOjE6Ik4iO3M6MTc6IkNVUlJFTlRfQkFTRV9QQUdFIjtzOjI5OiIvY2F0YWxvZy9tZXpoa29tbmF0bnllX2R2ZXJpLyI7czoxMToiUEFSRU5UX05BTUUiO3M6MTQ6ImJpdHJpeDpjYXRhbG9nIjtzOjIwOiJQQVJFTlRfVEVNUExBVEVfTkFNRSI7czo5OiJjYXRhbG9nLjEiO3M6MjA6IlBBUkVOVF9URU1QTEFURV9QQUdFIjtzOjc6InNlY3Rpb24iO3M6MTM6IkdMT0JBTF9GSUxURVIiO2E6MDp7fX0=.00fba78c53144bba10fcdda8783622611c847d0973abca933f4cba80bde18364',
            'ajaxId': null,
            'container': 'i-17-bitrix-catalog-section-catalog-tile-2-OQ3k9PHlVICg-1'
        });

        component.processItems = (function(){
            var action = component.processItems;

            return function(){
                var result = action.apply(this, arguments);

                root.update();
                universe.basket.update();

                return result;
            };
        })();

        root.update();
    });
})(jQuery, intec);

(function($, api){
    var root = $('#i-18-bitrix-iblock-vote-template-1-sBq3IILwVHEL');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'fbeb8810101d217b6544b05be75f6680',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3248
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-19-bitrix-iblock-vote-template-1-NLJNn1hMEOEL');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '0494c5e57b3f911e3f98001c31650856',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3247
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-20-bitrix-iblock-vote-template-1-ZzF7UWjnOd29');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'ea10376c3ce4a7473b9bbede6775adab',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3246
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-21-bitrix-iblock-vote-template-1-Iu9Bjo370DO6');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '3c4f20382c2cd74b2203b8551c6b0d14',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3245
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-22-bitrix-iblock-vote-template-1-q11WwmFQO28o');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '8cad6fdccbf67b7c70cc902b2bd3d81e',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3244
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(3);

})(jQuery, intec);

(function($, api){
    var root = $('#i-23-bitrix-iblock-vote-template-1-wnW8nWDwVMAz');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '38ac53ba2139b25fa8d0d4ee5130d28b',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3243
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-24-bitrix-iblock-vote-template-1-XmMM27FwGRKm');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'e00073007c4093ddb931c8700eddf365',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3242
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-25-bitrix-iblock-vote-template-1-oQMX41wbhxLX');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '2cb53587328fc9f5c322d7afe481ede5',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3241
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-26-bitrix-iblock-vote-template-1-D8NkGP3HVMyd');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '4326b2f5e8edbb50debac209684a0aa6',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3240
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-27-bitrix-iblock-vote-template-1-lsS7wV35KQLD');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'd45a06a2e04eb4b2a7167376f9957425',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3239
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-28-bitrix-iblock-vote-template-1-DPn1tVttGIxW');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'ee28456e0e30460a6fb850e1168ddf8d',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3238
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-29-bitrix-iblock-vote-template-1-P0iQM1uLpzbA');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'c7cc387f2a0b06b007651643ba780ea1',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3237
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-30-bitrix-iblock-vote-template-1-ElfdKBhjM0Uf');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '0f80209cf50100f362d750bdeb56a8c5',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3236
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-31-bitrix-iblock-vote-template-1-VCNcVevEAvFf');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '448ce930dcb3bfe8c5adec0a290050cd',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3235
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-32-bitrix-iblock-vote-template-1-4NIrVsSXxSBN');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '6288c54a09017a282a22b434a94ec01c',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3234
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-33-bitrix-iblock-vote-template-1-4l4lnWMBf1U2');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '99387b0f49cb3d8c2d702b0dbfef8439',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3233
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-34-bitrix-iblock-vote-template-1-1Z70s7QANHn4');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '24a5bf8b6b36245c9f46fcbc7eb2f7a1',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3232
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-35-bitrix-iblock-vote-template-1-dz9BX0zNSBMh');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '2ff9f01411b9fb689361702c382f68e8',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3231
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-36-bitrix-iblock-vote-template-1-7vAXOPs3S9AE');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'e91f10c549fa8fd6d980e80b015eb60c',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3230
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-37-bitrix-iblock-vote-template-1-4sTTk09iUTgM');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'f77c85e6c3fe5e10851e42108fd975a0',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3229
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-38-bitrix-iblock-vote-template-1-8ujv5FpNOGjS');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'f11c276c6914618ef10158a138c4ac09',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3228
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-39-bitrix-iblock-vote-template-1-sGLIbrrBl7ob');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '325273b0e902e1b1a9154959d14ee655',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3227
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(3);

})(jQuery, intec);

(function($, api){
    var root = $('#i-40-bitrix-iblock-vote-template-1-NG30rEbPdHaE');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '0dab29c1d954ed3c5a3ffff701f3ebd0',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3226
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-41-bitrix-iblock-vote-template-1-V0TT9Cjlm8BY');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'ce8a04c7648115a0f63051b0a8fff22c',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3225
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-42-bitrix-iblock-vote-template-1-JnCJFI8mVizB');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '4a149a6dca03063e4664914d3e782c5e',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3224
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-43-bitrix-iblock-vote-template-1-uer0eq6gx2Lq');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'db1581bbcfb8798576d3435235f1ddfd',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3223
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-44-bitrix-iblock-vote-template-1-8cO2TL7ccXYF');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'abd08be741bbc1e82dd43dbca40b7423',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3222
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-45-bitrix-iblock-vote-template-1-Uils8NHcN4DM');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'dab80b524c3435346958e545a4942267',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3221
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(4);

})(jQuery, intec);

(function($, api){
    var root = $('#i-46-bitrix-iblock-vote-template-1-8kDYk5kgTOzJ');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': 'a34d5d8d7b6348d15455d2a6da2437bd',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3220
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);

(function($, api){
    var root = $('#i-47-bitrix-iblock-vote-template-1-TVcf1qo0ZCN6');
    var id = root.data('id');
    var voted = false;
    var container = $('[data-role="container"]', root);
    var votes = $('[data-role="container.vote"]', container);

    root.update = function(rating){
        votes.each(function(){
            var vote = $(this);
            var active = vote.data('active');
            if (!active) {
                if (vote.index() < rating) {
                    vote.attr('data-focus', true);
                } else {
                    vote.attr('data-focus', false);
                }
            }
        })
    };

    votes.each(function(){
        var vote = $(this);
        var rating = vote.index() + 1;
        var active = vote.data('active');
        var value = vote.data('value');
        var arParams = {
            'SESSION_PARAMS': '3ff6c7fac44f05f0f61a00b0bc7d2db1',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 3219
            },
            'sessid': 'cb5c5a69cb1f93f64e2b7556aec672fb',
            'AJAX_CALL': 'Y'
        };

        if (!voted) {
            vote.on('click', function(){

                arParams['vote'] = 'Y';
                arParams['vote_id'] = id;
                arParams['rating'] = value;

                $.post(
                        '/bitrix/components/bitrix/iblock.vote/component.php',
                        arParams,
                        function(data){
                            root.html(data);
                        }
                );
            });

            if (!active) {
                vote.on('mouseover', function(){
                    root.update(rating);
                });
                vote.on('mouseout', function(){
                    root.update(0);
                });
            }
        }
    });

    root.update(5);

})(jQuery, intec);