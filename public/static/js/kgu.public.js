/*create by kgu, Inc.
 *kgu.js v1.0
 * Copyright 2010-2017 kgu.cn(http://kgu.cn)
*/

// 函数调用
$(document).ready(function () {
    nav_normal(); // 导航normal
    nav_tial(); // 导航tile
    m_nav();  // 移动端导航normal
    recruit(); //招聘列表
    m_page(); //移动端列表分页
    form_validate(); //表单验证
    // lazy_load();//懒加载
    // accordion();//手风琴
});

// 导航normal
function nav_normal() {
    var dropdown = $('.nav_normal').find('.dropdown');
    dropdown.hover(function () {
        var drop_width = $(this).width();

        var dropdown_menu = $(this).find('.dropdown_menu');

        $(this).find('.nav_line').stop(!0, !0).animate({width: drop_width}, "linear");

        $(this).addClass('on');
        if (dropdown_menu.length > 0) {
            dropdown_menu.stop(!0, !0).slideDown();
        }
    }, function () {
        $(this).removeClass('on');
        $(this).find('.nav_line').stop(!0, !0).animate({width: 0}, "linear");
        $(this).find('.dropdown_menu').stop(!0, !0).slideUp();
    })
};

// 导航tile
function nav_tial() {
    var $ww = $(window).width(),
        dropdown = $(".nav_tile .dropdown"),
        droplist_tile = $(".droplist_tile"),
        t,                                      //延时函数
        timeout = 500,               //二级菜单，关闭延时时间
        close_dropaction = function () {
            close_dropdown();
        };

    // 二级关闭动作
    function close_dropdown() {
        $('.droplist_tile .drop_tile').fadeOut();
        droplist_tile.stop(!0, !0).animate({height: 0}, "linear");
        show_line()
    }

    //延时关闭
    function close_drop() {
        t = setTimeout(close_dropaction, timeout);
    };

    //取消关闭二级
    function cancel_close_dropdown() {
        clearTimeout(t);
    }

    show_line();

    //下边框移动
    function show_line() {
        if ($('.nav_tile .nav_line').length > 0) {
            var div1 = $('.nav_tile').offset().left;
            var div2 = $('.nav_tile .dropdown.active').find('span').offset().left;
            var line_width = $('.nav_tile .dropdown.active').find('span').outerWidth();
            var distances = div2 - div1;
            $('.nav_tile').find('.nav_line').css({
                'left': distances,
                'width': line_width
            });
        }

    };

    function move_line() {
        if ($('.nav_tile .nav_line').length > 0) {
            var div1 = $('.nav_tile').offset().left;
            var div2 = $('.nav_tile .dropdown.on').find('span').offset().left;
            var line_width = $('.nav_tile .dropdown.on').find('span').width();
            var distances = div2 - div1;
            $('.nav_tile').find('.nav_line').css({
                'left': distances,
                'width': line_width
            });
        }
    };


    //二级下拉动作
    dropdown.hover(function () {
        cancel_close_dropdown(); //取消关闭
        $(this).addClass('on').siblings().removeClass('on');
        // 移动下边框
        move_line()
        // 显示二级
        data = $(this).attr('data-name');
        $('.droplist_tile .drop_tile[data-name=' + data + ']').stop().fadeIn().siblings().fadeOut();
        var menu_h = $('.droplist_tile .drop_tile[data-name=' + data + ']').outerHeight();
        droplist_tile.stop(!0, !0).animate({height: menu_h}, "linear");
        console.log('0', menu_h);
    }, function () {
        close_drop();
    })

    // 鼠标悬浮在二级上，需取消关闭二级的动作
    droplist_tile.hover(function () {
        cancel_close_dropdown();
    }, function () {
        close_drop();
    })

};

// 移动导航normal
function m_nav() {
    var btn = $('.nav_toggle'),
        nav_box = $('.m_nav'),
        nav_list = $('.m_nav_toggle'),
        dropdown = $('.m_nav_toggle .dropdown');
    btn.click(function () {
        var num = $('.m_nav_toggle > li').length,
            nav_h = nav_list.height(),
            head_h = 50, //手机头部高度
            max_nav_h = window.screen.height - head_h,
            navlist_h = max_nav_h > nav_h ? nav_h : max_nav_h,
            a = 0,
            b = 0,
            sub_s = 500 / num,
            sub_h = 1000 / num;//二级显示延迟
        console.log(navlist_h, num)
        if ($(this).hasClass('active')) {
            $('body,html').removeClass('overflow');
            $(this).removeClass('active');
            $('.dropdown_menu').removeClass('on');
            
            $('.m_nav_list').removeClass('push-v1')
            $('.m_nav_list li').removeClass('on')
            // nav_box.stop(!0, !0).animate({height: "0"},500,"linear");
            nav_box.stop(!0, !0).hide();
            $('.m_nav_toggle > li').css({transform: "matrix(1, -1, 0, 1, 200, 100)"}).find("a").stop(!0, !0).animate({opacity: 0}, 10);
            // for( a = 0; a < num ; a++) {
            //     (function (a,sub_h,b,num) {
            //         var set_t = sub_h * b;
            //         setTimeout(function () {
            //             if (btn.hasClass('active')) {
            //                 $('.m_nav_toggle > li').eq(a).css({transform: "matrix(1, -1, 0, 1, 200, 100)"}).find("a").stop(!0, !0).animate({opacity: 0}, 10);
            //             }
            //         }, set_t)
            //     })(a,sub_h,b,num);
            //     b++;
            // }
        } else {
            $('body,html').addClass('overflow');
            $(this).addClass('active');
            // nav_box.stop(!0, !0).animate({height: max_nav_h},500,"linear").delay(500).css({overflow: 'auto'});
            nav_box.stop(!0, !0).show();
            for (a = 0; a < num; a++) {
                (function (sub_s, a, num) {
                    var set_t = sub_s * a;
                    setTimeout(function () {
                        if (btn.hasClass('active')) {
                            $('.m_nav_toggle > li').eq(a).css({transform: "matrix(1, 0, 0, 1, 0, 0)"}).find("a").stop(!0, !0).animate({opacity: 1}, 300);
                            console.log(set_t, num, a);
                        }
                    }, set_t)
                })(sub_s, a, num);
            }
        }
    })
    dropdown.click(function () {

    })

    dropdown.each(function () {
        if ($(this).find('.dropdown_menu li').length > 0) {
            $(this).addClass('has_drop');
        }
    });
    dropdown.find('a').click(function () {
        var sub = $(this).next('.dropdown_menu');
        if (!sub.length > 0) {
            return true;
        }
        if (sub.height() == 0) {
            $('.dropdown_menu').removeClass('on');
            sub.addClass('on');
        } else {
            sub.removeClass('on');
        }
        return false;
    })


};

