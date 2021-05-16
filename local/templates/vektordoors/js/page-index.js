(function($, api){
    var root = $('#i-13-bitrix-iblock-vote-template-1-sBq3IILwVHEL');
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
            'SESSION_PARAMS': '7f3d92bdc234ff85c6dfa266585490c2',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 720
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-14-bitrix-iblock-vote-template-1-NLJNn1hMEOEL');
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
            'SESSION_PARAMS': 'b39bb259399a4d65c48c312cfd0b51dd',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 709
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-15-bitrix-iblock-vote-template-1-ZzF7UWjnOd29');
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
            'SESSION_PARAMS': 'bfe63bada5feb00db2baaee889ad62f5',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 305
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-16-bitrix-iblock-vote-template-1-Iu9Bjo370DO6');
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
            'SESSION_PARAMS': '53bc562a60a54074229f3e4546f2817b',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 676
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-17-bitrix-iblock-vote-template-1-q11WwmFQO28o');
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
            'SESSION_PARAMS': '60721500202ba1f4919ed74602872de5',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 295
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-18-bitrix-iblock-vote-template-1-wnW8nWDwVMAz');
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
            'SESSION_PARAMS': 'aeedb037a0f00773b4c23c9fb5848dc1',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 294
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-19-bitrix-iblock-vote-template-1-XmMM27FwGRKm');
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
            'SESSION_PARAMS': '319bdc010840fa892239071788f0d6fa',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 273
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-20-bitrix-iblock-vote-template-1-oQMX41wbhxLX');
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
            'SESSION_PARAMS': '3e89fe3e87916def2e9e86e2ebae33f0',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 502
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-21-bitrix-iblock-vote-template-1-D8NkGP3HVMyd');
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
            'SESSION_PARAMS': '067755f2f5732d536c84fb0744959c89',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 450
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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
    var root = $('#i-22-bitrix-iblock-vote-template-1-lsS7wV35KQLD');
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
            'SESSION_PARAMS': 'f70d09d1c40d11eccab65b96a6c9a6d9',
            'PAGE_PARAMS': {
                'ELEMENT_ID': 290
            },
            'sessid': '5f3c6e7708afff5319dba1fe1b405b5c',
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