$(function(){

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

    $(".tab-auth").on("click", function(){
        $(".system-auth-form-body__tab.active").removeClass("active");
        $(".system-auth-form-body__tab[data-tab='tab-auth']").addClass("active");

        /*universe.components.get(
         {'component': 'bitrix:system.auth.authorize', 'template': 'template.1', 'parameters': {'AUTH_URL': '', 'BACKURL': '/?component=bitrix%3Asystem.auth.form&amp;template=template.1&amp;parameters%5BCOMPONENT_TEMPLATE%5D=template.1&amp;parameters%5BREGISTER_URL%5D=&amp;parameters%5BFORGOT_PASSWORD_URL%5D=&amp;parameters%5BPROFILE_URL%5D=&amp;parameters%5BSHOW_ERRORS%5D=N&amp;page%5Bpage%5D=components.get&amp;page%5Brequest%5D=y', 'AUTH_REGISTER_URL': '/?component=bitrix%3Asystem.auth.form&amp;template=template.1&amp;parameters%5BCOMPONENT_TEMPLATE%5D=template.1&amp;parameters%5BREGISTER_URL%5D=&amp;parameters%5BFORGOT_PASSWORD_URL%5D=&amp;parameters%5BPROFILE_URL%5D=&amp;parameters%5BSHOW_ERRORS%5D=N&amp;page%5Bpage%5D=components.get&amp;page%5Brequest%5D=y', 'AUTH_FORGOT_PASSWORD_URL': '/?component=bitrix%3Asystem.auth.form&amp;template=template.1&amp;parameters%5BCOMPONENT_TEMPLATE%5D=template.1&amp;parameters%5BREGISTER_URL%5D=&amp;parameters%5BFORGOT_PASSWORD_URL%5D=&amp;parameters%5BPROFILE_URL%5D=&amp;parameters%5BSHOW_ERRORS%5D=N&amp;page%5Bpage%5D=components.get&amp;page%5Brequest%5D=y', 'AJAX_MODE': 'N', 'AJAX_OPTION_ADDITIONAL': 'bx_2365939772__auth_form', 'AUTH_RESULT': ''}},
         function(popup){
         $('#bx_2365939772_ .system-auth-form-body').html(popup);
         })*/
    });

    $(".tab-reg").on("click", function(){
        $(".system-auth-form-body__tab.active").removeClass("active");
        $(".system-auth-form-body__tab[data-tab='tab-reg']").addClass("active");
        /*universe.components.get(
         {'component': 'bitrix:main.register', 'template': 'template.1', 'parameters': {'SHOW_FIELDS': ['EMAIL', 'NAME', 'PERSONAL_PHONE'], 'REQUIRED_FIELDS': ['EMAIL', 'NAME'], 'AUTH': 'Y', 'USE_BACKURL': 'Y', 'SUCCESS_PAGE': '', 'SET_TITLE': 'N', 'USER_PROPERTY': [], 'USER_PROPERTY_NAME': '', 'COMPONENT_TEMPLATE': 'template.1', 'AJAX_MODE': 'Y', 'AJAX_OPTION_ADDITIONAL': 'bx_2365939772__register_form'}},
         function(popup){
         $('#bx_2365939772_ .system-auth-form-body').html(popup);
         })*/
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

    // mobile menu start
    var root = $('#c-menu');
    var menu = $('[data-role="menu"]', root);
    var page = $('html');
    var buttons = {};
    var state = false;

    menu.items = $('[data-role="item"]', root);
    buttons.open = $('[data-action="menu.open"]', root);
    buttons.close = $('[data-action="menu.close"]', root);

    menu.open = function(){
        if (state)
            return;

        state = true;
        menu.css({
            'display': 'block'
        }).stop().animate({
            'opacity': 1
        }, 500);

        page.css({
            'overflow': 'hidden',
            'height': '100%'
        });
    };

    menu.close = function(){
        if (!state)
            return;

        state = false;
        menu.stop().animate({
            'opacity': 0
        }, 500, function(){
            menu.css({
                'display': 'none'
            });

            page.css({
                'overflow': '',
                'height': ''
            });
        });
    };

    buttons.open.on('click', menu.open);
    buttons.close.on('click', menu.close);

    menu.items.each(function(){
        var item = $(this);
        var parent = item.parents('[data-role="item"]').first();
        var items = $('[data-role="items"]', item).first();
        var buttons = {};
        var state = false;

        parent.items = $('[data-role="items"]', parent).first();

        if (items.size() === 0)
            return;

        buttons.open = $('[data-action="menu.item.open"]', item).first();
        buttons.close = $('[data-action="menu.item.close"]', items).first();

        item.open = function(){
            if (state)
                return;

            state = true;
            menu.items.attr('data-current', 'false');
            item.attr('data-expanded', 'true');
            item.attr('data-current', 'true');
            parent.items.scrollTop(0);
        };

        item.close = function(){
            if (!state)
                return;

            state = false;
            menu.items.attr('data-current', 'false');
            item.attr('data-expanded', 'false');
            parent.attr('data-current', 'true');
        };

        buttons.open.on('click', item.open);
        buttons.close.on('click', item.close);
    });
    // mobile menu end


    // right panel start
    var root = $('#c-sale-basket-small');
    var switches = $('[data-role="switches"]', root);
    var products = $('[data-role="product"]', root);
    var buttons = $('[data-role="button"]', root);
    var overlay;
    var tabs;

    overlay = (function(){
        var overlay = $('[data-role="overlay"]', root);
        var state = false;

        overlay.open = function(animate){
            if (state)
                return;

            state = true;

            if (animate) {
                overlay.css({
                    'width': '100%',
                    'height': '100%',
                    'opacity': '1'
                }).stop().animate({
                    'opacity': 1
                }, 500, function(){});
            } else {
                overlay.css({
                    'width': '100%',
                    'height': '100%',
                    'opacity': 1
                });
            }
        };

        overlay.close = function(animate){
            if (!state)
                return;

            state = false;

            if (animate) {
                overlay.css('opacity', 0).stop().animate({
                    'opacity': 0
                }, 500, function(){
                    overlay.css({
                        'width': '',
                        'height': '',
                        'opacity': ''
                    });
                });
            } else {
                overlay.css({
                    'opacity': '',
                    'width': '',
                    'height': ''
                });
            }
        };

        return overlay;
    })();

    tabs = (function(){
        var tabs = $('[data-role="tabs"]', root);
        var list = $('[data-tab]', tabs);
        var current = null;

        tabs.open = function(code, animate){
            var tab;
            var width = {};

            tab = list.filter('[data-tab="' + code + '"]');

            if (tab.length !== 1)
                return false;

            tabs.trigger('open', [tab]);

            width.current = tabs.width();
            current = code;

            list.css({
                'display': '',
                'width': ''
            }).attr('data-active', 'false');

            tab.css('display', 'block').attr('data-active', 'true');
            width.new = tab.width();

            if (animate) {
                tab.css('width', width.current).stop().animate({
                    'width': width.new
                }, 500, function(){
                    tab.css('width', '');
                });
            } else {
                tab.css('width', '');
            }

            return true;
        };

        tabs.close = function(animate){
            var tab;

            if (current === null)
                return;

            tab = list.filter('[data-tab="' + current + '"]');
            current = null;

            if (tab.length !== 1)
                return;

            tabs.trigger('close', [tab]);

            if (animate) {
                tab.stop().animate({
                    'width': 0
                }, 500, function(){
                    list.attr('data-active', 'false');
                    tab.css({
                        'width': '',
                        'display': ''
                    });
                });
            } else {
                list.attr('data-active', 'false');
                tab.css('display', '');
            }
        };

        tabs.switch = function(code, animate){
            if (code === current) {
                tabs.close(animate);
                overlay.close(animate);

                return false;
            } else {
                tabs.open(code, animate);
                overlay.open(animate);

                return true;
            }
        };

        tabs.getCurrent = function(){
            return current;
        };

        return tabs;
    })();

    switches.activate = function(item){
        item = switches.children('[data-role="switch"]').filter(item);

        if (item.length !== 1)
            return;

        item.attr('data-active', 'true');
        item.addClass('active');
    };

    switches.deactivate = function(){
        switches.children('[data-role="switch"]').attr('data-active', 'false');
        switches.children('[data-role="switch"]').removeClass('active');
    };

    tabs.on('close', function(){
        switches.deactivate();
    });

    switches.children('[data-role="switch"]').on('click', function(){
        var self = $(this);
        var tab = self.data('tab');

        switches.deactivate();

        if (tabs.switch(tab, true)) {
            switches.activate(self);
        }
    });

    overlay.on('click', function(){
        tabs.close(true);
        overlay.close(true);
    });

    buttons.on('click', function(){
        var button = $(this);
        var action = button.data('action');

        if (action === 'basket.clear') {
            universe.basket.clear({
                'basket': 'Y'
            });
        } else if (action === 'delayed.clear') {
            universe.basket.clear({
                'delay': 'Y'
            });
        } else if (action === 'close') {
            tabs.close(true);
            overlay.close(true);
        } else if (action === 'form') {
            if ($(document).width() < 721) {
                $("[data-modal='#callback']").trigger("click");
            }
            /*universe.forms.show({
             'id': 1,
             'template': 'template.1',
             'parameters': {
             'AJAX_OPTION_ADDITIONAL': 'i-1-intec-universe-sale-basket-small-template-2-gnX3eXOTCmq9-FORM-POPUP',
             'CONSENT_URL': '/company/consent/'
             },
             'settings': {
             'title': 'Заказать звонок'
             }
             });*/
        } else if (action === 'personal') {
            /*universe.components.show({
             'component': 'bitrix:system.auth.form',
             'template': 'template.1',
             'parameters': {
             'COMPONENT_TEMPLATE': 'template.1',
             'REGISTER_URL': '',
             'FORGOT_PASSWORD_URL': '',
             'PROFILE_URL': '',
             'SHOW_ERRORS': 'N'
             }
             });*/
        }
    });

    /*universe.forms.get({
     'id': 1,
     'template': 'template.1',
     'parameters': {
     'AJAX_OPTION_ADDITIONAL': 'i-1-intec-universe-sale-basket-small-template-2-gnX3eXOTCmq9-FORM',
     'CONSENT_URL': '/company/consent/'
     }
     }, function(response){
     tabs.find('[data-role="area"][data-area="form"]').html(response);
     });
     
     universe.components.get({
     'component': 'bitrix:system.auth.form',
     'template': 'template.1',
     'parameters': {
     'COMPONENT_TEMPLATE': 'template.1',
     'REGISTER_URL': '',
     'FORGOT_PASSWORD_URL': '',
     'PROFILE_URL': '',
     'SHOW_ERRORS': 'N'
     }
     }, function(response){
     tabs.find('[data-role="area"][data-area="personal"]').html(response);
     });*/

    $(function(){
        var data;
        var update;

        data = {
            'component': 'intec.universe:sale.basket.small',
            'template': 'template.2',
            'parameters': {
                'FORM_ID': 1,
                'SETTINGS_USE': 'Y',
                'BASKET_SHOW': 'Y',
                'DELAY_SHOW': 'Y',
                'AUTO': 'N',
                'ANIMATE': 'N',
                'TAB': null,
                'CATALOG_URL': '/catalog/',
                'BASKET_URL': '/personal/basket/',
                'ORDER_URL': '/personal/basket/?page=order',
                'COMPARE_URL': '/catalog/compare.php',
                'PERSONAL_URL': '/personal/profile/',
                'REGISTER_URL': null,
                'CONSENT_URL': '/company/consent/',
                'PROFILE_URL': null,
                'FORGOT_PASSWORD_URL': null,
                'COMPARE_SHOW': 'Y',
                'COMPARE_CODE': 'compare',
                'COMPARE_IBLOCK_TYPE': 'catalogs',
                'COMPARE_IBLOCK_ID': 16,
                'FORM_TITLE': 'Заказать звонок',
                'FORM_SHOW': 'Y',
                'PERSONAL_SHOW': 'Y',
                'SBERBANK_ICON_SHOW': 'Y',
                'QIWI_ICON_SHOW': 'Y',
                'YANDEX_MONEY_ICON_SHOW': 'Y',
                'VISA_ICON_SHOW': 'Y',
                'MASTERCARD_ICON_SHOW': 'Y',
                'DELAYED_SHOW': 'Y',
                'CACHE_TYPE': 'A',
                '~SETTINGS_USE': 'Y',
                '~COMPARE_SHOW': 'Y',
                '~COMPARE_CODE': 'compare',
                '~COMPARE_IBLOCK_TYPE': 'catalogs',
                '~COMPARE_IBLOCK_ID': 16,
                '~AUTO': 'Y',
                '~FORM_ID': 1,
                '~FORM_TITLE': 'Заказать звонок',
                '~BASKET_SHOW': 'Y',
                '~FORM_SHOW': 'Y',
                '~PERSONAL_SHOW': 'Y',
                '~SBERBANK_ICON_SHOW': 'Y',
                '~QIWI_ICON_SHOW': 'Y',
                '~YANDEX_MONEY_ICON_SHOW': 'Y',
                '~VISA_ICON_SHOW': 'Y',
                '~MASTERCARD_ICON_SHOW': 'Y',
                '~DELAYED_SHOW': 'Y',
                '~CATALOG_URL': '/catalog/',
                '~BASKET_URL': '/personal/basket/',
                '~ORDER_URL': '/personal/basket/?page=order',
                '~COMPARE_URL': '/catalog/compare.php',
                '~PERSONAL_URL': '/personal/profile/',
                '~CONSENT_URL': '/company/consent/',
                '~CACHE_TYPE': 'A',
                'AJAX_MODE': 'N'
            }
        };

        update = function(tab, animate){
            if (update.disabled)
                return;

            update.disabled = true;

            if (tab === true || !api.isDeclared(tab)) {
                tab = tabs.getCurrent();
            } else if (tab === false) {
                tab = null;
            }

            data.parameters['TAB'] = tab;
            data.parameters['ANIMATE'] = animate ? 'Y' : 'N';

            universe.components.get(data, function(result){
                root.replaceWith(result);
            });
        };

        update.disabled = false;
        universe.basket.once('update', function(){
            update();
        });
        universe.compare.once('update', function(){
            update();
        });

        products.each(function(){
            var product = $(this);
            var id = product.data('id');
            var counter = $('[data-role="counter"]', product);
            var buttons = $('[data-role="button"]', product);

            counter.control('numeric', {}, function(configuration, instance){
                var timeout;

                if (instance !== null) {
                    instance.on('change', function(event, value){
                        clearTimeout(timeout);
                        timeout = setTimeout(function(){
                            universe.basket.setQuantity({
                                'id': id,
                                'quantity': value
                            });
                        }, 500);
                    });
                }
            });

            buttons.on('click', function(){
                var button = $(this);
                var action = button.data('action');
                var data = {
                    'id': id
                };

                if (action === 'product.add') {
                    data.delay = 'N';
                    universe.basket.add(data);
                } else if (action === 'product.delay') {
                    data.delay = 'Y';
                    universe.basket.add(data);
                } else if (action === 'product.remove') {
                    universe.basket.remove(data);
                }
            });
        });

    });
    // right panel end

});



(function($, api){
    var root = $('#i-0-intec-startshop-forms-result-new-template-1-l9Hc2Cj4VP28');

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
})(jQuery, intec);

$(function(){
    $('.system-auth-form-tabs-panel-item').click(function(){
        $('.system-auth-form-tabs-panel-item').removeClass('active');
        $(this).addClass('active');
    });
});