// 移动导航fixed
;(function ($, window, undefined) {

    'use strict';

    // global
    var Modernizr = window.Modernizr, $body = $('body');

    $.DLMenu = function (options, element) {
        this.$el = $(element);
        this._init(options);
    };

    // the options
    $.DLMenu.defaults = {
        // classes for the animation effects
        animationClasses: {classin: 'dl-animate-in-1', classout: 'dl-animate-out-1'},
        // callback: click a link that has a sub menu
        // el is the link element (li); name is the level name
        onLevelClick: function (el, name) {
            return false;
        },
        // callback: click a link that does not have a sub menu
        // el is the link element (li); ev is the event obj
        onLinkClick: function (el, ev) {
            return false;
        }
    };

    $.DLMenu.prototype = {
        _init: function (options) {

            // options
            this.options = $.extend(true, {}, $.DLMenu.defaults, options);
            // cache some elements and initialize some variables
            this._config();

            var animEndEventNames = {
                    'WebkitAnimation': 'webkitAnimationEnd',
                    'OAnimation': 'oAnimationEnd',
                    'msAnimation': 'MSAnimationEnd',
                    'animation': 'animationend'
                },
                transEndEventNames = {
                    'WebkitTransition': 'webkitTransitionEnd',
                    'MozTransition': 'transitionend',
                    'OTransition': 'oTransitionEnd',
                    'msTransition': 'MSTransitionEnd',
                    'transition': 'transitionend'
                };
            // animation end event name
            this.animEndEventName = animEndEventNames[Modernizr.prefixed('animation')] + '.dlmenu';
            // transition end event name
            this.transEndEventName = transEndEventNames[Modernizr.prefixed('transition')] + '.dlmenu',
                // support for css animations and css transitions
                this.supportAnimations = Modernizr.cssanimations,
                this.supportTransitions = Modernizr.csstransitions;

            this._initEvents();

        },
        _config: function () {
            this.open = false;
            this.$trigger = this.$el.children('.nav_btn');
            this.$menu = this.$el.children('ul.m_nav_list');
            this.$menuitems = this.$menu.find('li:not(.nav_back)');
            this.$el.find('ul.m_nav_sub').prepend('<li class="nav_back"><a href="#">返回上一级</a></li>');
            this.$back = this.$menu.find('li.nav_back');
        },
        _initEvents: function () {

            var self = this;

            this.$trigger.on('click.dlmenu', function () {

                if (self.open) {
                    self._closeMenu();
                }
                else {
                    self._openMenu();
                }
                return false;

            });

            this.$menuitems.on('click.dlmenu', function (event) {

                event.stopPropagation();

                var $item = $(this),
                    $submenu = $item.children('ul.m_nav_sub');

                if ($submenu.length > 0) {

                    var $flyin = $submenu.clone().css('opacity', 1).insertAfter(self.$menu),
                        onAnimationEndFn = function () {
                            self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classout).addClass('m_subview');
                            $item.addClass('m_subview_open').parents('.m_subview_open:first').removeClass('m_subview_open').addClass('m_subview');
                            $flyin.remove(console.log('1'));
                        };

                    setTimeout(function () {
                        $flyin.addClass(self.options.animationClasses.classin);
                        self.$menu.addClass(self.options.animationClasses.classout);
                        if (self.supportAnimations) {
                            self.$menu.on(self.animEndEventName, onAnimationEndFn);
                        }
                        else {
                            onAnimationEndFn.call();
                        }

                        self.options.onLevelClick($item, $item.children('a:first').text());
                    });

                    return false;

                }
                else {
                    self.options.onLinkClick($item, event);
                }

            });

            this.$back.on('click.dlmenu', function (event) {

                var $this = $(this),
                    $submenu = $this.parents('ul.m_nav_sub:first'),
                    $item = $submenu.parent(),

                    $flyin = $submenu.clone().insertAfter(self.$menu);

                var onAnimationEndFn = function () {
                    self.$menu.off(self.animEndEventName).removeClass(self.options.animationClasses.classin);
                    $flyin.remove();
                };

                setTimeout(function () {
                    $flyin.addClass(self.options.animationClasses.classout);
                    self.$menu.addClass(self.options.animationClasses.classin);
                    if (self.supportAnimations) {
                        self.$menu.on(self.animEndEventName, onAnimationEndFn);
                    }
                    else {
                        onAnimationEndFn.call();
                    }

                    $item.removeClass('m_subview_open');

                    var $subview = $this.parents('.m_subview:first');
                    if ($subview.is('li')) {
                        $subview.addClass('m_subview_open');
                    }
                    $subview.removeClass('m_subview');
                });

                return false;

            });

        },
        closeMenu: function () {
            if (this.open) {
                this._closeMenu();
            }
        },
        _closeMenu: function () {
            var self = this,
                onTransitionEndFn = function () {
                    self.$menu.off(self.transEndEventName);
                    self._resetMenu();
                };

            this.$menu.removeClass('nav_open');
            this.$menu.addClass('m_nav_toggle');
            this.$trigger.removeClass('nav_btn_active');

            if (this.supportTransitions) {
                this.$menu.on(this.transEndEventName, onTransitionEndFn);
            }
            else {
                onTransitionEndFn.call();
            }

            this.open = false;
        },
        openMenu: function () {
            if (!this.open) {
                this._openMenu();
            }
        },
        _openMenu: function () {
            var self = this;
            // clicking somewhere else makes the menu close
            $body.off('click').on('click.dlmenu', function () {
                self._closeMenu();
            });
            this.$menu.addClass('nav_open m_nav_toggle').on(this.transEndEventName, function () {
                $(this).removeClass('m_nav_toggle');
            });
            this.$trigger.addClass('nav_btn_active');
            this.open = true;
        },
        // resets the menu to its original state (first level of options)
        _resetMenu: function () {
            this.$menu.removeClass('m_subview');
            this.$menuitems.removeClass('m_subview m_subview_open');
        }
    };

    var logError = function (message) {
        if (window.console) {
            window.console.error(message);
        }
    };

    $.fn.nav_fix = function (options) {
        if (typeof options === 'string') {
            var args = Array.prototype.slice.call(arguments, 1);
            this.each(function () {
                var instance = $.data(this, 'dlmenu');
                if (!instance) {
                    logError("cannot call methods on dlmenu prior to initialization; " +
                        "attempted to call method '" + options + "'");
                    return;
                }
                if (!$.isFunction(instance[options]) || options.charAt(0) === "_") {
                    logError("no such method '" + options + "' for dlmenu instance");
                    return;
                }
                instance[options].apply(instance, args);
            });
        }
        else {
            this.each(function () {
                var instance = $.data(this, 'dlmenu');
                if (instance) {
                    instance._init();
                }
                else {
                    instance = $.data(this, 'dlmenu', new $.DLMenu(options, this));
                }
            });
        }
        return this;
    };

})(jQuery, window);

// 招聘列表
function recruit() {
    var recruit = $('.recruit li h4'),
        recruit_con = $('.recruit .recruit_txt')
    recruit.on('click', function () {
        var recruit_txt = $(this).next('.recruit_txt');
        if (!recruit_txt.is(":visible")) {
            recruit.removeClass('on');
            $(this).addClass('on');
            recruit_con.slideUp();
            recruit_txt.stop(!0, !0).slideDown();
        } else {
            $(this).removeClass('on');
            recruit_txt.stop(!0, !0).slideUp();
        }
    })
};

// 移动端列表分页
function m_page() {
    $('.m_page .num').click(function () {
        $('body').addClass('show_page');
    });
    $('.m_page_pop').click(function () {
        $('body').removeClass('show_page');
    });
};

