$(document).on('ready', function() {
    // mobile menu start
    var root = $('#i-11-bitrix-menu-mobile');
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
    console.log(menu);
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
});

$(document).on('ready', function() {
    // menu start
    var root = $('#i-7-bitrix-menu-horizontal');
    var selectors = {
        'menu': '[data-role=menu]',
        'item': '[data-role=item]',
        'items': '[data-role=items]',
        'more': '[data-role=more]'
    };
    var classes = {
        'adapted': 'menu-adapted',
        'initialized': 'menu-initialized',
        'visible': 'menu-submenu-visible',
        'right': 'menu-submenu-right'
    };
    var menu;
    var adapt;

    if (root.is(selectors.menu)) {
        menu = root;
    } else {
        menu = root.find(selectors.menu).eq(0);
    }

    /**
     * Возвращает элемент, содержащий все пункты указанного меню.
     * Значение параметра submenu:
     * - селектор или jQuery - возвращать элемент указанного меню.
     * - false - возвращать элементы всех меню.
     */
    menu.getItemsWrappers = function(submenu){
        if (!submenu) {
            return menu
                    .find(selectors.items);
        }

        if (menu.get(0) === submenu.get(0)) {
            submenu = menu;
        } else {
            submenu = menu
                    .find(submenu);
        }

        return submenu
                .find(selectors.items)
                .eq(0);
    };

    /**
     * Возвращает элементы меню.
     * Значение параметра submenu:
     * - селектор или jQuery - возвращать элементы определенного меню.
     * - false - возвращать все элементы.
     */
    menu.getItems = function(submenu){
        if (!submenu) {
            return menu
                    .find(selectors.item);
        }

        return menu
                .getItemsWrappers(submenu)
                .children(selectors.item);
    };

    /**
     * Возвращает меню.
     * Значение параметра item:
     * - селектор или объект jQuery - возвращает меню элемента.
     * - false - возвращать все меню.
     */
    menu.getMenu = function(item){
        if (item)
            return menu
                    .find(item)
                    .find(selectors.menu)
                    .eq(0);

        return menu
                .find(selectors.menu);
    };

    /** Управление содержимым "Еще" */
    menu.more = {};
    /** Возвращает элемент меню "Еще" */
    menu.more.getItem = function(){
        return menu
                .find(selectors.more);
    };
    /** Возвращает меню элемента "Еще" */
    menu.more.getMenu = function(){
        return menu.getMenu(menu.more.getItem());
    };
    /** Добавляет элементы (jQuery коллекция) в меню "Еще" */
    menu.more.add = function(add){
        var items;

        add = $(add);
        items = menu.getItems(menu.more.getMenu());
        add.each(function(){
            var self = $(this);
            var item = items.eq(self.index());

            self.hide();
            item.show();
        });
    };
    /** Удаляет элементы (jQuery коллекция) из меню "Еще" */
    menu.more.remove = function(remove){
        var items;

        remove = $(remove);
        items = menu.getItems(menu.more.getMenu());
        remove.each(function(){
            var self = $(this);
            var item = items.eq(self.index());

            self.show();
            item.hide();
        });
    };

    /** Правила адаптивности */
    adapt = {};
    /** Адаптация положения подменю */
    adapt.menu = function(){
        var submenu = menu.getMenu().filter('[data-visible=true]');
        var wrapper = menu.getItemsWrappers(menu);
        var width = wrapper.width();
        var right = false;

        submenu.each(function(){
            var self = $(this);
            var offset = {};

            self.removeClass(classes.right);

            offset.start = function(){
                return self.offset().left - wrapper.offset().left
            };
            offset.end = function(){
                return offset.start() + self.width();
            };

            if (offset.end() > width)
                right = true;

            if (right) {
                self.addClass(classes.right);

                if (offset.start() < 0) {
                    self.removeClass(classes.right);
                    right = false;
                }
            }
        });
    };
    /** Адаптация элементов корневого меню */
    adapt.items = function(){
        var items = {};
        var width = {};
        var wrapper = menu.getItemsWrappers(menu);

        menu.removeClass(classes.adapted);
        items.all = menu.getItems(menu);
        items.visible = $([]);
        items.hidden = $([]);

        items.all.hide();
        width.available = wrapper.width() - menu.more.getItem().show().width();
        items.all.show();
        width.total = 0;

        menu.more.remove(items.all);
        items.all.each(function(){
            var item = $(this);

            item.css({
                'width': 'auto'
            });
            width.total += item.width();

            if (width.total < width.available) {
                items.visible = items.visible.add(item);
            } else {
                items.hidden = items.hidden.add(item);
            }
        });

        if (items.hidden.size() > 0) {
            menu.more.add(items.hidden);
        } else {
            menu.more.getItem().hide();
            width.available = wrapper.width();
        }

        menu.addClass(classes.adapted);

        var last = null;

        width.total = {
            'original': 0,
            'rounded': 0
        };

        items.visible.each(function(){
            width.total.original += $(this).width();
        }).each(function(){
            var item = $(this);
            var size = Math.floor((width.available / 100) * (item.width() / width.total.original) * 100);

            width.total.rounded += size;
            item.css('width', size + 'px');
            last = item;
        });

        if (last != null)
            last.css('width', last.width() + (width.available - width.total.rounded) + 'px');
    };

    /** События наведения мыши на пунктах меню */
    menu.getItems().add(menu.more.getItem()).on('mouseenter', function(event){
        var item = $(this);
        var submenu;

        submenu = menu.getMenu(item);
        submenu.show().addClass(classes.visible).stop().animate({
            'opacity': 1
        }, 300);
        submenu.attr('data-visible', 'true');
        adapt.menu();

        event.preventDefault();
    }).on('mouseleave', function(event){
        var item = $(this);
        var submenu;

        submenu = menu.getMenu(item);
        submenu.stop().removeClass(classes.visible).animate({
            'opacity': 0
        }, 50, function(){
            adapt.menu();
            submenu.removeAttr('data-visible');
            submenu.hide();
        });

        event.preventDefault();
    });

    root.on('update', function(){
        adapt.menu();
        adapt.items();
    });

    $(window).on('resize', function(){
        root.trigger('update');
    });

    menu.addClass(classes.initialized);
    root.trigger('update');
    // menu end
});

