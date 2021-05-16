$(document).on('ready', function(){
    $(window).scroll(function(){
        if ($(this).scrollTop() > 800) {
            $('.button_top').fadeIn();
        } else {
            $('.button_top').fadeOut();
        }
    });

    $('.button_top').click(function(){
        $('body, html').animate({
            scrollTop: 0
        }, 600);
    });

    var scrollWidth = getScrollbarWidth();
    function getScrollbarWidth(){
        var outer = document.createElement('div');
        outer.style.visibility = 'hidden';
        outer.style.overflow = 'scroll';
        outer.style.msOverflowStyle = 'scrollbar';
        document.body.appendChild(outer);
        var inner = document.createElement('div');
        outer.appendChild(inner);
        var scrollbarWidth = (outer.offsetWidth - inner.offsetWidth);
        outer.parentNode.removeChild(outer);
        return scrollbarWidth;
    }

    $("[data-modal]").on("click", function(){
        var modalId = $(this).data("modal");
        $(".modal").removeClass("open");
        $(modalId).addClass("open");
        $("body").addClass("overflow").css('padding-right', scrollWidth);
        $("header").css('padding-right', scrollWidth);
    });
    $(".modal__close").on("click", function(){
        $(this).parents(".modal").removeClass("open");
        $("body").removeClass("overflow").css('padding-right', '0');
        $("header").css('padding-right', '0');
    });
    $(".modal").on("click", function(e){
        var div = $(this).find(".modal__content");
        if (!div.is(e.target) && div.has(e.target).length === 0) {
            $(this).removeClass("open");
            $("body").removeClass("overflow").css('padding-right', '0');
            $("header").css('padding-right', '0');
        }
    });


    // sertificat gallery
    $('.intec-certificates_list').lightGallery({
        selector: '.intec-certificates_wrap',
        autoplay: false,
        share: false
    });


    // form-verification start
    var root = $('.form-inputs-verification');

    var inputs = $('[data-role="input"]', root);
    var update;

    update = function(){
        var self = $(this);

        if (self.val() != '') {
            self.addClass('completed');
        } else {
            self.removeClass('completed');
        }
    };

    $(document).ready(function(){
        inputs.each(function(){
            update.call(this);
        });
    });

    inputs.on('change', function(){
        update.call(this);
    });
    // form-verification end
});

$(document).on('ready', function(){
    // search start
    var root = $('#search-title-popup');
    var search = $('[data-role="search"]', root);
    var overlay = $('[data-role="overlay"]', search);
    var panel = $('[data-role="panel"]', search);
    var input = $('[data-role="input"]', search);
    var page = $('html');
    var buttons = {};
    var state = false;

    buttons.open = $('[data-action="search.open"]', root);
    buttons.close = $('[data-action="search.close"]', root);

    search.open = function(){
        if (state)
            return;

        state = true;
        search.attr('data-expanded', 'true').css({
            'display': 'block'
        });

        page.css({
            'overflow': 'hidden',
            'height': '100%'
        });

        panel.stop().animate({
            'top': 0
        }, 350);
        overlay.stop().animate({
            'opacity': 0.5
        }, 350);

        input.focus();
    };

    search.close = function(){
        if (!state)
            return;

        state = false;
        search.attr('data-expanded', 'false');

        panel.stop().animate({
            'top': -panel.height()
        }, 350);
        overlay.stop().animate({
            'opacity': 0
        }, 350, function(){
            search.css({
                'display': 'none'
            });
            input.blur();

            page.css({
                'overflow': '',
                'height': ''
            });
        });
    };

    buttons.open.on('click', search.open);
    buttons.close.on('click', search.close);

    BX.ready(function(){
        var control = new JCTitleSearch({
            'AJAX_PAGE': '/',
            'CONTAINER_ID': 'search-title-popup',
            'INPUT_ID': '-desktop-popup-1',
            'MIN_QUERY_LEN': 2
        });

        control.ShowResult = (function(){
            var handler = control.ShowResult;

            return function(){
                if (state)
                    handler.apply(control, arguments);
            }
        })();
    });
    // search end
});

