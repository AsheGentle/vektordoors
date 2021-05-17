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
        var arParams = {'SESSION_PARAMS': 'd55da55a5249dee1e57b6c0f624540fa', 'PAGE_PARAMS': {'ELEMENT_ID': 1223}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '16d10f3ee38b613768627557c9b565bc', 'PAGE_PARAMS': {'ELEMENT_ID': 1222}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '644ea9f08b9973c5103f5e505362b4f2', 'PAGE_PARAMS': {'ELEMENT_ID': 1221}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '649f94b25a8bf5bfa7dc151aa5667899', 'PAGE_PARAMS': {'ELEMENT_ID': 1220}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': 'a2401b1b4e14642ea7f4fa0bddb8a626', 'PAGE_PARAMS': {'ELEMENT_ID': 1219}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '1b88eef8311f734edfc1d8d9b59c147b', 'PAGE_PARAMS': {'ELEMENT_ID': 1001}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '36166ff2057ed244bd670c99e52cb150', 'PAGE_PARAMS': {'ELEMENT_ID': 1000}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': 'c1dbe4879a16c45f5d0660b1e5fc6d0f', 'PAGE_PARAMS': {'ELEMENT_ID': 999}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': 'a4866b1d6611248e0ad5366df89ea103', 'PAGE_PARAMS': {'ELEMENT_ID': 808}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

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
        var arParams = {'SESSION_PARAMS': '909019f65dcfc969ae2e13681ee03eab', 'PAGE_PARAMS': {'ELEMENT_ID': 807}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-23-bitrix-iblock-vote-template-1-DPn1tVttGIxW');
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
        var arParams = {'SESSION_PARAMS': 'd8dbb7ee144c4ebaf7afcccb71f52d33', 'PAGE_PARAMS': {'ELEMENT_ID': 806}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-24-bitrix-iblock-vote-template-1-P0iQM1uLpzbA');
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
        var arParams = {'SESSION_PARAMS': '0fd63ac136d80515cc1ecc37d0c1963a', 'PAGE_PARAMS': {'ELEMENT_ID': 805}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-25-bitrix-iblock-vote-template-1-ElfdKBhjM0Uf');
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
        var arParams = {'SESSION_PARAMS': '93a9b8d97f3035fee269a250a8680257', 'PAGE_PARAMS': {'ELEMENT_ID': 804}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-26-bitrix-iblock-vote-template-1-VCNcVevEAvFf');
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
        var arParams = {'SESSION_PARAMS': 'e74df9c1f0db5635dd790b6864f8489c', 'PAGE_PARAMS': {'ELEMENT_ID': 779}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-27-bitrix-iblock-vote-template-1-4NIrVsSXxSBN');
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
        var arParams = {'SESSION_PARAMS': 'dcdbbfabf02a235261e924e86bd26655', 'PAGE_PARAMS': {'ELEMENT_ID': 778}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-28-bitrix-iblock-vote-template-1-4l4lnWMBf1U2');
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
        var arParams = {'SESSION_PARAMS': '74a9aabf08d497738dbe4ed0164513a2', 'PAGE_PARAMS': {'ELEMENT_ID': 777}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-29-bitrix-iblock-vote-template-1-1Z70s7QANHn4');
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
        var arParams = {'SESSION_PARAMS': '0b95acf2dc66bdc80aa11e65580c40d8', 'PAGE_PARAMS': {'ELEMENT_ID': 776}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-30-bitrix-iblock-vote-template-1-dz9BX0zNSBMh');
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
        var arParams = {'SESSION_PARAMS': 'bf8b9d4425e941dd60dc88928e97d475', 'PAGE_PARAMS': {'ELEMENT_ID': 775}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-31-bitrix-iblock-vote-template-1-7vAXOPs3S9AE');
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
        var arParams = {'SESSION_PARAMS': '11877308e3ca4858c074e859453068dc', 'PAGE_PARAMS': {'ELEMENT_ID': 774}, 'sessid': '77cf89e7cdfe29868d8bca3023c2ce28', 'AJAX_CALL': 'Y'};

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

    root.update(0);

})(jQuery, intec);

(function($, api){
    var root = $('#i-12-bitrix-catalog-section-catalog-tile-2-OQ3k9PHlVICg');

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
                var parameters = {'items': 1, 'nav': true, 'dots': false}
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

        BX.message({'BTN_MESSAGE_LAZY_LOAD': '', 'BTN_MESSAGE_LAZY_LOAD_WAITER': ''});

        component = new JCCatalogSectionComponent({'siteId': 's1', 'componentPath': '/bitrix/components/bitrix/catalog.section', 'navParams': {'NavPageCount': 1, 'NavPageNomer': 1, 'NavNum': 2}, 'deferredLoad': false, 'initiallyShowHeader': false, 'bigData': null, 'lazyLoad': false, 'loadOnScroll': false, 'template': 'catalog.tile.2.f50c2eb1184979172deca28776b6028850f25922ee6795873a28b7ecfc4ea24c', 'parameters': 'YToyMDI6e3M6MTM6IkJST1dTRVJfVElUTEUiO3M6MDoiIjtzOjExOiJMSVNUX0FDVElPTiI7czozOiJidXkiO3M6MTI6IkxJU1RfQk9SREVSUyI7czoxOiJZIjtzOjE3OiJMSVNUX0NPVU5URVJfU0hPVyI7czoxOiJZIjtzOjE1OiJMSVNUX09GRkVSU19VU0UiO3M6MToiWSI7czoyMDoiTElTVF9QUk9QRVJUSUVTX1NIT1ciO3M6MToiWSI7czoxODoiTElTVF9RVUFOVElUWV9TSE9XIjtzOjE6IlkiO3M6MTM6IkxJU1RfVEVNUExBVEUiO3M6NjoibGlzdC4xIjtzOjE0OiJMSVNUX1ZPVEVfU0hPVyI7czoxOiJZIjtzOjE2OiJNRVRBX0RFU0NSSVBUSU9OIjtzOjA6IiI7czoxMzoiTUVUQV9LRVlXT1JEUyI7czowOiIiO3M6MTc6Ik9GRkVSU19GSUVMRF9DT0RFIjtzOjA6IiI7czoxMjoiT0ZGRVJTX0xJTUlUIjtOO3M6MjA6Ik9GRkVSU19QUk9QRVJUWV9DT0RFIjthOjI6e2k6MDtzOjExOiJPRkZFUlNfU0laRSI7aToxO3M6MTE6Ik9GRkVSU19TSVpFIjt9czoxMzoiUFJPUEVSVFlfQ09ERSI7YTozMjp7aTowO3M6NjoiV0VJR1RIIjtpOjE7czo3OiJESVNQTEFZIjtpOjI7czo2OiJMRU5HVEgiO2k6MztzOjE3OiJTWVNURU1fQURESVRJT05BTCI7aTo0O3M6MTg6IlFVQU5USVRZX09GX1NUUklQUyI7aTo1O3M6NToiUE9XRVIiO2k6NjtzOjg6IlNFVFRJTkdTIjtpOjc7czo1OiJTQ09QRSI7aTo4O3M6MTA6IlBST0NSRUFUT1IiO2k6OTtzOjY6IlNFQVNPTiI7aToxMDtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7aToxMTtzOjExOiJDT01QT1NJVElPTiI7aToxMjtzOjEzOiJQUk9QRVJUWV9URVNUIjtpOjEzO3M6NDoiVFlQRSI7aToxNDtzOjc6IlBBVFRFUk4iO2k6MTU7czoxODoiRU5FUkdZX0NPTlNVTVBUSU9OIjtpOjE2O3M6NjoiV0VJR1RIIjtpOjE3O3M6NzoiRElTUExBWSI7aToxODtzOjY6IkxFTkdUSCI7aToxOTtzOjE3OiJTWVNURU1fQURESVRJT05BTCI7aToyMDtzOjE4OiJRVUFOVElUWV9PRl9TVFJJUFMiO2k6MjE7czo1OiJQT1dFUiI7aToyMjtzOjg6IlNFVFRJTkdTIjtpOjIzO3M6NToiU0NPUEUiO2k6MjQ7czoxMDoiUFJPQ1JFQVRPUiI7aToyNTtzOjY6IlNFQVNPTiI7aToyNjtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7aToyNztzOjExOiJDT01QT1NJVElPTiI7aToyODtzOjEzOiJQUk9QRVJUWV9URVNUIjtpOjI5O3M6NDoiVFlQRSI7aTozMDtzOjc6IlBBVFRFUk4iO2k6MzE7czoxODoiRU5FUkdZX0NPTlNVTVBUSU9OIjt9czo5OiJST09UX1NIT1ciO3M6MToiTiI7czoxMDoiU09SVF9QUklDRSI7czoxOiIxIjtzOjExOiJURVhUX0FDVElPTiI7czozOiJidXkiO3M6MTI6IlRFWFRfQk9SREVSUyI7czoxOiJZIjtzOjE3OiJURVhUX0NPVU5URVJfU0hPVyI7czoxOiJZIjtzOjE4OiJURVhUX1FVQU5USVRZX1NIT1ciO3M6MToiWSI7czoxMzoiVEVYVF9URU1QTEFURSI7czo2OiJ0ZXh0LjEiO3M6MTQ6IlRFWFRfVk9URV9TSE9XIjtzOjE6IlkiO3M6NjoiQUNUSU9OIjtzOjM6ImJ1eSI7czo3OiJCT1JERVJTIjtzOjE6IlkiO3M6MTM6IkJPUkRFUlNfU1RZTEUiO3M6Nzoic3F1YXJlZCI7czo3OiJDT0xVTU5TIjtpOjM7czoxMjoiQ09VTlRFUl9TSE9XIjtzOjE6IlkiO3M6MTc6IkRFU0NSSVBUSU9OX0FMSUdOIjtzOjQ6ImxlZnQiO3M6MTY6IkRFU0NSSVBUSU9OX1NIT1ciO3M6MToiWSI7czoyMjoiSU1BR0VfU0xJREVSX0FOSU1BVElPTiI7czo4OiJzdGFuZGFyZCI7czoxNjoiSU1BR0VfU0xJREVSX05BViI7czoxOiJZIjtzOjE3OiJJTUFHRV9TTElERVJfU0hPVyI7czoxOiJZIjtzOjE3OiJNQVJLU19PUklFTlRBVElPTiI7czoxMDoiaG9yaXpvbnRhbCI7czoxMDoiTUFSS1NfU0hPVyI7czoxOiJZIjtzOjEwOiJOQU1FX0FMSUdOIjtzOjQ6ImxlZnQiO3M6MTM6Ik5BTUVfUE9TSVRJT04iO3M6NjoibWlkZGxlIjtzOjEyOiJPRkZFUlNfQUxJR04iO3M6NToic3RhcnQiO3M6MTA6Ik9GRkVSU19VU0UiO3M6MToiWSI7czoxMToiT0ZGRVJTX1ZJRVciO3M6NzoiZGVmYXVsdCI7czoxMToiUFJJQ0VfQUxJR04iO3M6NDoibGVmdCI7czoxNDoiUVVBTlRJVFlfQUxJR04iO3M6NDoibGVmdCI7czoxMzoiUVVBTlRJVFlfU0hPVyI7czoxOiJZIjtzOjEwOiJWT1RFX0FMSUdOIjtzOjQ6ImxlZnQiO3M6OToiVk9URV9TSE9XIjtzOjE6IlkiO3M6MTI6IldFSUdIVF9BTElHTiI7czo0OiJsZWZ0IjtzOjExOiJXRUlHSFRfU0hPVyI7czoxOiJZIjtzOjQ6IlZJRVciO3M6NDoidGlsZSI7czoxNzoiUVVJQ0tfVklFV19BQ1RJT04iO3M6MzoiYnV5IjtzOjIzOiJRVUlDS19WSUVXX0NPVU5URVJfU0hPVyI7czoxOiJZIjtzOjI3OiJRVUlDS19WSUVXX0RFU0NSSVBUSU9OX01PREUiO3M6NzoicHJldmlldyI7czoyNzoiUVVJQ0tfVklFV19ERVNDUklQVElPTl9TSE9XIjtzOjE6IlkiO3M6MjQ6IlFVSUNLX1ZJRVdfR0FMTEVSWV9QQU5FTCI7czoxOiJZIjtzOjI2OiJRVUlDS19WSUVXX0dBTExFUllfUFJFVklFVyI7czoxOiJZIjtzOjMwOiJRVUlDS19WSUVXX0lORk9STUFUSU9OX1BBWU1FTlQiO3M6MToiWSI7czozMToiUVVJQ0tfVklFV19JTkZPUk1BVElPTl9TSElQTUVOVCI7czoxOiJZIjtzOjIxOiJRVUlDS19WSUVXX01BUktTX1NIT1ciO3M6MToiWSI7czoyMjoiUVVJQ0tfVklFV19QQVlNRU5UX1VSTCI7czoxOToiL2hlbHAvYnV5cy9wYXltZW50LyI7czoyNDoiUVVJQ0tfVklFV19QUk9QRVJUWV9DT0RFIjthOjE3OntpOjA7czoyMzoiU1lTVEVNX1JFTEFURURfU0VSVklDRVMiO2k6MTtzOjQ6IlRZUEUiO2k6MjtzOjE4OiJRVUFOVElUWV9PRl9TVFJJUFMiO2k6MztzOjU6IlBPV0VSIjtpOjQ7czoxMDoiUFJPQ1JFQVRPUiI7aTo1O3M6NToiU0NPUEUiO2k6NjtzOjc6IkRJU1BMQVkiO2k6NztzOjY6IldFSUdUSCI7aTo4O3M6MTg6IkVORVJHWV9DT05TVU1QVElPTiI7aTo5O3M6ODoiU0VUVElOR1MiO2k6MTA7czoxMToiQ09NUE9TSVRJT04iO2k6MTE7czo2OiJMRU5HVEgiO2k6MTI7czo2OiJTRUFTT04iO2k6MTM7czo3OiJQQVRURVJOIjtpOjE0O3M6MTc6IlNZU1RFTV9BRERJVElPTkFMIjtpOjE1O3M6MTM6IlBST1BFUlRZX1RFU1QiO2k6MTY7czowOiIiO31zOjMxOiJRVUlDS19WSUVXX1BST1BFUlRZX0RFU0NSSVBUSU9OIjtzOjA6IiI7czoyNDoiUVVJQ0tfVklFV19QUk9QRVJUWV9URVhUIjtzOjA6IiI7czoyNDoiUVVJQ0tfVklFV19RVUFOVElUWV9TSE9XIjtzOjE6IlkiO3M6MjM6IlFVSUNLX1ZJRVdfU0hJUE1FTlRfVVJMIjtzOjIwOiIvaGVscC9idXlzL2RlbGl2ZXJ5LyI7czoxOToiUVVJQ0tfVklFV19URU1QTEFURSI7aToyO3M6MTQ6IlFVSUNLX1ZJRVdfVVNFIjtzOjE6IlkiO3M6MjI6IlFVSUNLX1ZJRVdfV0VJR0hUX1NIT1ciO3M6MToiWSI7czo3OiJGT1JNX0lEIjtzOjE6IjMiO3M6MTg6IlFVSUNLX1ZJRVdfRk9STV9JRCI7czoxOiIzIjtzOjEzOiJGT1JNX1RFTVBMQVRFIjtzOjEwOiJ0ZW1wbGF0ZS4xIjtzOjI0OiJRVUlDS19WSUVXX0ZPUk1fVEVNUExBVEUiO3M6MTA6InRlbXBsYXRlLjEiO3M6MjE6IkZPUk1fUFJPUEVSVFlfUFJPRFVDVCI7czoxOiI3IjtzOjMyOiJRVUlDS19WSUVXX0ZPUk1fUFJPUEVSVFlfUFJPRFVDVCI7czoxOiI3IjtzOjI0OiJQUk9QRVJUWV9NQVJLU19SRUNPTU1FTkQiO3M6MTY6IlNZU1RFTV9SRUNPTU1FTkQiO3M6MzU6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfTUFSS1NfUkVDT01NRU5EIjtzOjE2OiJTWVNURU1fUkVDT01NRU5EIjtzOjE4OiJQUk9QRVJUWV9NQVJLU19ORVciO3M6MTA6IlNZU1RFTV9ORVciO3M6Mjk6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfTUFSS1NfTkVXIjtzOjEwOiJTWVNURU1fTkVXIjtzOjE4OiJQUk9QRVJUWV9NQVJLU19ISVQiO3M6MTA6IlNZU1RFTV9ISVQiO3M6Mjk6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfTUFSS1NfSElUIjtzOjEwOiJTWVNURU1fSElUIjtzOjExOiJDT05TRU5UX1VSTCI7czoxNzoiL2NvbXBhbnkvY29uc2VudC8iO3M6MjI6IlFVSUNLX1ZJRVdfQ09OU0VOVF9VUkwiO3M6MTc6Ii9jb21wYW55L2NvbnNlbnQvIjtzOjk6IkxBWllfTE9BRCI7czoxOiJZIjtzOjIwOiJRVUlDS19WSUVXX0xBWllfTE9BRCI7czoxOiJZIjtzOjk6IlZPVEVfTU9ERSI7czo2OiJyYXRpbmciO3M6MjA6IlFVSUNLX1ZJRVdfVk9URV9NT0RFIjtzOjY6InJhdGluZyI7czo5OiJERUxBWV9VU0UiO3M6MToiWSI7czoyMDoiUVVJQ0tfVklFV19ERUxBWV9VU0UiO3M6MToiWSI7czoxMzoiUVVBTlRJVFlfTU9ERSI7czo2OiJudW1iZXIiO3M6MjQ6IlFVSUNLX1ZJRVdfUVVBTlRJVFlfTU9ERSI7czo2OiJudW1iZXIiO3M6MTk6IlFVQU5USVRZX0JPVU5EU19GRVciO047czozMDoiUVVJQ0tfVklFV19RVUFOVElUWV9CT1VORFNfRkVXIjtOO3M6MjA6IlFVQU5USVRZX0JPVU5EU19NQU5ZIjtOO3M6MzE6IlFVSUNLX1ZJRVdfUVVBTlRJVFlfQk9VTkRTX01BTlkiO047czoxNzoiVklERU9fSUJMT0NLX1RZUEUiO3M6NzoiY29udGVudCI7czoyODoiUVVJQ0tfVklFV19WSURFT19JQkxPQ0tfVFlQRSI7czo3OiJjb250ZW50IjtzOjE1OiJWSURFT19JQkxPQ0tfSUQiO3M6MjoiMzAiO3M6MjY6IlFVSUNLX1ZJRVdfVklERU9fSUJMT0NLX0lEIjtzOjI6IjMwIjtzOjE4OiJWSURFT19QUk9QRVJUWV9VUkwiO3M6NDoiTElOSyI7czoyOToiUVVJQ0tfVklFV19WSURFT19QUk9QRVJUWV9VUkwiO3M6NDoiTElOSyI7czoyMDoiU0VSVklDRVNfSUJMT0NLX1RZUEUiO3M6ODoiY2F0YWxvZ3MiO3M6MzE6IlFVSUNLX1ZJRVdfU0VSVklDRVNfSUJMT0NLX1RZUEUiO3M6ODoiY2F0YWxvZ3MiO3M6MTg6IlNFUlZJQ0VTX0lCTE9DS19JRCI7czoyOiIyMiI7czoyOToiUVVJQ0tfVklFV19TRVJWSUNFU19JQkxPQ0tfSUQiO3M6MjoiMjIiO3M6MjM6IlNFUlZJQ0VTX1BST1BFUlRZX1BSSUNFIjtzOjEyOiJTWVNURU1fUFJJQ0UiO3M6MzQ6IlFVSUNLX1ZJRVdfU0VSVklDRVNfUFJPUEVSVFlfUFJJQ0UiO3M6MTI6IlNZU1RFTV9QUklDRSI7czoxOToiUkVWSUVXU19JQkxPQ0tfVFlQRSI7czo3OiJyZXZpZXdzIjtzOjMwOiJRVUlDS19WSUVXX1JFVklFV1NfSUJMT0NLX1RZUEUiO3M6NzoicmV2aWV3cyI7czoxNzoiUkVWSUVXU19JQkxPQ0tfSUQiO3M6MjoiMTgiO3M6Mjg6IlFVSUNLX1ZJRVdfUkVWSUVXU19JQkxPQ0tfSUQiO3M6MjoiMTgiO3M6Mjc6IlJFVklFV1NfUFJPUEVSVFlfRUxFTUVOVF9JRCI7czoxMToicHJvZHVjdHNfaWQiO3M6Mzg6IlFVSUNLX1ZJRVdfUkVWSUVXU19QUk9QRVJUWV9FTEVNRU5UX0lEIjtzOjExOiJwcm9kdWN0c19pZCI7czoxOToiUkVWSUVXU19VU0VfQ0FQVENIQSI7czoxOiJOIjtzOjMwOiJRVUlDS19WSUVXX1JFVklFV1NfVVNFX0NBUFRDSEEiO3M6MToiTiI7czoxNjoiUFJPUEVSVFlfQVJUSUNMRSI7czoxNDoiU1lTVEVNX0FSVElDTEUiO3M6Mjc6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfQVJUSUNMRSI7czoxNDoiU1lTVEVNX0FSVElDTEUiO3M6MTQ6IlBST1BFUlRZX0JSQU5EIjtzOjEyOiJTWVNURU1fQlJBTkQiO3M6MjU6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfQlJBTkQiO3M6MTI6IlNZU1RFTV9CUkFORCI7czoxNzoiUFJPUEVSVFlfUElDVFVSRVMiO3M6MTM6IlNZU1RFTV9JTUFHRVMiO3M6Mjg6IlFVSUNLX1ZJRVdfUFJPUEVSVFlfUElDVFVSRVMiO3M6MTM6IlNZU1RFTV9JTUFHRVMiO3M6MTc6IlBST1BFUlRZX1NFUlZJQ0VTIjtzOjIzOiJTWVNURU1fUkVMQVRFRF9TRVJWSUNFUyI7czoyODoiUVVJQ0tfVklFV19QUk9QRVJUWV9TRVJWSUNFUyI7czoyMzoiU1lTVEVNX1JFTEFURURfU0VSVklDRVMiO3M6MTg6IlBST1BFUlRZX0RPQ1VNRU5UUyI7czoxNjoiU1lTVEVNX0RPQ1VNRU5UUyI7czoyOToiUVVJQ0tfVklFV19QUk9QRVJUWV9ET0NVTUVOVFMiO3M6MTY6IlNZU1RFTV9ET0NVTUVOVFMiO3M6MTk6IlBST1BFUlRZX0FERElUSU9OQUwiO3M6MTc6IlNZU1RFTV9BRERJVElPTkFMIjtzOjMwOiJRVUlDS19WSUVXX1BST1BFUlRZX0FERElUSU9OQUwiO3M6MTc6IlNZU1RFTV9BRERJVElPTkFMIjtzOjE5OiJQUk9QRVJUWV9BU1NPQ0lBVEVEIjtzOjE3OiJTWVNURU1fQVNTT0NJQVRFRCI7czozMDoiUVVJQ0tfVklFV19QUk9QRVJUWV9BU1NPQ0lBVEVEIjtzOjE3OiJTWVNURU1fQVNTT0NJQVRFRCI7czoyMDoiUFJPUEVSVFlfUkVDT01NRU5ERUQiO3M6MTg6IlNZU1RFTV9SRUNPTU1FTkRFRCI7czozMToiUVVJQ0tfVklFV19QUk9QRVJUWV9SRUNPTU1FTkRFRCI7czoxODoiU1lTVEVNX1JFQ09NTUVOREVEIjtzOjE0OiJQUk9QRVJUWV9WSURFTyI7czo1OiJWSURFTyI7czoyNToiUVVJQ0tfVklFV19QUk9QRVJUWV9WSURFTyI7czo1OiJWSURFTyI7czoyMzoiT0ZGRVJTX1BST1BFUlRZX0FSVElDTEUiO3M6MTQ6IlNZU1RFTV9BUlRJQ0xFIjtzOjM0OiJRVUlDS19WSUVXX09GRkVSU19QUk9QRVJUWV9BUlRJQ0xFIjtzOjE0OiJTWVNURU1fQVJUSUNMRSI7czoyNDoiT0ZGRVJTX1BST1BFUlRZX1BJQ1RVUkVTIjtzOjEzOiJTWVNURU1fSU1BR0VTIjtzOjM1OiJRVUlDS19WSUVXX09GRkVSU19QUk9QRVJUWV9QSUNUVVJFUyI7czoxMzoiU1lTVEVNX0lNQUdFUyI7czoxNjoiQ09OVkVSVF9DVVJSRU5DWSI7czoxOiJZIjtzOjI3OiJRVUlDS19WSUVXX0NPTlZFUlRfQ1VSUkVOQ1kiO3M6MToiWSI7czoxMToiQ1VSUkVOQ1lfSUQiO3M6MzoiUlVCIjtzOjIyOiJRVUlDS19WSUVXX0NVUlJFTkNZX0lEIjtzOjM6IlJVQiI7czoxMDoiUFJJQ0VfQ09ERSI7YTo0OntpOjA7czo0OiJCQVNFIjtpOjE7czowOiIiO2k6MjtzOjQ6IkJBU0UiO2k6MztzOjA6IiI7fXM6MjE6IlFVSUNLX1ZJRVdfUFJJQ0VfQ09ERSI7YToyOntpOjA7czo0OiJCQVNFIjtpOjE7czowOiIiO31zOjExOiJJQkxPQ0tfVFlQRSI7czo4OiJjYXRhbG9ncyI7czo5OiJJQkxPQ0tfSUQiO3M6MjoiMTYiO3M6MTg6IkVMRU1FTlRfU09SVF9GSUVMRCI7czo0OiJzb3J0IjtzOjE4OiJFTEVNRU5UX1NPUlRfT1JERVIiO3M6MzoiYXNjIjtzOjE5OiJFTEVNRU5UX1NPUlRfRklFTEQyIjtzOjI6ImlkIjtzOjE5OiJFTEVNRU5UX1NPUlRfT1JERVIyIjtzOjQ6ImRlc2MiO3M6MTg6IlBBR0VfRUxFTUVOVF9DT1VOVCI7czoyOiIzMCI7czoxMToiU0VDVElPTl9VUkwiO047czoxMDoiREVUQUlMX1VSTCI7TjtzOjEwOiJCQVNLRVRfVVJMIjtzOjE3OiIvcGVyc29uYWwvYmFza2V0LyI7czoxNToiQUNUSU9OX1ZBUklBQkxFIjtzOjExOiJhY3Rpb25fY3NjcyI7czoxOToiUFJPRFVDVF9JRF9WQVJJQUJMRSI7czoyOiJpZCI7czoyNToiUFJPRFVDVF9RVUFOVElUWV9WQVJJQUJMRSI7czo4OiJxdWFudGl0eSI7czoyMjoiUFJPRFVDVF9QUk9QU19WQVJJQUJMRSI7czo0OiJwcm9wIjtzOjE5OiJTRUNUSU9OX0lEX1ZBUklBQkxFIjtzOjEwOiJTRUNUSU9OX0lEIjtzOjEwOiJDQUNIRV9UWVBFIjtzOjE6IkEiO3M6MTA6IkNBQ0hFX1RJTUUiO3M6ODoiMzYwMDAwMDAiO3M6MTU6IkRJU1BMQVlfQ09NUEFSRSI7czoxOiJZIjtzOjE1OiJVU0VfUFJJQ0VfQ09VTlQiO3M6MToiWSI7czoxNjoiU0hPV19QUklDRV9DT1VOVCI7czoxOiIxIjtzOjE3OiJQUklDRV9WQVRfSU5DTFVERSI7czoxOiJZIjtzOjIwOiJVU0VfUFJPRFVDVF9RVUFOVElUWSI7TjtzOjI0OiJBRERfUFJPUEVSVElFU19UT19CQVNLRVQiO3M6MToiWSI7czoyNjoiUEFSVElBTF9QUk9EVUNUX1BST1BFUlRJRVMiO3M6MToiTiI7czoxODoiSElERV9OT1RfQVZBSUxBQkxFIjtzOjE6Ik4iO3M6MTc6IkRJU1BMQVlfVE9QX1BBR0VSIjtzOjE6Ik4iO3M6MjA6IkRJU1BMQVlfQk9UVE9NX1BBR0VSIjtzOjE6IlkiO3M6MTE6IlBBR0VSX1RJVExFIjtzOjEyOiLQotC+0LLQsNGA0YsiO3M6MTc6IlBBR0VSX1NIT1dfQUxXQVlTIjtzOjE6Ik4iO3M6MTQ6IlBBR0VSX1RFTVBMQVRFIjtzOjg6Ii5kZWZhdWx0IjtzOjIwOiJQQUdFUl9ERVNDX05VTUJFUklORyI7czoxOiJOIjtzOjMxOiJQQUdFUl9ERVNDX05VTUJFUklOR19DQUNIRV9USU1FIjtzOjU6IjM2MDAwIjtzOjE0OiJQQUdFUl9TSE9XX0FMTCI7czoxOiJOIjtzOjExOiJGSUxURVJfTkFNRSI7czoyMjoiYXJyQ2F0YWxvZ1NlYXJjaEZpbHRlciI7czoxMDoiU0VDVElPTl9JRCI7czowOiIiO3M6MTI6IlNFQ1RJT05fQ09ERSI7czowOiIiO3M6MTk6IlNFQ1RJT05fVVNFUl9GSUVMRFMiO2E6MDp7fXM6MTk6IklOQ0xVREVfU1VCU0VDVElPTlMiO3M6MToiWSI7czoxOToiU0hPV19BTExfV09fU0VDVElPTiI7czoxOiJZIjtzOjE4OiJBRERfU0VDVElPTlNfQ0hBSU4iO3M6MToiTiI7czo5OiJTRVRfVElUTEUiO3M6MToiTiI7czoxNDoiU0VUX1NUQVRVU180MDQiO3M6MToiTiI7czoxMjoiQ0FDSEVfRklMVEVSIjtzOjE6Ik4iO3M6MTI6IkNBQ0hFX0dST1VQUyI7czoxOiJOIjtzOjI1OiJISURFX05PVF9BVkFJTEFCTEVfT0ZGRVJTIjtzOjE6Ik4iO3M6MjA6IlBST0RVQ1RfRElTUExBWV9NT0RFIjtzOjE6IlkiO3M6MTg6IlBST0RVQ1RfUFJPUEVSVElFUyI7czowOiIiO3M6MTY6Ik9GRkVSX1RSRUVfUFJPUFMiO2E6MTp7aTowO3M6MTE6Ik9GRkVSU19TSVpFIjt9czoyMjoiT0ZGRVJTX0NBUlRfUFJPUEVSVElFUyI7czowOiIiO3M6MTc6Ik9GRkVSU19TT1JUX0ZJRUxEIjtzOjQ6InNvcnQiO3M6MTc6Ik9GRkVSU19TT1JUX09SREVSIjtzOjM6ImFzYyI7czoxODoiT0ZGRVJTX1NPUlRfRklFTEQyIjtzOjI6ImlkIjtzOjE4OiJPRkZFUlNfU09SVF9PUkRFUjIiO3M6NDoiZGVzYyI7czoxMToiVVNFX0NPTVBBUkUiO3M6MToiWSI7czoxMjoiQ09NUEFSRV9OQU1FIjtzOjc6ImNvbXBhcmUiO3M6MTI6IkNPTVBBUkVfUEFUSCI7czo0MToiL2NhdGFsb2cvY29tcGFyZS5waHA/YWN0aW9uPSNBQ1RJT05fQ09ERSMiO3M6NDoiV0lERSI7czoxOiJZIjtzOjE3OiJDVVJSRU5UX0JBU0VfUEFHRSI7czo0MjoiL2NhdGFsb2cvP3E9JUQwJUI0JUQwJUIyJUQwJUI1JUQxJTgwJUQxJThDIjtzOjExOiJQQVJFTlRfTkFNRSI7czoyMToiYml0cml4OmNhdGFsb2cuc2VhcmNoIjtzOjIwOiJQQVJFTlRfVEVNUExBVEVfTkFNRSI7czo4OiIuZGVmYXVsdCI7czoyMDoiUEFSRU5UX1RFTVBMQVRFX1BBR0UiO3M6MDoiIjtzOjEzOiJHTE9CQUxfRklMVEVSIjthOjE6e3M6MzoiPUlEIjthOjMxOntpOjM3ODtzOjM6IlM5MCI7aTozNzc7czozOiJTODkiO2k6MzgwO3M6MzoiUzkyIjtpOjM3MTtzOjM6IlM4MyI7aTozNjI7czozOiJTNzQiO2k6MzgzO3M6MzoiUzk1IjtpOjM3NjtzOjM6IlM4OCI7aTozNjU7czozOiJTNzciO2k6MzUxO3M6MzoiUzYzIjtpOjEzNzY7czo0OiJTMTE4IjtpOjEzODk7czo0OiJTMTIwIjtpOjEzOTA7czo0OiIxMjIzIjtpOjEzODQ7czo0OiIxMjE5IjtpOjEzODU7czo0OiIxMjIwIjtpOjEzODY7czo0OiIxMjIxIjtpOjEzODc7czo0OiIxMjIyIjtpOjExNTk7czozOiI5OTkiO2k6MTE2MDtzOjQ6IjEwMDAiO2k6MTE2MTtzOjQ6IjEwMDEiO2k6OTE5O3M6NDoiUzEwMSI7aTo5MjA7czozOiI3NzQiO2k6OTIxO3M6MzoiNzc1IjtpOjkyMjtzOjM6Ijc3NiI7aTo5MjM7czozOiI3NzciO2k6OTI0O3M6MzoiNzc4IjtpOjkyNTtzOjM6Ijc3OSI7aTo5NTI7czozOiI4MDUiO2k6OTU1O3M6MzoiODA4IjtpOjk1MTtzOjM6IjgwNCI7aTo5NTM7czozOiI4MDYiO2k6OTU0O3M6MzoiODA3Ijt9fX0=.736c4150b665c75ce34d36d1f5018f6a0ad4302587b609c4c587668023bd31b1', 'ajaxId': null, 'container': 'i-12-bitrix-catalog-section-catalog-tile-2-OQ3k9PHlVICg-2'});

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