$(document).on('ready', function() {
    // menu fixed start
    var root = $('#i-8-bitrix-menu-horizontal');
    var selectors = {
        'menu': '[data-role=menu]',
        'item': '[data-role=item]',
        'items': '[data-role=items]',
        'more': '[data-role=more]'
    };
    var classes = {
        'adapted': 'menu-adapted',
        'initialized': 'menu-initialized',
        'visible': 'menu-submenu-visible',
        'right': 'menu-submenu-right'
    };
    var menu;
    var adapt;

    if (root.is(selectors.menu)) {
        menu = root;
    } else {
        menu = root.find(selectors.menu).eq(0);
    }

    /**
     * Возвращает элемент, содержащий все пункты указанного меню.
     * Значение параметра submenu:
     * - селектор или jQuery - возвращать элемент указанного меню.
     * - false - возвращать элементы всех меню.
     */
    menu.getItemsWrappers = function(submenu){
        if (!submenu) {
            return menu
                    .find(selectors.items);
        }

        if (menu.get(0) === submenu.get(0)) {
            submenu = menu;
        } else {
            submenu = menu
                    .find(submenu);
        }

        return submenu
                .find(selectors.items)
                .eq(0);
    };

    /**
     * Возвращает элементы меню.
     * Значение параметра submenu:
     * - селектор или jQuery - возвращать элементы определенного меню.
     * - false - возвращать все элементы.
     */
    menu.getItems = function(submenu){
        if (!submenu) {
            return menu
                    .find(selectors.item);
        }

        return menu
                .getItemsWrappers(submenu)
                .children(selectors.item);
    };

    /**
     * Возвращает меню.
     * Значение параметра item:
     * - селектор или объект jQuery - возвращает меню элемента.
     * - false - возвращать все меню.
     */
    menu.getMenu = function(item){
        if (item)
            return menu
                    .find(item)
                    .find(selectors.menu)
                    .eq(0);

        return menu
                .find(selectors.menu);
    };

    /** Управление содержимым "Еще" */
    menu.more = {};
    /** Возвращает элемент меню "Еще" */
    menu.more.getItem = function(){
        return menu
                .find(selectors.more);
    };
    /** Возвращает меню элемента "Еще" */
    menu.more.getMenu = function(){
        return menu.getMenu(menu.more.getItem());
    };
    /** Добавляет элементы (jQuery коллекция) в меню "Еще" */
    menu.more.add = function(add){
        var items;

        add = $(add);
        items = menu.getItems(menu.more.getMenu());
        add.each(function(){
            var self = $(this);
            var item = items.eq(self.index());

            self.hide();
            item.show();
        });
    };
    /** Удаляет элементы (jQuery коллекция) из меню "Еще" */
    menu.more.remove = function(remove){
        var items;

        remove = $(remove);
        items = menu.getItems(menu.more.getMenu());
        remove.each(function(){
            var self = $(this);
            var item = items.eq(self.index());

            self.show();
            item.hide();
        });
    };

    /** Правила адаптивности */
    adapt = {};
    /** Адаптация положения подменю */
    adapt.menu = function(){
        var submenu = menu.getMenu().filter('[data-visible=true]');
        var wrapper = menu.getItemsWrappers(menu);
        var width = wrapper.width();
        var right = false;

        submenu.each(function(){
            var self = $(this);
            var offset = {};

            self.removeClass(classes.right);

            offset.start = function(){
                return self.offset().left - wrapper.offset().left
            };
            offset.end = function(){
                return offset.start() + self.width();
            };

            if (offset.end() > width)
                right = true;

            if (right) {
                self.addClass(classes.right);

                if (offset.start() < 0) {
                    self.removeClass(classes.right);
                    right = false;
                }
            }
        });
    };
    /** Адаптация элементов корневого меню */
    adapt.items = function(){
        var items = {};
        var width = {};
        var wrapper = menu.getItemsWrappers(menu);

        menu.removeClass(classes.adapted);
        items.all = menu.getItems(menu);
        items.visible = $([]);
        items.hidden = $([]);

        items.all.hide();
        width.available = wrapper.width() - menu.more.getItem().show().width();
        items.all.show();
        width.total = 0;

        menu.more.remove(items.all);
        items.all.each(function(){
            var item = $(this);

            item.css({
                'width': 'auto'
            });
            width.total += item.width();

            if (width.total < width.available) {
                items.visible = items.visible.add(item);
            } else {
                items.hidden = items.hidden.add(item);
            }
        });

        if (items.hidden.size() > 0) {
            menu.more.add(items.hidden);
        } else {
            menu.more.getItem().hide();
            width.available = wrapper.width();
        }

        menu.addClass(classes.adapted);

        var last = null;

        width.total = {
            'original': 0,
            'rounded': 0
        };

        items.visible.each(function(){
            width.total.original += $(this).width();
        }).each(function(){
            var item = $(this);
            var size = Math.floor((width.available / 100) * (item.width() / width.total.original) * 100);

            width.total.rounded += size;
            item.css('width', size + 'px');
            last = item;
        });

        if (last != null)
            last.css('width', last.width() + (width.available - width.total.rounded) + 'px');
    };

    /** События наведения мыши на пунктах меню */
    menu.getItems().add(menu.more.getItem()).on('mouseenter', function(event){
        var item = $(this);
        var submenu;

        submenu = menu.getMenu(item);
        submenu.show().addClass(classes.visible).stop().animate({
            'opacity': 1
        }, 300);
        submenu.attr('data-visible', 'true');
        adapt.menu();

        event.preventDefault();
    }).on('mouseleave', function(event){
        var item = $(this);
        var submenu;

        submenu = menu.getMenu(item);
        submenu.stop().removeClass(classes.visible).animate({
            'opacity': 0
        }, 50, function(){
            adapt.menu();
            submenu.removeAttr('data-visible');
            submenu.hide();
        });

        event.preventDefault();
    });

    root.on('update', function(){
        adapt.menu();
        adapt.items();
    });

    $(window).on('resize', function(){
        root.trigger('update');
    });

    menu.addClass(classes.initialized);
    root.trigger('update');
    // menu fixed end
});