$(document).on('ready', function(){
    // search fixed start
    var root = $('#i-9-bitrix-search-title-popup');
    var search = $('[data-role="search"]', root);
    var overlay = $('[data-role="overlay"]', search);
    var panel = $('[data-role="panel"]', search);
    var input = $('[data-role="input"]', search);
    var page = $('html');
    var buttons = {};
    var state = false;

    buttons.open = $('[data-action="search.open"]', root);
    buttons.close = $('[data-action="search.close"]', root);

    search.open = function(){
        if (state)
            return;

        state = true;
        search.attr('data-expanded', 'true').css({
            'display': 'block'
        });

        page.css({
            'overflow': 'hidden',
            'height': '100%'
        });

        panel.stop().animate({
            'top': 0
        }, 350);
        overlay.stop().animate({
            'opacity': 0.5
        }, 350);

        input.focus();
    };

    search.close = function(){
        if (!state)
            return;

        state = false;
        search.attr('data-expanded', 'false');

        panel.stop().animate({
            'top': -panel.height()
        }, 350);
        overlay.stop().animate({
            'opacity': 0
        }, 350, function(){
            search.css({
                'display': 'none'
            });
            input.blur();

            page.css({
                'overflow': '',
                'height': ''
            });
        });
    };

    buttons.open.on('click', search.open);
    buttons.close.on('click', search.close);

    BX.ready(function(){
        var control = new JCTitleSearch({
            'AJAX_PAGE': '/',
            'CONTAINER_ID': 'i-9-bitrix-search-title-popup',
            'INPUT_ID': '-fixed-popup-1',
            'MIN_QUERY_LEN': 2
        });

        control.ShowResult = (function(){
            var handler = control.ShowResult;

            return function(){
                if (state)
                    handler.apply(control, arguments);
            }
        })();
    });
    //search fixed end
});

$(document).on('ready', function(){
    // header basket start
    var root = $('#i-2-intec-universe-sale-basket-small-notifications-1-l2XUFDqJSIDF');
    var container = $('[data-role="container"]', root);

    $(function(){
        var data;
        var add;

        data = {
            'component': 'intec.universe:sale.basket.small',
            'template': 'notifications.1',
            'parameters': {
                'BASKET_URL': '/personal/basket/',
                'CACHE_TYPE': 'A',
                '~BASKET_URL': '/personal/basket/',
                '~CACHE_TYPE': 'A',
                'AJAX_MODE': 'N'
            }
        };

        add = function(id){
            data.parameters['ID'] = id;

            universe.components.get(data, function(result){
                var item = $(result);
                var element;

                container.append(item);

                element = $('[data-product-id="' + id + '"]', container);

                element.attr('data-active', 'true');
                element.find('[data-role="close"]').on('click', function(){
                    element.attr('data-active', 'false');

                    setTimeout(function(){
                        item.remove();
                    }, 300);
                });

                setTimeout(function(){
                    element.attr('data-active', 'false');

                    setTimeout(function(){
                        item.remove();
                    }, 300);

                }, 5000);
            });
        };

        universe.basket.on('add', function(event, data){
            if (data.delay !== 'Y')
                add(data.id);
        });
    });
    // header basket end
});


(function($, api){
    var handler;

    handler = function(){
        var root = $('#i-6-bitrix-system-auth-form-panel');
        var buttons;
        var modal;
        var window;
        var data;

        data = {
            'id': 'i-6-bitrix-system-auth-form-panel-modal',
            'title': 'Авторизация'
        };

        modal = $('[data-role="modal"]', root);
        modal.open = function(){
            window.setContent(modal.clone().get(0));
            window.show();
        };

        window = new BX.PopupWindow(data.id, null, {
            'content': null,
            'title': data.title,
            'closeIcon': {
                'right': '20px',
                'top': '22px'
            },
            'zIndex': 0,
            'offsetLeft': 0,
            'offsetTop': 0,
            'width': 800,
            'overlay': true,
            'titleBar': {
                'content': BX.create('span', {
                    'html': data.title,
                    'props': {
                        'className': 'access-title-bar'
                    }
                })
            }
        });

        buttons = {};
        buttons.login = $('[data-action="login"]', root);
        buttons.login.on('click', modal.open);
    };

    $(document).on('ready', handler);
    BX.addCustomEvent('onFrameDataReceived', handler);

    $('.bx-auth-serv .bx-auth-service-form input[type=submit]').addClass('intec-ui intec-ui-control-button intec-ui-mod-round-3 intec-ui-size-2 intec-ui-scheme-current');
})(jQuery);

