(function($, api){
    var root = $('#i-22-bitrix-map-yandex-system-default-oDVDw7rHIBtO');
    var control = $('[data-role="control"]', root);
    var overlay = $('[data-role="overlay"]', root);
    var data = {
        'options': {
            'zoom': 16,
            'center': [59.72291, 30.254479],
            'type': 'yandex#map'
        },
        'behaviors': {
            'scrollZoom': true,
            'dblClickZoom': true,
            'drag': true,
            'rightMouseButtonMagnifier': false
        },
        'controls': {
            'zoomControl': true,
            'smallZoomControl': false,
            'miniMap': true,
            'typeSelector': true,
            'scaleLine': true,
            'searchControl': false
        }
    };
    var initialize;
    var loader;

    initialize = function(){
        var options = data.options;
        var behaviors = data.behaviors;
        var controls = data.controls;
        var map;

        if (!window.ymaps)
            return;

        control.html(null);
        map = new window.ymaps.Map(control.get(0), options);

        api.each(behaviors, function(behavior, state){
            if (state) {
                map.behaviors.enable(behavior);
            } else if (map.behaviors.isEnabled(behavior)) {
                map.behaviors.disable(behavior);
            }
        });

        api.each(controls, function(control, state){
            if (state)
                map.controls.add(control);
        });


        if (!api.isObject(window.maps))
            window.maps = {};

        window.maps['MAP_Ax3tumAVaE'] = map;

        overlay.show();

        root.on('mousedown', function(event){
            overlay.hide();
        }).on('mouseleave', function(event){
            overlay.show();
        });
    };

    loader = function(){
        if (window.ymaps) {
            ymaps.ready(initialize);
        } else {
            setTimeout(loader, 100);
        }
    };

    loader();
})(jQuery, intec);

(function($, api){
    var root = $('#i-21-bitrix-map-yandex-view-default-KKjE7gDXZnhd');
    var data = {
        'marks': [{
                'position': {
                    'latitude': 59.782060842443,
                    'longitude': 30.487959803344
                },
                'title': 'Магазин 3',
                'text': 'Магазин 3'
            }, {
                'position': {
                    'latitude': 59.72291,
                    'longitude': 30.254479
                },
                'title': 'Магазин 2',
                'text': 'Магазин 2'
            }, {
                'position': {
                    'latitude': 55.185289938501,
                    'longitude': 61.480603214004
                },
                'title': 'Магазин 1',
                'text': 'Магазин 1'
            }, {
                'position': {
                    'latitude': 55.168647615902,
                    'longitude': 61.409719884396
                },
                'title': 'Главный офис',
                'text': 'Главный офис'
            }],
        'polylines': []
    };
    var initialize;
    var loader;

    initialize = function(){
        var map = null;

        if (!api.isObject(window.maps))
            return false;

        map = window.maps['MAP_Ax3tumAVaE'];

        if (map == null)
            return false;

        api.each(data.marks, function(index, mark){
            map.geoObjects.add(new ymaps.Placemark([
                mark.position.latitude,
                mark.position.longitude
            ], {
                'hintContent': mark.title,
                'balloonContent': mark.text
            }, {
                'balloonCloseButton': true
            }));
        });

        api.each(data.polylines, function(index, polyline){
            var points = [];
            var parameters;

            api.each(polyline.points, function(index, point){
                points.push([point.latitude, point.longitude]);
            });

            if (points.length < 2)
                return;

            parameters = {};
            parameters.clickable = true;

            if (polyline.style != null) {
                parameters.strokeColor = polyline.style.strokeColor;
                parameters.strokeWidth = polyline.style.strokeWidth;
            }

            map.geoObjects.add(new ymaps.Polyline(points, {
                'balloonContent': polyline.title
            }, parameters));
        });

        return true;
    };

    loader = function(){
        var load;

        load = function(){
            if (!initialize())
                setTimeout(load, 100);
        };

        if (window.ymaps) {
            ymaps.ready(load);
        } else {
            setTimeout(loader, 100);
        }
    };

    loader();
})(jQuery, intec);

(function($, api){
    var root = $('#i-20-bitrix-news-list-contacts-7DqYycKlRukS');
    var buttons = $('[data-latitude][data-longitude]', root);
    var initialize;
    var loader;
    var move;
    var map;

    initialize = function(){
        if (!api.isObject(window.maps))
            return false;

        map = window.maps['MAP_Ax3tumAVaE'];

        if (map == null)
            return false;

        buttons.on('click', function(event){
            var item = $(this);
            var anchor = item.attr('href');

            move(
                    item.data('latitude'),
                    item.data('longitude')
                    );

            if (anchor) {
                $(window).stop().animate({
                    scrollTop: $(anchor).offset().top
                }, 1000);

                event.preventDefault();
            }
        });

        return true;
    };

    move = function(latitude, longitude){
        latitude = api.toFloat(latitude);
        longitude = api.toFloat(longitude);

        map.panTo([latitude, longitude]);
    };

    loader = function(){
        var load;

        load = function(){
            if (!initialize())
                setTimeout(load, 100);
        };

        if (window.ymaps) {
            ymaps.ready(load);
        } else {
            setTimeout(loader, 100);
        }
    };

    loader();
})(jQuery, intec);