// 表单验证，注意添加类名，还别忘了加<span class="span_tips">请输入用户名</span>或者<span class="tips"></span>
// 此方法是为了登录注册是含有默认的用户名时，让它只含有用户名而不含有提示信息否则会重叠

function form_validate() {
    // label控制
    $('.inp textarea').focus(function () {
        $(this).parent().addClass("active");
    });
    $(".inp textarea").blur(function () {
        $(this).parent().removeClass("active");
    });
    $('.inp input').focus(function () {
        $(this).parent().addClass("active");
    });
    $(".inp input").blur(function () {
        $(this).parent().removeClass("active");
    });
    $('.inp .required').bind('input propertychange', function () {
        var $val = $(this).val();
        if ($val == null || $val == "") {
            $(this).prev('label').show();
        } else {
            $(this).prev('label').hide();
        }
    })
/*
    $("input:not(:submit)").each(function (index, element) {
        if ($(this).val() != "") {
            $(this).next("label").hide();
        } else {
            $(this).next("label").show();
        }
    });*/

    $("input:not(:submit)").keyup(function (e) {
        $(this).next("label").hide();
    });

    var emailReg = /^[-._A-Za-z0-9]+@([_A-Za-z0-9]+\.)+[A-Za-z0-9]{2,3}$/;
    var phoneReg = /^1[0-9]{10}$/;
    var nameReg = /^[a-zA-Z0-9_\u4E00-\u9FA5]{3,18}$/;
    var passwordReg = /^[a-zA-Z0-9_]{6,18}$/;
    var certifical_con = /^[a-zA-Z0-9]{18}$/;
////////////////////////////////////////blur事件
    $("input:not(:submit),textarea:not(:submit)").blur(function (e) {
        var tips;
        var obj = $(this);
        var val = $(this).val();

        //必填
        /*if (obj.is(".required")) {
            if (val != "") {
                obj.next("label").hide().removeClass("tips");
            } else {
                obj.next("label").show().addClass("tips");//以防填写信息后又删除之后出现空白
                if (obj.next("label").is(".span_tips")) {//区分span_tips和普通的tips为空的提示
                    tips = obj.next("label").html();
                } else {
                    tips = "不能为空";
                }
            }
        }*/

        if (val) {//不为空的情况下判断
            //判断登录名
            if (obj.is(".name")) {
                if (!nameReg.test(val)) {
                    obj.next("label").show().addClass("tips");//如果不加这句会出现span隐藏看不到效果的情况
                    tips = "只能由数字、字母、下划线组成且长度不得小于3位";
                    obj.val("");//如果不加这句则会出现placehoder效果与提示重叠的问题。
                    $(this).prev('label').show();
                    obj.next("label").html();
                } else {
                    obj.next("label").hide().removeClass("tips");
                    tips = "";
                }
            }
            //判断密码
            if (obj.is(".password")) {
                if (!passwordReg.test(val)) {
                    obj.next("label").show().addClass("tips");//如果不加这句会出现span隐藏看不到效果的情况
                    tips = "只能由数字、字母、下划线组成且长度不得小于6位";
                    obj.val("");//如果不加这句则会出现placehoder效果与提示重叠的问题。
                    $(this).prev('label').show();
                } else {
                    obj.next("label").hide().removeClass("tips");
                    tips = "";
                }
            }
            //判断确认密码
            if (obj.is(".re_pwd")) {
                var pwd = $(".password");
                if (val != pwd.val()) {
                    obj.next("label").show().addClass("tips");
                    tips = "密码不一致";
                    obj.val("");
                    $(this).prev('label').show();
                } else {
                    obj.next("label").hide().removeClass("tips");
                    tips = "";
                }
            }
            //判断手机号码
            if (obj.is(".phone")) {
                if (!phoneReg.test(val)) {
                    obj.next("label").show().addClass("tips");
                    tips = "格式不对";
                    obj.val("");
                    $(this).prev('label').show();
                } else {
                    obj.next("label").hide().removeClass("tips");
                    tips = "";
                }
            }
        }
        //提示位置判断
        obj.next("label").html(tips);

    });


//提交验证
    $('input:submit').on('click', function () {

        var $form = $(this).parents("form");
        var istrue = true;
        var require = $form.find(".required");
        var email = $form.find(".email");
        var phone = $form.find(".phone");
        //判断必填
        if (require) {
            require.each(function (index, element) {
                var $span = $(this).next("label");
                if ($(this).val() == "") {
                    if ($span.is(".span_tips")) {
                        var tips = $span.html();
                    } else {
                        var tips = "不能为空";
                    }
                    istrue = false;
                    $(this).val("");
                    $(this).prev('label').show();
                    $(this).next("label").html(tips);
                    $(this).next("label").show().addClass("tips");
                }
            });
        }

        //判断email
        if (email) {
            email.each(function (index, element) {
                if (!emailReg.test($(this).val()) && $(this).val() != '') {
                    var tips = "邮件格式不正确";
                    istrue = false;
                    $(this).val("");
                    $(this).prev('label').show();
                    $(this).next("label").html(tips);
                    $(this).next("label").show().addClass("tips");
                }
            });
        }
        //判断手机
        if (phone) {
            phone.each(function (index, element) {
                var obj = $(this);
                if (obj.val() != '') {
                    if (!phoneReg.test(obj.val())) {
                        var tips = "格式不对";
                        istrue = false;
                        obj.val("");
                        $(this).prev('label').show();
                        obj.next("label").html(tips);
                        obj.next("label").show().addClass("tips");
                    }
                }

            });
        }
        if (istrue == true) {


            // layer.load();

        }
        return istrue;
    })
};

// 懒加载 执行
// function lazy_load() {
//     $(".lazyload").lazyload({
//         effect: "fadeIn"
//     });
// };

//tab 封装
!(function (a, b) {
    b.fn.kgu_tab = function (options) {
        var $this = this,
            defaults = {
                'tn_con': '', //最外层容器
                'tab_btn': '.tab_btn', //tab 按钮类名
                'tab_block': '.tab_block', //tab 切换区块类名
                'date_name': 'data-name',
                'tab_action': 'click'// 动作 可选"click""hover"
            };
        var myset = $.extend({}, defaults, options);//将一个空对象做为第一个参数
        this.find(myset.tab_btn).on(myset.tab_action, function () {
            var date = $(this).attr(myset.date_name);
            $(this).parents(myset.tn_con).hide();
            $(this).parents(myset.tn_con).find(myset.tab_block + '[' + myset.date_name + '=' + date + ']').stop().show();
            console.log($this);
        })
    }
})(window, jQuery);

!(function (a, b) {
    b.fn.kgu_tab_on = function (options) {
        var $this = this,
            defaults = {
                'tn_con': '', //最外层容器
                'tab_btn': '.tab_btn', //tab 按钮类名
                'tab_block': '.tab_block', //tab 切换区块类名
                'date_name': 'data-name',
                'tab_action': 'click'// 动作 可选"click""hover"
            };
        var myset = $.extend({}, defaults, options);//将一个空对象做为第一个参数
        $this.find(myset.tab_btn).on(myset.tab_action, function () {
            $(this).parents(myset.tn_con).find(myset.tab_btn).removeClass('on');
            $(this).addClass('on');
            var date = $(this).attr(myset.date_name);
            $(this).parents(myset.tn_con).find(myset.tab_block).removeClass('on')
            $(this).parents(myset.tn_con).find(myset.tab_block + '[' + myset.date_name + '=' + date + ']').addClass('on');
        })
    }
})(window, jQuery);