(function($, api){
    (function($, api){
        var handler;

        handler = function(){
            var root = $('#i-10-bitrix-system-auth-form-icons');
            var buttons;
            var modal;

            modal = $('[data-role="modal"]', root);
            modal.open = function(){
                var window;
                var data;

                data = {
                    'id': 'i-10-bitrix-system-auth-form-icons-modal',
                    'title': 'Авторизация'
                };

                window = new BX.PopupWindow(data.id, null, {
                    'content': modal.clone().get(0),
                    'title': data.title,
                    'closeIcon': {
                        'right': '20px',
                        'top': '22px'
                    },
                    'zIndex': 0,
                    'offsetLeft': 0,
                    'offsetTop': 0,
                    'width': 800,
                    'overlay': true,
                    'titleBar': {
                        'content': BX.create('span', {
                            'html': data.title,
                            'props': {
                                'className': 'access-title-bar'
                            }
                        })
                    }
                });

                window.show();
            };

            buttons = {};
            buttons.login = $('[data-action="login"]', root);
            buttons.login.on('click', modal.open);
        };

        $(document).on('ready', handler);

        BX.addCustomEvent("onFrameDataReceived", handler);
    })(jQuery);
})(jQuery);

(function($, api){
    $(document).on('ready', function(){
        var root = $('#i-3-intec-universe-main-header-template');
        var view = $('.widget-view.widget-view-fixed', root);
        var menu = $('.widget-menu .ns-bitrix.c-menu.c-menu-horizontal-1', view);

        view.on('show', function(){
            menu.trigger('update');
        });
    });
})(jQuery);

(function($, api){
    $(document).on('ready', function(){
        var root = $('#i-3-intec-universe-main-header-template');
        var state = false;
        var area = $(window);
        var views;
        var update;

        update = function(){
            var bound = 0;

            if (views.desktop.is(':visible')) {
                bound += views.desktop.height();
                bound += views.desktop.offset().top;
            }

            if (area.scrollTop() > bound) {
                views.fixed.show();
            } else {
                views.fixed.hide();
            }
        };

        views = {};
        views.desktop = $('.widget-view.widget-view-desktop', root);
        views.fixed = $('.widget-view.widget-view-fixed', root);
        views.fixed.css({
            'top': -views.fixed.height()
        });

        views.fixed.show = function(){
            var view = views.fixed;

            if (state)
                return;

            state = true;
            view.css({
                'display': 'block'
            });

            view.trigger('show');
            view.stop().animate({
                'top': 0
            }, 500)
        };

        views.fixed.hide = function(){
            var view = views.fixed;

            if (!state)
                return;

            state = false;
            view.stop().animate({
                'top': -view.height()
            }, 500, function(){
                view.trigger('hide');
                view.css({
                    'display': 'none'
                })
            })
        };

        update();

        area.on('scroll', update)
                .on('resize', update);
    });
})(jQuery);

(function($, api){
    $(document).on('ready', function(){
        var root = $('#i-3-intec-universe-main-header-template');
        var area = $(window);
        var view;
        var update;
        var stub = null;

        view = $('.widget-view.widget-view-mobile', root);
        update = function(){
            var bound = 0;

            view.removeClass('widget-view-mobile-fixed');

            if (view.is(':visible')) {
                bound += view.offset().top;

                if (area.scrollTop() > bound) {
                    if (stub === null) {
                        stub = $('<div></div>');
                        view.after(stub);
                    }

                    stub.css({
                        'height': view.height()
                    });

                    view.addClass('widget-view-mobile-fixed');
                } else {
                    if (stub !== null) {
                        stub.remove();
                        stub = null;
                    }
                }
            } else {
                if (stub !== null) {
                    stub.remove();
                    stub = null;
                }
            }
        };

        update();

        area.on('scroll', update)
                .on('resize', update);
    });
})(jQuery);