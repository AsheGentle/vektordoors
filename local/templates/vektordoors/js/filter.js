var smartFilter = new JCSmartFilter(
        '/catalog/mezhkomnatnye_dveri/',
        'VERTICAL', {
            'SEF_SET_FILTER_URL': '/catalog/mezhkomnatnye_dveri/filter/clear/apply/',
            'SEF_DEL_FILTER_URL': '/catalog/mezhkomnatnye_dveri/filter/clear/apply/',
            'id': {
                'setFilter': 'set_filter',
                'delFilter': 'del_filter'
            },
            'variable': 'smartFilter'
        });

(function($, api){
    var root = $('#i-13-bitrix-catalog-smart-filter-vertical-1-KZ7kpsh6etqY');
    var filter = {
        'button': $('[data-role="filter.toggle"]', root),
        'body': $('[data-role="filter"]', root),
        'state': $('[data-role="filter"]', root).data('expanded'),
        'toggle': null
    };
    var popup = {
        'button': $('[data-role="popup.close"]', root),
        'close': null
    };

    popup.close = function(){
        var container = popup.button.closest('[data-role="popup"]');

        container.animate({
            'opacity': '0'
        }, 200, function(){
            container.css({
                'opacity': '',
                'display': 'none'
            });
        });
    };

    (function(){
        filter.toggle = function(){
            var title = $('span', filter.button);
            var height = {
                'current': null,
                'full': null
            };

            if (filter.state === true) {
                filter.state = false;
                filter.body.attr('data-expanded', filter.state);

                filter.body.stop().animate({
                    'height': '0'
                }, 300, function(){
                    filter.body.css('display', 'none');
                });
                title.stop().animate({
                    'opacity': '0'
                }, 100, function(){
                    title.html("Показать фильтр");
                    title.animate({
                        'opacity': '1'
                    }, 100);
                });
            } else if (filter.state === false) {
                filter.state = true;
                filter.body.attr('data-expanded', filter.state);

                filter.body.stop().css('display', '');
                height.current = filter.body.height();

                filter.body.css('height', '');
                height.full = filter.body.height();

                filter.body.css('height', height.current).animate({
                    'height': height.full
                }, 300, function(){
                    filter.body.css('height', '');
                });
                title.stop().animate({
                    'opacity': '0'
                }, 100, function(){
                    title.html("Скрыть фильтр");
                    title.animate({
                        'opacity': '1'
                    }, 100);
                });
            }
        };
    })();

    filter.button.on('click', function(){
        filter.toggle();
    });

    popup.button.on('click', function(){
        popup.close()
    });
})(jQuery, intec);

var smartFilterMobile = new JCSmartFilter(
        '/catalog/mezhkomnatnye_dveri/',
        'VERTICAL', {
            'SEF_SET_FILTER_URL': '/catalog/mezhkomnatnye_dveri/filter/clear/apply/',
            'SEF_DEL_FILTER_URL': '/catalog/mezhkomnatnye_dveri/filter/clear/apply/',
            'id': {
                'setFilter': 'set_filter_mobile',
                'delFilter': 'del_filter_mobile'
            },
            'variable': 'smartFilterMobile'
        });

(function($, api){
    var root = $('#i-15-bitrix-catalog-smart-filter-vertical-1-C43QSE2wkUR8');
    var filter = {
        'button': $('[data-role="filter.toggle"]', root),
        'body': $('[data-role="filter"]', root),
        'state': $('[data-role="filter"]', root).data('expanded'),
        'toggle': null
    };
    var popup = {
        'button': $('[data-role="popup.close"]', root),
        'close': null
    };

    popup.close = function(){
        var container = popup.button.closest('[data-role="popup"]');

        container.animate({
            'opacity': '0'
        }, 200, function(){
            container.css({
                'opacity': '',
                'display': 'none'
            });
        });
    };

    (function(){
        filter.toggle = function(){
            var title = $('span', filter.button);
            var height = {
                'current': null,
                'full': null
            };

            if (filter.state === true) {
                filter.state = false;
                filter.body.attr('data-expanded', filter.state);

                filter.body.stop().animate({
                    'height': '0'
                }, 300, function(){
                    filter.body.css('display', 'none');
                });
                title.stop().animate({
                    'opacity': '0'
                }, 100, function(){
                    title.html("Показать фильтр");
                    title.animate({
                        'opacity': '1'
                    }, 100);
                });
            } else if (filter.state === false) {
                filter.state = true;
                filter.body.attr('data-expanded', filter.state);

                filter.body.stop().css('display', '');
                height.current = filter.body.height();

                filter.body.css('height', '');
                height.full = filter.body.height();

                filter.body.css('height', height.current).animate({
                    'height': height.full
                }, 300, function(){
                    filter.body.css('height', '');
                });
                title.stop().animate({
                    'opacity': '0'
                }, 100, function(){
                    title.html("Скрыть фильтр");
                    title.animate({
                        'opacity': '1'
                    }, 100);
                });
            }
        };
    })();

    filter.button.on('click', function(){
        filter.toggle();
    });

    popup.button.on('click', function(){
        popup.close()
    });
})(jQuery, intec);

(function(){
    var root = $('#i-12-bitrix-catalog-catalog-1-CxqOHgQWlxgr');
    var filter = $('[data-role="filter"]', root);
    var content = $('[data-role="content"]', root);

    filter.state = false;
    filter.button = $('[data-role="filter.button"]', root);
    filter.button.on('click', function(){
        if (filter.state) {
            filter.hide();
        } else {
            filter.show();
        }

        filter.state = !filter.state;
    });

    content.refresh = function(url){
        if (url == null)
            url = null;

        $.ajax({
            'url': url,
            'data': {
                'catalog': {
                    'ajax': 'Y'
                }
            },
            'cache': false,
            'success': function(response){
                content.html(response);
                universe.basket.update();
            }
        });
    };

    if (smartFilter && smartFilter.on)
        smartFilter.on('refresh', function(event, url){
            if (window.history.enabled || window.history.pushState != null) {
                window.history.pushState(null, document.title, url);
            } else {
                window.location.href = url;
            }

            content.refresh(url);
        });
})();