// 手风琴 封装
function accordion() {
    var box = $('.accordion'),   //手风琴盒子
        item = box.find('.item'), //手风琴格子
        box_w = box.width(),
        a = item.length,
        b = 500,               //展开宽度
        c = parseInt(( box_w - b ) / ( a - 1 )) ,   //计算收起宽度,取整
        ave_w = box_w / a,         //计算平均宽度
        t = 400;              //定义动作时间

    item.each(function () {
        $(this).animate({width: ave_w}, "linear");
    }) //默认宽度平局

    box.find('.active').stop().stop().animate({width: b}, t).siblings().stop().animate({width: c}, t).removeClass('active');

    item.on('hover', function () {
        $(this).addClass('active').stop(!0, !0).animate({width: b}, t).siblings().stop(!0, !0).animate({width: c}, t).removeClass('active');
    })

};

// 数字滚动
(function ($) {
    $.fn.numberRock = function (options) {
        var defaults = {
            speed: 24,
            count: 100
        };
        var opts = $.extend({}, defaults, options);
        var div_by = 100,
            count = opts["count"],
            speed = Math.floor(count / div_by),
            sum = 0,
            $display = this,
            run_count = 1,
            int_speed = opts["speed"];
        var int = setInterval(function () {
            if (run_count <= div_by && speed != 0) {
                $display.text(sum = speed * run_count);
                run_count++;
            } else if (sum < count) {
                $display.text(++sum);
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);

//入场动画 loading
var isIE = function () {
    if ((navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/7./i) == "7.") || (navigator.appName == "Microsoft Internet Explorer" && navigator.appVersion.match(/8./i) == "8.")) {
        return true;
    } else {
        return false;
    }
}

function isMobile() {
    var w_width = $(window).width();
    if (w_width <= 1024) {
        return true;
    } else if (w_width > 1024) {
        return false;
    }
}

$(window).on("load", function () {
    //入场动画
    if (isIE()) {
        $('.loading').hide();
        $('html,body').css({"overflow": "auto"});
        // $('body').html($('<div class="forie"></div>'));

    } else if (!isMobile()) {
        $('.loading_box').fadeOut(300, function () {
            $('.loading').animate({"margin-top": "-51%"}, 450, function () {
                $('.header').addClass('on');
                $('.banner_full').addClass('on');
                $('.loading').fadeOut();
            });
        })
    } else {
        $('.loading').fadeOut(300, function () {
            $('.banner_full').addClass('on');
        });
    };
});


/*
Plugin: jQuery Parallax  背景视差
Version 1.1.3
Author: Ian Lunn
Twitter: @IanLunn
Author URL: http://www.ianlunn.co.uk/
Plugin URL: http://www.ianlunn.co.uk/plugins/jquery-parallax/

Dual licensed under the MIT and GPL licenses:
http://www.opensource.org/licenses/mit-license.php
http://www.gnu.org/licenses/gpl.html
*/

(function ($) {
    var $window = $(window);
    var windowHeight = $window.height();

    $window.resize(function () {
        windowHeight = $window.height();
    });

    $.fn.parallax = function (xpos, speedFactor, outerHeight) {
        var $this = $(this);
        var getHeight;
        var firstTop;
        var paddingTop = 0;

        //get the starting position of each element to have parallax applied to it
        $this.each(function () {
            firstTop = $this.offset().top;
        });

        if (outerHeight) {
            getHeight = function (jqo) {
                return jqo.outerHeight(true);
            };
        } else {
            getHeight = function (jqo) {
                return jqo.height();
            };
        }

        // setup defaults if arguments aren't specified
        if (arguments.length < 1 || xpos === null) xpos = "50%";
        if (arguments.length < 2 || speedFactor === null) speedFactor = 0.1;
        if (arguments.length < 3 || outerHeight === null) outerHeight = true;

        // function to be called whenever the window is scrolled or resized
        function update() {
            var pos = $window.scrollTop();

            $this.each(function () {
                var $element = $(this);
                var top = $element.offset().top;
                var height = getHeight($element);

                // Check if totally above or totally below viewport
                if (top + height < pos || top > pos + windowHeight) {
                    return;
                }

                $this.css('backgroundPosition', xpos + " " + Math.round((firstTop - pos) * speedFactor) + "px");
            });
        }

        $window.bind('scroll', update).resize(update);
        update();
    };
})(jQuery);

//检测设备是否支持触摸事件
function is_touch_device() {
    return 'ontouchstart' in window || navigator.maxTouchPoints;
};


/*
 * jQuery One Page Nav Plugin
 * http://github.com/davist11/jQuery-One-Page-Nav
 *
 * 锚点跟随
 *
 * @version 3.0.0
 *
 * Example usage:
 * $('#nav').onePageNav({
 *   currentClass: 'current',
 *   changeHash: false,
 *   scrollSpeed: 750
 * });
 */

;(function ($, window, document, undefined) {

    // our plugin constructor
    var OnePageNav = function (elem, options) {
        this.elem = elem;
        this.$elem = $(elem);
        this.options = options;
        this.metadata = this.$elem.data('plugin-options');
        this.$win = $(window);
        this.sections = {};
        this.didScroll = false;
        this.$doc = $(document);
        this.docHeight = this.$doc.height();
    };

    // the plugin prototype
    OnePageNav.prototype = {
        defaults: {
            navItems: 'a',
            currentClass: 'current',
            changeHash: false,
            easing: 'swing',
            filter: '',
            scrollSpeed: 750,
            scrollThreshold: 0.5,
            begin: false,
            end: false,
            scrollChange: false
        },

        init: function () {
            // Introduce defaults that can be extended either
            // globally or using an object literal.
            this.config = $.extend({}, this.defaults, this.options, this.metadata);

            this.$nav = this.$elem.find(this.config.navItems);

            //Filter any links out of the nav
            if (this.config.filter !== '') {
                this.$nav = this.$nav.filter(this.config.filter);
            }

            //Handle clicks on the nav
            this.$nav.on('click.onePageNav', $.proxy(this.handleClick, this));

            //Get the section positions
            this.getPositions();

            //Handle scroll changes
            this.bindInterval();

            //Update the positions on resize too
            this.$win.on('resize.onePageNav', $.proxy(this.getPositions, this));

            return this;
        },

        adjustNav: function (self, $parent) {
            self.$elem.find('.' + self.config.currentClass).removeClass(self.config.currentClass);
            $parent.addClass(self.config.currentClass);
        },

        bindInterval: function () {
            var self = this;
            var docHeight;

            self.$win.on('scroll.onePageNav', function () {
                self.didScroll = true;
            });

            self.t = setInterval(function () {
                docHeight = self.$doc.height();

                //If it was scrolled
                if (self.didScroll) {
                    self.didScroll = false;
                    self.scrollChange();
                }

                //If the document height changes
                if (docHeight !== self.docHeight) {
                    self.docHeight = docHeight;
                    self.getPositions();
                }
            }, 250);
        },

        getHash: function ($link) {
            return $link.attr('href').split('#')[1];
        },

        getPositions: function () {
            var self = this;
            var linkHref;
            var topPos;
            var $target;

            self.$nav.each(function () {
                linkHref = self.getHash($(this));
                $target = $('#' + linkHref);

                if ($target.length) {
                    topPos = $target.offset().top;
                    self.sections[linkHref] = Math.round(topPos);
                }
            });
        },

        getSection: function (windowPos) {
            var returnValue = null;
            var windowHeight = Math.round(this.$win.height() * this.config.scrollThreshold);

            for (var section in this.sections) {
                if ((this.sections[section] - windowHeight) < windowPos) {
                    returnValue = section;
                }
            }

            return returnValue;
        },

        handleClick: function (e) {
            var self = this;
            var $link = $(e.currentTarget);
            var $parent = $link.parent();
            var newLoc = '#' + self.getHash($link);

            if (!$parent.hasClass(self.config.currentClass)) {
                //Start callback
                if (self.config.begin) {
                    self.config.begin();
                }

                //Change the highlighted nav item
                self.adjustNav(self, $parent);

                //Removing the auto-adjust on scroll
                self.unbindInterval();

                //Scroll to the correct position
                self.scrollTo(newLoc, function () {
                    //Do we need to change the hash?
                    if (self.config.changeHash) {
                        window.location.hash = newLoc;
                    }

                    //Add the auto-adjust on scroll back in
                    self.bindInterval();

                    //End callback
                    if (self.config.end) {
                        self.config.end();
                    }
                });
            }

            e.preventDefault();
        },

        scrollChange: function () {
            var windowTop = this.$win.scrollTop();
            var position = this.getSection(windowTop);
            var $parent;

            //If the position is set
            if (position !== null) {
                $parent = this.$elem.find('a[href$="#' + position + '"]').parent();

                //If it's not already the current section
                if (!$parent.hasClass(this.config.currentClass)) {
                    //Change the highlighted nav item
                    this.adjustNav(this, $parent);

                    //If there is a scrollChange callback
                    if (this.config.scrollChange) {
                        this.config.scrollChange($parent);
                    }
                }
            }
        },

        scrollTo: function (target, callback) {
            var offset = $(target).offset().top;

            $('html, body').animate({
                scrollTop: offset
            }, this.config.scrollSpeed, this.config.easing, callback);
        },

        unbindInterval: function () {
            clearInterval(this.t);
            this.$win.unbind('scroll.onePageNav');
        }
    };

    OnePageNav.defaults = OnePageNav.prototype.defaults;

    $.fn.onePageNav = function (options) {
        return this.each(function () {
            new OnePageNav(this, options).init();
        });
    };

})(jQuery, window, document);

var QRCode;!function(){function r(t){this.mode=o.MODE_8BIT_BYTE,this.data=t,this.parsedData=[];for(var e=0,r=this.data.length;e<r;e++){var i=[],n=this.data.charCodeAt(e);65536<n?(i[0]=240|(1835008&n)>>>18,i[1]=128|(258048&n)>>>12,i[2]=128|(4032&n)>>>6,i[3]=128|63&n):2048<n?(i[0]=224|(61440&n)>>>12,i[1]=128|(4032&n)>>>6,i[2]=128|63&n):128<n?(i[0]=192|(1984&n)>>>6,i[1]=128|63&n):i[0]=n,this.parsedData.push(i)}this.parsedData=Array.prototype.concat.apply([],this.parsedData),this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function h(t,e){this.typeNumber=t,this.errorCorrectLevel=e,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}r.prototype={getLength:function(t){return this.parsedData.length},write:function(t){for(var e=0,r=this.parsedData.length;e<r;e++)t.put(this.parsedData[e],8)}},h.prototype={addData:function(t){var e=new r(t);this.dataList.push(e),this.dataCache=null},isDark:function(t,e){if(t<0||this.moduleCount<=t||e<0||this.moduleCount<=e)throw new Error(t+","+e);return this.modules[t][e]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(t,e){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var r=0;r<this.moduleCount;r++){this.modules[r]=new Array(this.moduleCount);for(var i=0;i<this.moduleCount;i++)this.modules[r][i]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(t,e),7<=this.typeNumber&&this.setupTypeNumber(t),null==this.dataCache&&(this.dataCache=h.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,e)},setupPositionProbePattern:function(t,e){for(var r=-1;r<=7;r++)if(!(t+r<=-1||this.moduleCount<=t+r))for(var i=-1;i<=7;i++)e+i<=-1||this.moduleCount<=e+i||(this.modules[t+r][e+i]=0<=r&&r<=6&&(0==i||6==i)||0<=i&&i<=6&&(0==r||6==r)||2<=r&&r<=4&&2<=i&&i<=4)},getBestMaskPattern:function(){for(var t=0,e=0,r=0;r<8;r++){this.makeImpl(!0,r);var i=v.getLostPoint(this);(0==r||i<t)&&(t=i,e=r)}return e},createMovieClip:function(t,e,r){var i=t.createEmptyMovieClip(e,r);this.make();for(var n=0;n<this.modules.length;n++)for(var o=1*n,a=0;a<this.modules[n].length;a++){var s=1*a;this.modules[n][a]&&(i.beginFill(0,100),i.moveTo(s,o),i.lineTo(1+s,o),i.lineTo(1+s,1+o),i.lineTo(s,1+o),i.endFill())}return i},setupTimingPattern:function(){for(var t=8;t<this.moduleCount-8;t++)null==this.modules[t][6]&&(this.modules[t][6]=t%2==0);for(var e=8;e<this.moduleCount-8;e++)null==this.modules[6][e]&&(this.modules[6][e]=e%2==0)},setupPositionAdjustPattern:function(){for(var t=v.getPatternPosition(this.typeNumber),e=0;e<t.length;e++)for(var r=0;r<t.length;r++){var i=t[e],n=t[r];if(null==this.modules[i][n])for(var o=-2;o<=2;o++)for(var a=-2;a<=2;a++)this.modules[i+o][n+a]=-2==o||2==o||-2==a||2==a||0==o&&0==a}},setupTypeNumber:function(t){for(var e=v.getBCHTypeNumber(this.typeNumber),r=0;r<18;r++){var i=!t&&1==(e>>r&1);this.modules[Math.floor(r/3)][r%3+this.moduleCount-8-3]=i}for(r=0;r<18;r++){i=!t&&1==(e>>r&1);this.modules[r%3+this.moduleCount-8-3][Math.floor(r/3)]=i}},setupTypeInfo:function(t,e){for(var r=this.errorCorrectLevel<<3|e,i=v.getBCHTypeInfo(r),n=0;n<15;n++){var o=!t&&1==(i>>n&1);n<6?this.modules[n][8]=o:n<8?this.modules[n+1][8]=o:this.modules[this.moduleCount-15+n][8]=o}for(n=0;n<15;n++){o=!t&&1==(i>>n&1);n<8?this.modules[8][this.moduleCount-n-1]=o:n<9?this.modules[8][15-n-1+1]=o:this.modules[8][15-n-1]=o}this.modules[this.moduleCount-8][8]=!t},mapData:function(t,e){for(var r=-1,i=this.moduleCount-1,n=7,o=0,a=this.moduleCount-1;0<a;a-=2)for(6==a&&a--;;){for(var s=0;s<2;s++)if(null==this.modules[i][a-s]){var h=!1;o<t.length&&(h=1==(t[o]>>>n&1)),v.getMask(e,i,a-s)&&(h=!h),this.modules[i][a-s]=h,-1==--n&&(o++,n=7)}if((i+=r)<0||this.moduleCount<=i){i-=r,r=-r;break}}}},h.PAD0=236,h.PAD1=17,h.createData=function(t,e,r){for(var i=p.getRSBlocks(t,e),n=new m,o=0;o<r.length;o++){var a=r[o];n.put(a.mode,4),n.put(a.getLength(),v.getLengthInBits(a.mode,t)),a.write(n)}var s=0;for(o=0;o<i.length;o++)s+=i[o].dataCount;if(n.getLengthInBits()>8*s)throw new Error("code length overflow. ("+n.getLengthInBits()+">"+8*s+")");for(n.getLengthInBits()+4<=8*s&&n.put(0,4);n.getLengthInBits()%8!=0;)n.putBit(!1);for(;!(n.getLengthInBits()>=8*s||(n.put(h.PAD0,8),n.getLengthInBits()>=8*s));)n.put(h.PAD1,8);return h.createBytes(n,i)},h.createBytes=function(t,e){for(var r=0,i=0,n=0,o=new Array(e.length),a=new Array(e.length),s=0;s<e.length;s++){var h=e[s].dataCount,l=e[s].totalCount-h;i=Math.max(i,h),n=Math.max(n,l),o[s]=new Array(h);for(var u=0;u<o[s].length;u++)o[s][u]=255&t.buffer[u+r];r+=h;var c=v.getErrorCorrectPolynomial(l),f=new w(o[s],c.getLength()-1).mod(c);a[s]=new Array(c.getLength()-1);for(u=0;u<a[s].length;u++){var d=u+f.getLength()-a[s].length;a[s][u]=0<=d?f.get(d):0}}var g=0;for(u=0;u<e.length;u++)g+=e[u].totalCount;var p=new Array(g),m=0;for(u=0;u<i;u++)for(s=0;s<e.length;s++)u<o[s].length&&(p[m++]=o[s][u]);for(u=0;u<n;u++)for(s=0;s<e.length;s++)u<a[s].length&&(p[m++]=a[s][u]);return p};for(var o={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},s={L:1,M:0,Q:3,H:2},i=0,n=1,a=2,l=3,u=4,c=5,f=6,d=7,v={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(t){for(var e=t<<10;0<=v.getBCHDigit(e)-v.getBCHDigit(v.G15);)e^=v.G15<<v.getBCHDigit(e)-v.getBCHDigit(v.G15);return(t<<10|e)^v.G15_MASK},getBCHTypeNumber:function(t){for(var e=t<<12;0<=v.getBCHDigit(e)-v.getBCHDigit(v.G18);)e^=v.G18<<v.getBCHDigit(e)-v.getBCHDigit(v.G18);return t<<12|e},getBCHDigit:function(t){for(var e=0;0!=t;)e++,t>>>=1;return e},getPatternPosition:function(t){return v.PATTERN_POSITION_TABLE[t-1]},getMask:function(t,e,r){switch(t){case i:return(e+r)%2==0;case n:return e%2==0;case a:return r%3==0;case l:return(e+r)%3==0;case u:return(Math.floor(e/2)+Math.floor(r/3))%2==0;case c:return e*r%2+e*r%3==0;case f:return(e*r%2+e*r%3)%2==0;case d:return(e*r%3+(e+r)%2)%2==0;default:throw new Error("bad maskPattern:"+t)}},getErrorCorrectPolynomial:function(t){for(var e=new w([1],0),r=0;r<t;r++)e=e.multiply(new w([1,g.gexp(r)],0));return e},getLengthInBits:function(t,e){if(1<=e&&e<10)switch(t){case o.MODE_NUMBER:return 10;case o.MODE_ALPHA_NUM:return 9;case o.MODE_8BIT_BYTE:case o.MODE_KANJI:return 8;default:throw new Error("mode:"+t)}else if(e<27)switch(t){case o.MODE_NUMBER:return 12;case o.MODE_ALPHA_NUM:return 11;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 10;default:throw new Error("mode:"+t)}else{if(!(e<41))throw new Error("type:"+e);switch(t){case o.MODE_NUMBER:return 14;case o.MODE_ALPHA_NUM:return 13;case o.MODE_8BIT_BYTE:return 16;case o.MODE_KANJI:return 12;default:throw new Error("mode:"+t)}}},getLostPoint:function(t){for(var e=t.getModuleCount(),r=0,i=0;i<e;i++)for(var n=0;n<e;n++){for(var o=0,a=t.isDark(i,n),s=-1;s<=1;s++)if(!(i+s<0||e<=i+s))for(var h=-1;h<=1;h++)n+h<0||e<=n+h||0==s&&0==h||a==t.isDark(i+s,n+h)&&o++;5<o&&(r+=3+o-5)}for(i=0;i<e-1;i++)for(n=0;n<e-1;n++){var l=0;t.isDark(i,n)&&l++,t.isDark(i+1,n)&&l++,t.isDark(i,n+1)&&l++,t.isDark(i+1,n+1)&&l++,0!=l&&4!=l||(r+=3)}for(i=0;i<e;i++)for(n=0;n<e-6;n++)t.isDark(i,n)&&!t.isDark(i,n+1)&&t.isDark(i,n+2)&&t.isDark(i,n+3)&&t.isDark(i,n+4)&&!t.isDark(i,n+5)&&t.isDark(i,n+6)&&(r+=40);for(n=0;n<e;n++)for(i=0;i<e-6;i++)t.isDark(i,n)&&!t.isDark(i+1,n)&&t.isDark(i+2,n)&&t.isDark(i+3,n)&&t.isDark(i+4,n)&&!t.isDark(i+5,n)&&t.isDark(i+6,n)&&(r+=40);var u=0;for(n=0;n<e;n++)for(i=0;i<e;i++)t.isDark(i,n)&&u++;return r+=10*(Math.abs(100*u/e/e-50)/5)}},g={glog:function(t){if(t<1)throw new Error("glog("+t+")");return g.LOG_TABLE[t]},gexp:function(t){for(;t<0;)t+=255;for(;256<=t;)t-=255;return g.EXP_TABLE[t]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},t=0;t<8;t++)g.EXP_TABLE[t]=1<<t;for(t=8;t<256;t++)g.EXP_TABLE[t]=g.EXP_TABLE[t-4]^g.EXP_TABLE[t-5]^g.EXP_TABLE[t-6]^g.EXP_TABLE[t-8];for(t=0;t<255;t++)g.LOG_TABLE[g.EXP_TABLE[t]]=t;function w(t,e){if(null==t.length)throw new Error(t.length+"/"+e);for(var r=0;r<t.length&&0==t[r];)r++;this.num=new Array(t.length-r+e);for(var i=0;i<t.length-r;i++)this.num[i]=t[i+r]}function p(t,e){this.totalCount=t,this.dataCount=e}function m(){this.buffer=[],this.length=0}w.prototype={get:function(t){return this.num[t]},getLength:function(){return this.num.length},multiply:function(t){for(var e=new Array(this.getLength()+t.getLength()-1),r=0;r<this.getLength();r++)for(var i=0;i<t.getLength();i++)e[r+i]^=g.gexp(g.glog(this.get(r))+g.glog(t.get(i)));return new w(e,0)},mod:function(t){if(this.getLength()-t.getLength()<0)return this;for(var e=g.glog(this.get(0))-g.glog(t.get(0)),r=new Array(this.getLength()),i=0;i<this.getLength();i++)r[i]=this.get(i);for(i=0;i<t.getLength();i++)r[i]^=g.gexp(g.glog(t.get(i))+e);return new w(r,0).mod(t)}},p.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],p.getRSBlocks=function(t,e){var r=p.getRsBlockTable(t,e);if(null==r)throw new Error("bad rs block @ typeNumber:"+t+"/errorCorrectLevel:"+e);for(var i=r.length/3,n=[],o=0;o<i;o++)for(var a=r[3*o+0],s=r[3*o+1],h=r[3*o+2],l=0;l<a;l++)n.push(new p(s,h));return n},p.getRsBlockTable=function(t,e){switch(e){case s.L:return p.RS_BLOCK_TABLE[4*(t-1)+0];case s.M:return p.RS_BLOCK_TABLE[4*(t-1)+1];case s.Q:return p.RS_BLOCK_TABLE[4*(t-1)+2];case s.H:return p.RS_BLOCK_TABLE[4*(t-1)+3];default:return}},m.prototype={get:function(t){var e=Math.floor(t/8);return 1==(this.buffer[e]>>>7-t%8&1)},put:function(t,e){for(var r=0;r<e;r++)this.putBit(1==(t>>>e-r-1&1))},getLengthInBits:function(){return this.length},putBit:function(t){var e=Math.floor(this.length/8);this.buffer.length<=e&&this.buffer.push(0),t&&(this.buffer[e]|=128>>>this.length%8),this.length++}};var _=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]];function C(){var t=!1,e=navigator.userAgent;if(/android/i.test(e)){t=!0;var r=e.toString().match(/android ([0-9]\.[0-9])/i);r&&r[1]&&(t=parseFloat(r[1]))}return t}var y=(e.prototype.draw=function(t){var e=this._htOption,r=this._el,i=t.getModuleCount();function n(t,e){var r=document.createElementNS("http://www.w3.org/2000/svg",t);for(var i in e)e.hasOwnProperty(i)&&r.setAttribute(i,e[i]);return r}Math.floor(e.width/i),Math.floor(e.height/i),this.clear();var o=n("svg",{viewBox:"0 0 "+String(i)+" "+String(i),width:"100%",height:"100%",fill:e.colorLight});o.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),r.appendChild(o),o.appendChild(n("rect",{fill:e.colorLight,width:"100%",height:"100%"})),o.appendChild(n("rect",{fill:e.colorDark,width:"1",height:"1",id:"template"}));for(var a=0;a<i;a++)for(var s=0;s<i;s++)if(t.isDark(a,s)){var h=n("use",{x:String(s),y:String(a)});h.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),o.appendChild(h)}},e.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},e);function e(t,e){this._el=t,this._htOption=e}var E="svg"===document.documentElement.tagName.toLowerCase()?y:"undefined"==typeof CanvasRenderingContext2D?(L.prototype.draw=function(t){for(var e=this._htOption,r=this._el,i=t.getModuleCount(),n=Math.floor(e.width/i),o=Math.floor(e.height/i),a=['<table style="border:0;border-collapse:collapse;">'],s=0;s<i;s++){a.push("<tr>");for(var h=0;h<i;h++)a.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+n+"px;height:"+o+"px;background-color:"+(t.isDark(s,h)?e.colorDark:e.colorLight)+';"></td>');a.push("</tr>")}a.push("</table>"),r.innerHTML=a.join("");var l=r.childNodes[0],u=(e.width-l.offsetWidth)/2,c=(e.height-l.offsetHeight)/2;0<u&&0<c&&(l.style.margin=c+"px "+u+"px")},L.prototype.clear=function(){this._el.innerHTML=""},L):function(){function t(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}if(this._android&&this._android<=2.1){var u=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(t,e,r,i,n,o,a,s,h){if("nodeName"in t&&/img/i.test(t.nodeName))for(var l=arguments.length-1;1<=l;l--)arguments[l]=arguments[l]*u;else void 0===s&&(e*=u,r*=u,i*=u,n*=u);c.apply(this,arguments)}}function e(t,e){this._bIsPainted=!1,this._android=C(),this._htOption=e,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=e.width,this._elCanvas.height=e.height,t.appendChild(this._elCanvas),this._el=t,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.alt="Scan me!",this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null}return e.prototype.draw=function(t){var e=this._elImage,r=this._oContext,i=this._htOption,n=t.getModuleCount(),o=i.width/n,a=i.height/n,s=Math.round(o),h=Math.round(a);e.style.display="none",this.clear();for(var l=0;l<n;l++)for(var u=0;u<n;u++){var c=t.isDark(l,u),f=u*o,d=l*a;r.strokeStyle=c?i.colorDark:i.colorLight,r.lineWidth=1,r.fillStyle=c?i.colorDark:i.colorLight,r.fillRect(f,d,o,a),r.strokeRect(Math.floor(f)+.5,Math.floor(d)+.5,s,h),r.strokeRect(Math.ceil(f)-.5,Math.ceil(d)-.5,s,h)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&function(t,e){var r=this;if(r._fFail=e,r._fSuccess=t,null===r._bSupportDataURI){function i(){r._bSupportDataURI=!1,r._fFail&&r._fFail.call(r)}var n=document.createElement("img");return n.onabort=i,n.onerror=i,n.onload=function(){r._bSupportDataURI=!0,r._fSuccess&&r._fSuccess.call(r)},void(n.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==")}!0===r._bSupportDataURI&&r._fSuccess?r._fSuccess.call(r):!1===r._bSupportDataURI&&r._fFail&&r._fFail.call(r)}.call(this,t)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(t){return t?Math.floor(1e3*t)/1e3:t},e}();function L(t,e){this._el=t,this._htOption=e}function A(t,e){for(var r=1,i=function(t){var e=encodeURI(t).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return e.length+(e.length!=t?3:0)}(t),n=0,o=_.length;n<=o;n++){var a=0;switch(e){case s.L:a=_[n][0];break;case s.M:a=_[n][1];break;case s.Q:a=_[n][2];break;case s.H:a=_[n][3]}if(i<=a)break;r++}if(_.length<r)throw new Error("Too long data");return r}(QRCode=function(t,e){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:s.H},"string"==typeof e&&(e={text:e}),e)for(var r in e)this._htOption[r]=e[r];"string"==typeof t&&(t=document.getElementById(t)),this._htOption.useSVG&&(E=y),this._android=C(),this._el=t,this._oQRCode=null,this._oDrawing=new E(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)}).prototype.makeCode=function(t){this._oQRCode=new h(A(t,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(t),this._oQRCode.make(),this._el.title=t,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||3<=this._android)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=s}(),"undefined"!=typeof module&&(module.exports=QRCode),function(r,o,a){var i,n,s,h=Array.prototype.indexOf,l=Object.assign,u=/MicroMessenger/i.test(navigator.userAgent),c=o.documentElement.clientWidth<=768,t=(o.images[0]||0).src||"",e=v("site")||v("Site")||o.title,f=v("title")||v("Title")||o.title,d=v("description")||v("Description")||"",g={url:location.href,origin:location.origin,source:e,title:f,description:d,image:t,imageSelector:a,weiboKey:"",wechatQrcodeTitle:"微信扫一扫：分享",wechatQrcodeHelper:"<p>微信里点“发现”，扫一下</p><p>二维码便可将本文分享至朋友圈。</p>",wechatQrcodeSize:100,sites:["weibo","qq","wechat","douban","qzone","linkedin","facebook","twitter","google"],mobileSites:[],disabled:[],initialized:!1},p={qzone:"http://sns.qzone.qq.com/cgi-bin/qzshare/cgi_qzshare_onekey?url={{URL}}&title={{TITLE}}&desc={{DESCRIPTION}}&summary={{SUMMARY}}&site={{SOURCE}}&pics={{IMAGE}}",qq:'http://connect.qq.com/widget/shareqq/index.html?url={{URL}}&title={{TITLE}}&source={{SOURCE}}&desc={{DESCRIPTION}}&pics={{IMAGE}}&summary="{{SUMMARY}}"',weibo:"https://service.weibo.com/share/share.php?url={{URL}}&title={{TITLE}}&pic={{IMAGE}}&appkey={{WEIBOKEY}}",wechat:"javascript:",douban:"http://shuo.douban.com/!service/share?href={{URL}}&name={{TITLE}}&text={{DESCRIPTION}}&image={{IMAGE}}&starid=0&aid=0&style=11",linkedin:"http://www.linkedin.com/shareArticle?mini=true&ro=true&title={{TITLE}}&url={{URL}}&summary={{SUMMARY}}&source={{SOURCE}}&armin=armin",facebook:"https://www.facebook.com/sharer/sharer.php?u={{URL}}",twitter:"https://twitter.com/intent/tweet?text={{TITLE}}&url={{URL}}&via={{ORIGIN}}",google:"https://plus.google.com/share?url={{URL}}"};function m(t){return(o.querySelectorAll||r.jQuery||r.Zepto||function(i){var n=[];return C(i.split(/\s*,\s*/),function(t){var e=t.match(/([#.])(\w+)/);if(null===e)throw Error("Supports only simple single #ID or .CLASS selector.");if(e[1]){var r=o.getElementById(e[2]);r&&n.push(r)}n=n.concat(w(i))}),n}).call(o,t)}function v(t){return(o.getElementsByName(t)[0]||0).content}function w(t,e,r){if(t.getElementsByClassName)return t.getElementsByClassName(e);var i=[],n=t.getElementsByTagName(r||"*");return e=" "+e+" ",C(n,function(t){0<=(" "+(t.className||"")+" ").indexOf(e)&&i.push(t)}),i}function _(t){var e=o.createElement("div");return e.innerHTML=t,e.childNodes}function C(t,e){var r=t.length;if(r===a){for(var i in t)if(t.hasOwnProperty(i)&&!1===e.call(t[i],t[i],i))break}else for(var n=0;n<r&&!1!==e.call(t[n],t[n],n);n++);}r.socialShare=function(t,e){(t="string"==typeof t?m(t):t).length===a&&(t=[t]),C(t,function(t){t.initialized||function(t,e){var r=function(){var t=arguments;if(l)return l.apply(null,t);var r={};return C(t,function(t){C(t,function(t,e){r[e]=t})}),t[0]=r}({},g,e||{},function(t){if(t.dataset)return JSON.parse(JSON.stringify(t.dataset));var r={};if(t.hasAttributes())return C(t.attributes,function(t){var e=t.name;if(0!==e.indexOf("data-"))return!0;e=e.replace(/^data-/i,"").replace(/-(\w)/g,function(t,e){return e.toUpperCase()}),r[e]=t.value}),r;return{}}(t));r.imageSelector&&(r.image=m(r.imageSelector).map(function(t){return t.src}).join("||"));(function(t,e){if(e&&"string"==typeof e){var r=(t.className+" "+e).split(/\s+/),i=" ";C(r,function(t){i.indexOf(" "+t+" ")<0&&(i+=t+" ")}),t.className=i.slice(1,-1)}})(t,"share-component social-share"),function(i,n){var t=function(t){t.mobileSites.length||(t.mobileSites=t.sites);var e=(c?t.mobileSites:t.sites).slice(0),r=t.disabled;"string"==typeof e&&(e=e.split(/\s*,\s*/));"string"==typeof r&&(r=r.split(/\s*,\s*/));u&&r.push("wechat");return r.length&&C(r,function(t){e.splice(function(t,e,r){var i;if(e){if(h)return h.call(e,t,r);for(i=e.length,r=r?r<0?Math.max(0,i+r):r:0;r<i;r++)if(r in e&&e[r]===t)return r}return-1}(t,e),1)}),e}(n),o="prepend"==n.mode;C(o?t.reverse():t,function(t){var e=function(n,o){o.summary||(o.summary=o.description);return p[n].replace(/\{\{(\w)(\w*)\}\}/g,function(t,e,r){var i=n+e+r.toLowerCase();return r=(e+r).toLowerCase(),encodeURIComponent((o[i]===a?o[r]:o[i])||"")})}(t,n),r=n.initialized?w(i,"icon-"+t):_('<a class="social-share-icon icon-'+t+'"></a>');if(!r.length)return!0;r[0].href=e,"wechat"===t?r[0].tabindex=-1:r[0].target="_blank",n.initialized||(o?i.insertBefore(r[0],i.firstChild):i.appendChild(r[0]))})}(t,r),function(t,e){var r=w(t,"icon-wechat","a");if(0===r.length)return;var i=_('<div class="wechat-qrcode"><h4>'+e.wechatQrcodeTitle+'</h4><div class="qrcode"></div><div class="help">'+e.wechatQrcodeHelper+"</div></div>"),n=w(i[0],"qrcode","div");new QRCode(n[0],{text:e.url,width:e.wechatQrcodeSize,height:e.wechatQrcodeSize}),r[0].appendChild(i[0])}(t,r),t.initialized=!0}(t,e)})},i=function(){socialShare(".social-share, .share-component")},s=o[n="addEventListener"]?"":"on",~o.readyState.indexOf("m")?i():"load DOMContentLoaded readystatechange".replace(/\w+/g,function(t,e){(e?o:r)[s?"attachEvent":n](s+t,function(){i&&(e<6||~o.readyState.indexOf("m"))&&(i(),i=0)},!1)})}(window,document);

$( document ).ready(function() {
	socialShare('.bdsharebuttonbox');
});

