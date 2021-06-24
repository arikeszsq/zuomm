var imgLiquid=imgLiquid||{VER:"0.9.944"};imgLiquid.bgs_Available=!1,imgLiquid.bgs_CheckRunned=!1,imgLiquid.injectCss=".imgLiquid img {visibility:hidden}",function(i){function t(){if(!imgLiquid.bgs_CheckRunned){imgLiquid.bgs_CheckRunned=!0;var t=i('<span style="background-size:cover" />');i("body").append(t),!function(){var i=t[0];if(i&&window.getComputedStyle){var e=window.getComputedStyle(i,null);e&&e.backgroundSize&&(imgLiquid.bgs_Available="cover"===e.backgroundSize)}}(),t.remove()}}i.fn.extend({imgLiquid:function(e){this.defaults={fill:!0,verticalAlign:"center",horizontalAlign:"center",useBackgroundSize:!0,useDataHtmlAttr:!0,responsive:!0,delay:0,fadeInTime:0,removeBoxBackground:!0,hardPixels:!0,responsiveCheckTime:500,timecheckvisibility:500,onStart:null,onFinish:null,onItemStart:null,onItemFinish:null,onItemError:null},t();var a=this;return this.options=e,this.settings=i.extend({},this.defaults,this.options),this.settings.onStart&&this.settings.onStart(),this.each(function(t){function e(){-1===u.css("background-image").indexOf(encodeURI(c.attr("src")))&&u.css({"background-image":'url("'+encodeURI(c.attr("src"))+'")'}),u.css({"background-size":g.fill?"cover":"contain","background-position":(g.horizontalAlign+" "+g.verticalAlign).toLowerCase(),"background-repeat":"no-repeat"}),i("a:first",u).css({display:"block",width:"100%",height:"100%"}),i("img",u).css({display:"none"}),g.onItemFinish&&g.onItemFinish(t,u,c),u.addClass("imgLiquid_bgSize"),u.addClass("imgLiquid_ready"),l()}function d(){function e(){c.data("imgLiquid_error")||c.data("imgLiquid_loaded")||c.data("imgLiquid_oldProcessed")||(u.is(":visible")&&c[0].complete&&c[0].width>0&&c[0].height>0?(c.data("imgLiquid_loaded",!0),setTimeout(r,t*g.delay)):setTimeout(e,g.timecheckvisibility))}if(c.data("oldSrc")&&c.data("oldSrc")!==c.attr("src")){var a=c.clone().removeAttr("style");return a.data("imgLiquid_settings",c.data("imgLiquid_settings")),c.parent().prepend(a),c.remove(),c=a,c[0].width=0,setTimeout(d,10),void 0}return c.data("imgLiquid_oldProcessed")?(r(),void 0):(c.data("imgLiquid_oldProcessed",!1),c.data("oldSrc",c.attr("src")),i("img:not(:first)",u).css("display","none"),u.css({overflow:"hidden"}),c.fadeTo(0,0).removeAttr("width").removeAttr("height").css({visibility:"visible","max-width":"none","max-height":"none",width:"auto",height:"auto",display:"block"}),c.on("error",n),c[0].onerror=n,e(),o(),void 0)}function o(){(g.responsive||c.data("imgLiquid_oldProcessed"))&&c.data("imgLiquid_settings")&&(g=c.data("imgLiquid_settings"),u.actualSize=u.get(0).offsetWidth+u.get(0).offsetHeight/1e4,u.sizeOld&&u.actualSize!==u.sizeOld&&r(),u.sizeOld=u.actualSize,setTimeout(o,g.responsiveCheckTime))}function n(){c.data("imgLiquid_error",!0),u.addClass("imgLiquid_error"),g.onItemError&&g.onItemError(t,u,c),l()}function s(){var i={};if(a.settings.useDataHtmlAttr){var t=u.attr("data-imgLiquid-fill"),e=u.attr("data-imgLiquid-horizontalAlign"),d=u.attr("data-imgLiquid-verticalAlign");("true"===t||"false"===t)&&(i.fill=Boolean("true"===t)),void 0===e||"left"!==e&&"center"!==e&&"right"!==e&&-1===e.indexOf("%")||(i.horizontalAlign=e),void 0===d||"top"!==d&&"bottom"!==d&&"center"!==d&&-1===d.indexOf("%")||(i.verticalAlign=d)}return imgLiquid.isIE&&a.settings.ieFadeInDisabled&&(i.fadeInTime=0),i}function r(){var i,e,a,d,o,n,s,r,m=0,h=0,f=u.width(),v=u.height();void 0===c.data("owidth")&&c.data("owidth",c[0].width),void 0===c.data("oheight")&&c.data("oheight",c[0].height),g.fill===f/v>=c.data("owidth")/c.data("oheight")?(i="100%",e="auto",a=Math.floor(f),d=Math.floor(f*(c.data("oheight")/c.data("owidth")))):(i="auto",e="100%",a=Math.floor(v*(c.data("owidth")/c.data("oheight"))),d=Math.floor(v)),o=g.horizontalAlign.toLowerCase(),s=f-a,"left"===o&&(h=0),"center"===o&&(h=.5*s),"right"===o&&(h=s),-1!==o.indexOf("%")&&(o=parseInt(o.replace("%",""),10),o>0&&(h=.01*s*o)),n=g.verticalAlign.toLowerCase(),r=v-d,"left"===n&&(m=0),"center"===n&&(m=.5*r),"bottom"===n&&(m=r),-1!==n.indexOf("%")&&(n=parseInt(n.replace("%",""),10),n>0&&(m=.01*r*n)),g.hardPixels&&(i=a,e=d),c.css({width:i,height:e,"margin-left":Math.floor(h),"margin-top":Math.floor(m)}),c.data("imgLiquid_oldProcessed")||(c.fadeTo(g.fadeInTime,1),c.data("imgLiquid_oldProcessed",!0),g.removeBoxBackground&&u.css("background-image","none"),u.addClass("imgLiquid_nobgSize"),u.addClass("imgLiquid_ready")),g.onItemFinish&&g.onItemFinish(t,u,c),l()}function l(){t===a.length-1&&a.settings.onFinish&&a.settings.onFinish()}var g=a.settings,u=i(this),c=i("img:first",u);return c.length?(c.data("imgLiquid_settings")?(u.removeClass("imgLiquid_error").removeClass("imgLiquid_ready"),g=i.extend({},c.data("imgLiquid_settings"),a.options)):g=i.extend({},a.settings,s()),c.data("imgLiquid_settings",g),g.onItemStart&&g.onItemStart(t,u,c),imgLiquid.bgs_Available&&g.useBackgroundSize?e():d(),void 0):(n(),void 0)})}})}(jQuery),!function(){var i=imgLiquid.injectCss,t=document.getElementsByTagName("head")[0],e=document.createElement("style");e.type="text/css",e.styleSheet?e.styleSheet.cssText=i:e.appendChild(document.createTextNode(i)),t.appendChild(e)}();
$(".img-cover").imgLiquid({fill:true});
$(".img-cover").imgLiquid({fill:true});
$(".list-pro1 .img").imgLiquid({fill:false});
$(".honor-list-row a").imgLiquid({fill:false});



if (!Array.prototype.filter)
{
    Array.prototype.filter = function(fun /*, thisp */)
    {
        "use strict";

        if (this === void 0 || this === null)
            throw new TypeError();

        var t = Object(this);
        var len = t.length >>> 0;
        if (typeof fun !== "function")
            throw new TypeError();

        var res = [];
        var thisp = arguments[1];
        for (var i = 0; i < len; i++)
        {
            if (i in t)
            {
                var val = t[i]; // in case fun mutates this
                if (fun.call(thisp, val, i, t))
                    res.push(val);
            }
        }

        return res;
    };
}
if (!Array.prototype.indexOf)
{
    Array.prototype.indexOf = function(elt /*, from*/)
    {
        var len = this.length >>> 0;

        var from = Number(arguments[1]) || 0;
        from = (from < 0)
            ? Math.ceil(from)
            : Math.floor(from);
        if (from < 0)
            from += len;

        for (; from < len; from++)
        {
            if (from in this &&
                this[from] === elt)
                return from;
        }
        return -1;
    };
}
$('#news_slider').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});
$('.cert_slider').slick({
    dots: false,
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    cssEase: 'linear',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        }
    ],
    speed: 10000,
    autoplaySpeed: 1,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});



function Tab(tit, con, fun){
    var tab_hd = $(tit);
    var tab_bd = $(con);
    tab_bd.hide();
    tab_hd.eq(0).addClass("on").show();
    tab_bd.eq(0).show();

    tab_hd.click(function() {
        tab_hd.removeClass("on");
        $(this).addClass("on");
        tab_bd.hide();
        var activeTab = $(this).attr("tab-target");
        $('[tab-content='+activeTab+']').fadeIn();
        if(fun)fun();
        return false;
    });
}
Tab('#news_tit a', '.news_con')







;(function($){
    $.fn.extend({
        popIframe: function(options) {
            var defaults = {
                close : '.close-pop',
                afterClose: $.noop()
            }
            var options =  $.extend(defaults, options);
            return this.each(function() {
                var o = options;
                var target = $(this).data('target');
                var iframeName = $(this).attr('target');
                $(this).click(function(event) {
                    $(target).addClass('show-pop');
                    $('.mask-p').show();
                });
                $(options.close).click(function(event) {
                    event.preventDefault();
                    closeIframe();
                    $('.mask-p').hide();
                    $(target).removeClass('show-pop');
                    callback();
                    return false;
                });

                function closeIframe(){
                    $('iframe[name='+iframeName+']').attr('src','');
                }
                function callback(){
                    if (options.afterClose && typeof(options.afterClose) == "function"){
                        options.afterClose();
                    }
                }
                $(target).click(function(e){
                    var e = $(e.target);
                    var pop_id = '#' + e[0].id;

                    if(pop_id == target){
                        closeIframe();
                        $('.mask-p').hide();
                        $(target).removeClass('show-pop');
                        callback();
                    }

                })

            });
        }
    });
})(jQuery);


$('.list_instrument a').popIframe();

$('.slider1').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

$('.act-banner').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});
$('.slider2').slick({
    dots: false,
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    centerPadding: 0,
    centerMode:true,
    cssEase: 'linear',
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 993,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 768,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

/*$('.sub-con').slick({
    dots: false,
    arrows: true,
    autoplay: false,
    slidesToShow: 4,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});*/

$('#slider-nav1 em').text(1);
$('#slider-nav1 span').text( $('#slider-event .item').length );

/*function ellipsis( obj , length ){
  var str = '';
  obj.each(function(){
    if( obj.text().length > length ){
      str = obj.html().substring(0 , length)
      obj.html( str );
    }else{
      str = obj.html()
      obj.html( str );
    }
  });
}
$('#slider-event .item').each(function(index, el) {
	var span = $(this).find('.txt')
	ellipsis( span , 100 );
});*/



$('#slider-event').slick({
    dots: false,
    arrows: false,
    autoplay: false,
    slidesToScroll: 1,
    slidesToShow: 3,
    adaptiveHeight: true,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

$('.prev1').click(function(){
    $('#slider-event').slick('slickPrev');
    return false;
});

$('.next1').click(function(){
    $('#slider-event').slick('slickNext');
    return false;
});
$('#slider-event').on('afterChange', function(event, slick, currentSlide, nextSlide){
    $('#slider-nav1 em').text(currentSlide+1);
});



$('.case-row2 .slider3').slick({
    arrows: true,
    autoplay: false,
    useTransform: false,
    slidesToScroll: 1,
    cssEase: 'linear',
    centerPadding: 0,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 900,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});


$('.slider-honor1:even').slick({
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 4,

    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                centerMode:true,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

$('.slider-honor1:odd').slick({
    arrows: true,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 8,

    responsive: [
        {
            breakpoint: 1400,
            settings: {
                slidesToShow: 8,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 1200,
            settings: {
                slidesToShow: 6,
                slidesToScroll: 1
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 2,
                centerMode:true,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

$('.slider-honor1:even').addClass('h-even')
$('.slider-honor1:odd').addClass('h-odd')
/*
$('.slider-honor').slick({
  arrows: true,
  autoplay: true,
  slidesToScroll: 1,
  slidesToShow: 4,

  responsive: [
    {
      breakpoint: 769,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 640,
      settings: {
        slidesToShow: 1,
        centerMode:true,
        slidesToScroll: 1
      }
    }
  ],
  speed: 300,
  customPaging: function (slider, i) {
      return '<a tabindex="0">' + (i + 1) + '</a>';
  }
});*/

/*;(function(){
	var video = $('#video');

	function popVideo(link){
		$('body').on('click', link, function(){
			video.attr('src',$(this).attr('data-src'));
			video.get(0).load();
			$('#pop-video2').show();
			video.get(0).play();
			return false;
		});
	}

	$('.pop-video2 .x-btn').on('click', function(){
		hideVideo();
	});

	$('.pop-video2').on('click', function(){
		hideVideo();
		return false;
	});



	function hideVideo(){
		$('#pop-video2').hide();
		$('#video').attr('src','about:blank');
	}

	if( $('.m_header').is(':visible') ){

		popVideo('.slider4 .item a')
		popVideo('.video-side li a')
	}

})();
*/


$('.slider4-slide').slick({
    arrows: true,
    autoplay: false,
    slidesToScroll: 1,
    cssEase: 'linear',
    slidesToShow: 4,
    responsive: [
        {
            breakpoint: 1500,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3
            }
        },
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                infinite: true,
                slidesToShow: 1,
                // focusOnSelect:true,
                // centerMode:true,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});

$('.list-case').slick({
    arrows: false,
    autoplay: true,
    slidesToScroll: 1,
    slidesToShow: 3,
    responsive: [
        {
            breakpoint: 769,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 640,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ],
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});
$('#prev2').click(function(){
    $('.list-case').slick('slickPrev');
    return false;
});

$('#next2').click(function(){
    $('.list-case').slick('slickNext');
    return false;
})


// 侧导航
$('.side-nav > li').each(function(){
    var $len = $(this).find('.sub-nv').length;
    if( $len > 0 ){
        $(this).addClass('has-sub');
    }
});

$('.side-nav .has-sub.on').addClass('opening').find('.sub-nv').show();

$('.side-nav .has-sub > a').click(function(){
    var $nav = $(this).next('.sub-nv');
    if($nav.is(":visible")){
        $(this).parent().removeClass('opening');
        $nav.slideUp();
        return false;
    }else {
        $(this).parent().addClass('opening').siblings().removeClass("opening").find('.sub-nv').slideUp();
        $nav.slideDown();
        return false;
    }
});




function autoHeightAnimate(element, time){
    var curHeight = element.height(),
        autoHeight = element.css('height', 'auto').height();
    element.height(curHeight);
    element.stop().animate({ height: autoHeight }, parseInt(time));
}
$(".list-faq li .hd").click(function(){
    var bd = $(this).next('.bd');
    if( bd.height() == 34 ){
        $(".list-faq li .bd").stop().animate({ height: 34 }, 300);
        $(".list-faq li .hd").removeClass('open');
        autoHeightAnimate(bd, 300);
        $(this).addClass('open');
        $(".list-faq li .hd a i").text('展开');
        $(this).find('a').find('i').text('隐藏');
    }else{
        $(".list-faq li .bd").stop().animate({ height: 34 }, 300);
        $(this).find('a').find('i').text('展开');
        $(".list-faq li .hd").removeClass('open');
    }
    return false;
});


/*$('.wa-list .hd').click(function(){
    var txt = $(this).next('.bd');
    if(!txt.is(":visible")){
        $('.wa-list.bd').slideUp();
        $('.wa-list .hd').removeClass('ok');
        txt.stop().slideDown();
        $(this).addClass('ok');
    }else{
        txt.stop().slideUp();
        $(this).removeClass('ok')
    }
});

$('.wa-list li:first .hd').click();*/


/**
 * @author fsjohnuang
 * @version 1.2.0
 * @description 纯前端图片预览组件
 */
;(function(exports){
    // 工具
    var utils = {};
    utils.trim = function(str){
        return /^\s*(\S*)\s*$/.exec(str)[1];
    };
    utils.preset = function(fn){
        var presetArgs = [].slice.call(arguments, 1);
        return function(){
            fn.apply(null, presetArgs.concat([].slice.call(arguments)));
        };
    };
    utils.extend = function(){
        var ret = {};
        for (var i = 0, len = arguments.length, arg; i < len; ++i){
            if (arg = arguments[i]){
                for (var p in arg){
                    if (!ret.hasOwnProperty(p)){
                        ret[p] = arg[p];
                    }
                }
            }
        }
        return ret;
    };

    /**
     配置项
     **/
    var imgCls = 'data-preview-img',
        FILTER_NAME= 'DXImageTransform.Microsoft.AlphaImageLoader',
        FILTER= ' progid:' + FILTER_NAME + '(sizingMethod="scale")';
    var MIME_EXT_MAP = {
        'jpeg': ['image/jpeg'],
        'jpg': ['image/jpeg'],
        'gif': ['image/gif'],
        'png': ['image/png', 'image/x-png'],
        'tiff': ['image/tiff'],
        'bmp': ['image/x-ms-bmp', 'image/bmp']
    };

    /**
     特征检测
     v1.0.1 修复document.body未生成时，特征检测报错的bug
     **/
    var useFilter = !!(document.documentElement.filters && document.documentElement.filters.item);
    var isIE11 = document.documentMode === 11;

    /**
     兼容性处理
     **/
    var on, off;
    //v1.0.1 修复document.body未生成时，特征检测报错的bug
    if (document.documentElement.addEventListener){
        on = function(el, evt, fn){
            el.addEventListener(evt, fn);
        };
        off = function(el, evt, fn){
            el.removeEventListener.apply(el, Array.prototype.slice.call(arguments,1));
        };
    }
    else{
        on = function(el, evt, fn){
            el.attachEvent('on' + evt, fn);
        };
        off = function(el, evt, fn){
            var args = Array.prototype.slice.call(arguments,1);
            args[0] = 'on' + args[0];
            el.detachEvent.apply(el, args);
        };
    }
    var URL = (function(URL){
        if (!URL) return;

        return {
            createObjectURL: function(blob){
                return URL.createObjectURL(blob);
            },
            revokeObjectURL: function(url){
                URL.revokeObjectURL(url);
            }
        };
    }(window.webkitURL || window.URL));

    /**
     主逻辑
     **/
    /** 现代浏览器获取图片地址
     * @param {File} file 文件对象
     * @param {Function} cb({DOMString} dataURIScheme) 回调函数
     */
    var readAsDataURL = function(file, cb/*({DOMString} dataURIScheme)*/){
        // 空文件则返回空字符串
        if (!file) return cb('');

        if (!!URL){
            // 使用window.URL.createObjectURL提高性能
            cb(URL.createObjectURL(file));
        }
        else if (!window.FileReader){
            // ff3.0不支持FileReader
            cb(file.readAsDataURL());
        }
        else{
            var fr = new window.FileReader();
            on(fr, 'load', function(e){
                cb(e.target.result);
            });
            fr.readAsDataURL(file);
        }
    };
    /** IE10以下获取图片地址
     * @param {HTMLFileElement} fileEl 文件上传元素
     * @return {DOMString} url
     */
    var readPath = function(fileEl){
        var src = fileEl.value || '';
        // IE11下，文档模式小于10无法通过value、getAttribute和outerHTML获取input[type=file]的真实路径
        if (src.search(/\w:\\fakepath/) === 0){
            fileEl.select();
            src = document.selection.createRangeCollection()[0].htmlText;
        }
        return src;
    };
    /** 清理预览图的渲染
     * @param {HTMLElement} previewEl 预览图区域元素
     * @param {Boolean} [isRemove=false] 是否将预览图IMG元素从DOM树移除
     */
    var clearRender = function(previewEl, isRemove){
        var img = previewEl.getElementsByClassName(imgCls)[0];
        if (!img) return null;

        // 释放window.URL.createObjectURL生成的链接所独占的资源
        URL && URL.revokeObjectURL(img.src);
        if (isRemove){
            // IE10+只有removeNode没有remove方法
            img[img.remove && 'remove' || 'removeNode'].call(img);
            img = null;
        }

        return img;
    };
    /** 检查文件后缀是否与file的accept属性值匹配，并触发事件
     * @param {PlainObject} _ Preview实例内置配置项
     * @param {DOCString} src 文件路径
     * @param {Function} isExpectedMIME 检查文件后缀的函数
     * @param {Boolean} 是否渲染预览图
     */
    var isRender = function(_, src, isExpectedMIME){
        var ext = '';
        var lastFullStopIndex = src.lastIndexOf('.');
        if (lastFullStopIndex > 0)
            ext = src.substring(lastFullStopIndex + 1);
        var ret = _.opts[isExpectedMIME(MIME_EXT_MAP[ext])?'onlegal':'onillegal']
            .call(_.self, src, ext, _.accept);
        return ret;
    };
    var render = function(){
        render[useFilter ? 'legacy' : 'modern'].apply(null, arguments);
    };
    /** 现代浏览器显示预览图
     * v1.0.2修复src为undefined或null时图片显示出错的bug
     * @param {PlainObject} _ Preview实例内置配置项
     * @param {DOMString} src 图片地址
     * @param {HTMLElement} previewEl 预览图元素
     * @param {Function} isExpectedMIME 文件后缀检测函数
     */
    render['modern'] = function(_, src, previewEl, isExpectedMIME){
        var img = clearRender(previewEl, !src);
        if (src){
            if (isRender(_, _.fileEl.files[0].name, isExpectedMIME)){
                if (!img){
                    img = new Image();
                    img.className = imgCls;
                    img.style.width = previewEl.offsetWidth + 'px';
                    img.style.height = previewEl.offsetHeight + 'px';
                    previewEl.appendChild(img);
                }
                img.src = src;
            }
        }
    };
    /** IE10以下显示预览图
     * @param {PlainObject} _ Preview实例内置配置项
     * @param {DOMString} src 图片地址
     * @param {HTMLElement} previewEl 预览图元素
     * @param {Function} isExpectedMIME 文件后缀检测函数
     */
    render['legacy'] = function(_, src, previewEl, isExpectedMIME){
        if (isRender(_, src, isExpectedMIME))
            previewEl.filters.item(FILTER_NAME).src = src;
    }
    var exec= function(){
        exec[useFilter ? 'legacy' : 'modern'].apply(null, arguments);
    };
    /** 现代浏览器执行预览操作
     * @param {PlainObject} _ Preview实例内置配置项
     * @param {HTMLFileElement} fileEl 文件上传元素
     * @param {HTMLElement} previewEl 预览图元素
     * @param {Function} isExpectedMIME 文件后缀检测函数
     */
    exec['modern'] = function(_, fileEl, previewEl, isExpectedMIME){
        readAsDataURL(fileEl.files[0],
            utils.preset(function(_, url){
                render(_, url, previewEl, isExpectedMIME);
            }, _));
    };
    /** IE10以下执行预览操作
     * @param {PlainObject} _ Preview实例内置配置项
     * @param {HTMLFileElement} fileEl 文件上传元素
     * @param {HTMLElement} previewEl 预览图元素
     * @param {Function} isExpectedMIME 文件后缀检测函数
     */
    exec['legacy'] = function(_, fileEl, previewEl, isExpectedMIME){
        var url = readPath(fileEl);
        render(_, url, previewEl, isExpectedMIME);
    };
    /** 重置预览图渲染
     * @param {HTMLElement} 预览图区域元素
     */
    var resetRender = function(previewEl){
        if (useFilter){
            // 滤镜AlphaImageLoader的src为无效路径时会抛出Error
            // 因此需要重置滤镜
            previewEl.style.filter = previewEl.style.filter.replace(FILTER,'');
            setTimeout(function(){
                previewEl.style.filter += FILTER;
            }, 0);
        }
        else{
            clearRender(previewEl, true);
        }
    };
    var frm4Reset;
    /** 重置input[type=file]元素的value值
     * @param {HTMLFileElement} 文件上传元素
     */
    var resetVal = function(fileEl){
        if (document.documentMode && document.documentMode < 11){
            // IE10及以下版本无法通过js修改value
            // 需要通过附加到非渲染的form元素实现重置
            var p = fileEl.parentNode, n = fileEl.nextSibling;
            frm4Reset = frm4Reset || document.createElement('form');
            frm4Reset.appendChild(fileEl);
            frm4Reset.reset();
            p.insertBefore(fileEl, n);
        }
        else{
            fileEl.value = '';
        }
    };

    /** 构造图片预览组件
     * 参数的位置可互换
     * @param {HTMLFileElement} fileEl 文件上传元素
     * @param {HTMLElement} previewEl 预览区域元素，建议使用div
     * @param {PlainObject} opts 配置项
     */
    var pv = exports.Preview = function(arg1, arg2, opts){
        if (2 > arguments.length) throw Error("Failed to execute 'Preview': 2 over arguments required, but only " + arguments.length + " present");
        if (!(this instanceof pv)) return new pv(arg1, arg2);

        // 私有属性, 建议使用者不要随便修改
        var _ = this._ = {};
        _.self = this;
        for (var i = 0, arg; i < 2 && (arg = arguments[i++]);){
            if (arg.nodeName === 'INPUT' && arg.type === 'file')
                _.fileEl = arg;
            else
                _.previewEl = arg;
        }
        if (!_.fileEl) throw Error("Failed to execute 'Preview': HTMLInputElement[type=file] required, but there is no one present");

        _.opts = utils.extend(opts, pv.defaults);
        // 将onlegal和onillegal转为函数
        var origLegal, origIllegal;
        if (typeof _.opts.onlegal !== 'function'){
            origLegal = _.opts.onlegal;
            _.opts.onlegal = function(){
                return origLegal;
            };
        }
        if (typeof _.opts.onillegal !== 'function'){
            origIllegal = _.opts.onillegal;
            _.opts.onillegal = function(){
                return origIllegal;
            };
        }

        if (useFilter)
            _.previewEl.style.filter += FILTER;

        // v1.2.0文件后缀校验函数
        var isExpectedMIME = (function(accept){
            // 正则化, 将形如image/*,image/jpg正则化为image/[^\\u002c]+,image/jpg
            accept = accept.replace(/\*/g, function(m){
                return '[^\\u002c]+'; // 使用逗号的unicode字符编码,以便后面以逗号,作为分隔符
            });
            var acceptMIMEs = accept.split(/\s*,\s*/)
                , rAcceptMIMEs = [];
            for (var i = 0, am; am = acceptMIMEs[i++];)
                rAcceptMIMEs.push(RegExp(am));

            /*
             * @param {DOMString | Array} mimes input[type=file]元素上传文件的MIME类型
             */
            return function(mimes){
                mimes = [].concat(mimes);
                for (var i = 0, r; r = rAcceptMIMEs[i++];){
                    for (var j = 0, m; m = mimes[j++];){
                        if (r.test(m)) return true;
                    }
                }
                return false;
            };
        }(_.accept = _.fileEl.accept || 'image/*'));

        on(_.fileEl, 'change', function(){
            exec(_, _.fileEl, _.previewEl, isExpectedMIME);
        });
    };

    /** 重置图片预览组件
     */
    pv.prototype.reset = function(){
        var _ = this._;
        resetVal(_.fileEl);
        // IE11修改fileEl.value后会触发change事件，因此不用重置渲染
        isIE11 || resetRender(_.previewEl);
    };

    /** 默认配置
     */
    pv.defaults = {
        onlegal: true,
        onillegal: false
    };
}(window));

var get = function(id){
    return document.getElementById(id);
};
Preview.defaults.onlegal = false;
Preview.defaults.onillegal = true;

;(function(){

    var cur = 2;
    function preview(){

        if( $('.preview').length ){

            $('.up-load-list').each(function(index, el) {
                index+=1;
                var total =$(this).find('label').length;
                for(var i = 1; i <= total; i++){
                    new Preview(get('inp'+index+'-'+i), get('pv'+index+'-'+i), {
                        onlegal: function(path, ext, accept){
                            return true;
                        },
                        onillegal: false
                    });
                }
            });


            /*			var total = $('.up-load-list label').length;
                        for(var i = 1; i <= total; i++){
                             new Preview(get('inp'+i), get(id+i), {
                                   onlegal: function(path, ext, accept){
                                      return true;
                                  },
                                  onillegal: false
                            });
                        }*/

        }



    }
    preview();
    hideIco();

    function hideIco(){
        $('.up-load-list input').change(function(event) {
            var label = $(this).parents('label');
            if( $(this).val() != ''){
                label.addClass('hide-ico')
            }else{
                label.removeClass('hide-ico')
            }
        });
    }

    $('#add-preview').click(function(event) {
        var temp = $('#input-temp').text()
        $(temp).insertBefore('#add-preview-dd');
        $('.preview').each(function(index, el) {
            index++;
            $(this).attr('id', 'pv1-'+index);
            $(this).find("input").attr('id', 'inp1-'+index);
        });
        preview();
        hideIco();
    });

    ;(function(){
        var i = 4;
        $('#add-preview-case').click(function(event) {
            var temp = $('#input-temp-case').text()
            $(temp).insertBefore('#add-preview-dd-case');
            $('#up-load-case .preview').each(function(index, el) {
                index++;
                $(this).attr('id', 'pv1'+'-'+index);
                $(this).find("input").attr('id', 'inp1'+'-'+index);
            });
            $('#up-load-case dd').slice(-2).find('s').text(i);
            i++;
            preview();
            hideIco();
        });
    })();


    ;(function(){
        var i = 2;
        $('#add-preview-pro').click(function(event) {
            var temp = $('#input-temp-pro').text()
            $(temp).insertBefore('#add-preview-dd-pro');
            $('#up-load-pro .preview').each(function(index, el) {
                index++;
                $(this).attr('id', 'pv2'+'-'+index);
                $(this).find("input").attr('id', 'inp2'+'-'+index);
            });
            $('#up-load-pro dd').slice(-2).find('s').text(i);
            i++;
            preview();
            hideIco();
        });
    })();


    function setDatePicker(){
        if($.fn.datepicker){

            $('[data-toggle="datepicker"]').datepicker({
                inline: true,
                language: 'zh-CN',
                format: 'yyyy/mm/dd',
                autoHide:true
            });
        }
    }

    setDatePicker();


    $(document).on('click','.del-me', function(){
        $(this).parents('dd').remove();
        return false;
    })


    $('#add-more-exp').click(function(event) {
        var temp = $('#work-exp-temp').text()
        $(temp).insertAfter('.work-experience:first');

        setDatePicker();
        return false;
    });



    $('#add-more-edu').click(function(event) {
        var temp = $('#edu-exp-temp').text()
        $(temp).insertAfter('.edu-experience:first');
        setDatePicker();
        return false;
    });

})();



function lxfEndtime(){
    $(".lxftime").each(function(){
        var lxfday=$(this).attr("lxfday");
        var dateStr = $(this).attr("endtime");
        var a=dateStr.split(" ");
        var d=a[0].split("-");
        var t=a[1].split(":");
        // var endtime = new Date($(this).attr("endtime")).getTime();
        var endtime = new Date(d[0],(d[1]-1),d[2],t[0],t[1],t[2]).getTime();
        var nowtime = new Date().getTime();
        var youtime = endtime-nowtime;
        var seconds = youtime/1000;
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        var CDay= days ;
        var CHour= hours % 24;
        var CMinute= minutes % 60;
        var CSecond= Math.floor(seconds%60);
        if(endtime<=nowtime){
            $(this).html("活动已经开始").addClass('over-time');
            $('.btn1').addClass('begin').removeAttr('disabled')
        }else{
            if($(this).attr("lxfday")=="yes"){
                $(this).html("<span>"+CHour+"</span>\u65F6<span>"+CMinute+"</span>\u5206<span>"+CSecond+"</span>\u79D2");
            }else{
                $(this).html("<div class='time-row'><span>"+days+"</span><em>\u5929</em></div><i>:</i><div class='time-row'><span>"+CHour+"</span><em>\u65F6</em></div><i>:</i><div class='time-row'><span>"+CMinute+"</span><em>\u5206</em></div><i>:</i><div class='time-row'><span>"+CSecond+"</span><em>\u79D2</em></div>");
            }
        }
    });
    setTimeout("lxfEndtime()",1000);
};

$(function(){
    lxfEndtime();
});

$('.case-big').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    infinite: false,
    responsive: [
        {
            breakpoint: 640,
            settings: {
                arrows: false,
            }
        }
    ],
    asNavFor: '.case-small'
});
$('.case-small').slick({
    slidesToShow: 6,
    slidesToScroll: 6,
    asNavFor: '.case-big',
    dots: false,
    centerMode: false,
    infinite: false,
    focusOnSelect: true
});

$('.case-big').on('afterChange', function(event, slick, currentSlide) {
    $('.case-big video').each(function(index, el) {
        $(this).get(0).pause();
    });
    var video = $('.case-big .slick-current video');
    if( video.length ){
        video.get(0).play();
    }
});






$('.table-job .btn-k1').click(function(event) {
    $('#pop-job').show();
    $(this).closest('tr').find('.tit').addClass('cur');
    // $('.job-wrap').css({'min-height': 730})
});
$('.close-btn').click(function(event) {
    $('#pop-job').hide();
    $('#job-iframe').height(0);
    $('.job-wrap').css({'height': 'auto'})
    $('.table-job .tit').removeClass('cur');
    return false;
});



selectAll('#selectall', '.table2 input[type=checkbox]');

function selectAll(checkAllBtn, otherCheckbox){
    var checkboxes = $(otherCheckbox);
    $(checkAllBtn).click(function () {
        checkboxes.prop('checked', this.checked);
        checkboxes.each(function(index, el) {
            $(this).parents('label').toggleClass('checked', this.checked);
        });
    })

    checkboxes.change(function () {
        var check = (checkboxes.filter(":checked").length == checkboxes.length);
        $(checkAllBtn).prop("checked", check)
        $(checkAllBtn).parents('label').toggleClass('checked', check);
    });
}



;(function($){
    $.fn.extend({
        pop: function(options) {
            var defaults = {
                close : '.close-pop',
                afterShow: $.noop(),
                afterClose: $.noop(),
            }
            var options =  $.extend(defaults, options);
            function getScrollbarWidth() {
                var outer = document.createElement("div");
                outer.style.visibility = "hidden";
                outer.style.width = "100px";
                outer.style.msOverflowStyle = "scrollbar";

                document.body.appendChild(outer);

                var widthNoScroll = outer.offsetWidth;
                outer.style.overflow = "scroll";

                var inner = document.createElement("div");
                inner.style.width = "100%";
                outer.appendChild(inner);

                var widthWithScroll = inner.offsetWidth;
                outer.parentNode.removeChild(outer);
                return widthNoScroll - widthWithScroll;
            }

            return this.each(function() {
                var o = options;
                var target = $(this).attr('href');
                var offset =getScrollbarWidth();
                $(this).click(function(event) {
                    $('body').addClass('pop-open').css({'padding-right': offset});
                    $(target).fadeIn(function(){
                        afterShow();
                    });
                    return false;
                });
                $(options.close).click(function(event) {
                    event.preventDefault();
                    $(target).hide();
                    $('body').removeClass('pop-open').css({'padding-right': 0});
                    afterClose();
                    return false;
                });

                function afterShow(){
                    if (options.afterShow && typeof(options.afterShow) == "function"){
                        options.afterShow();
                    }
                }

                function afterClose(){
                    if (options.afterClose && typeof(options.afterClose) == "function"){
                        options.afterClose();
                    }
                }
                $(target).click(function(e){
                    var e = $(e.target);
                    var pop_id = '#' + e[0].id;
                    if(pop_id == target){
                        $(target).hide();
                        $('body').removeClass('pop-open').css({'padding-right': 0});
                    }
                    afterClose();

                })

            });
        }
    });
})(jQuery);
$('.btn-c').pop();
$('.btn-bbb').pop();
$('#btn-terms').pop();
$('#invoice-btn').pop();
$('#new-address').pop();
$('#up-btn').pop();
$('#next-pop-equipment').pop({
    afterShow: function(){
        $('#pop-purchase-order').hide()
    }
});



/*$('.pop-video').click(function(e) {
	 var e = $(e.target);
	 var pop_id = '#' + e[0].id;
	 if( '#pop-video' == target){
	    $('#pop-video').hide();
	 }
	 return false;
});
*/

$('#btn-video2').pop({
    afterShow: function(){
        var v = $('#pop-video video');
        var src = v.data('src');
        v.attr('src',src);
        v.get(0).load();
        v.get(0).play();
    },
    afterClose: function(){
        var v = $('#pop-video video');
        var src = v.data('src');
        v.attr('src','about:blank');
    }
});


$('.btn-video2').pop({
    afterShow: function(){
        var v = $('#pop-video video');
        var src = v.data('src');
        v.attr('src',src);
        v.get(0).load();
        v.get(0).play();
    },
    afterClose: function(){
        var v = $('#pop-video video');
        var src = v.data('src');
        v.attr('src','about:blank');
    }
});


$('#btn-video').click(function(){
    var video = $(this).parents('.con').next('video');
    $(this).hide();
    video.get(0).muted = false;
    video.get(0).controls = true;
    video.get(0).play();
    return false;
});


$('.open-inp').click(function(event) {
    $('.top-form').addClass('show-inp')
    $('#hd').addClass('search-open')
    $('.menu-mask').fadeIn();
    $('.top-form .inp_control').focus();

});

$('.x-form').click(function(event) {
    $('.top-form').removeClass('show-inp')
    $('#hd').removeClass('search-open')
    $('.menu-mask').fadeOut();
});


;(function(){
    var mPop = $('.m-change-pop');
    $('.m-change-pop .x-btn').click(function(event) {
        mPop.fadeOut();
        return false;
    });

    $('.m-change-lan').click(function(){
        mPop.fadeIn();
        return false;
    })



})();


$(window).load(function(){
    var img = $('#pro-img');
    img.addClass('fadeInUp');

})


;(function(){

    if(  $('.pro-det1').length ){
        function changePro(){
            if( $('.m_header').is(':visible') ){
                $('.pro-det1 .img').insertAfter('.pro-det1 h5');
                $('.pro-det2 .img').insertAfter('.pro-det2 h2');
            }else{
                $('.pro-det1 .img').insertBefore('.pro-det1 .txt');
                $('.pro-det2 .img').insertBefore('.pro-det2 .txt');
            }
        }
        changePro();

        $(window).resize(function(){
            changePro();
        }).resize();
    }

})();
;(function ($) {
    $.fn.tabs = function (options) {
        var defaults = {
            active: 0,
            tit: 'li',
            type: 'dn',
            curClass: 'on',
            trigger: 'click'
        };

        var settings = $.extend(defaults, options);

        return this.each(function () {
            var tab_ul = $(this);
            var idx = tab_ul.attr('tab-tit');
            var tab_con = $('[tab-con=' + idx + ']');
            var tab_tit = tab_ul.find(settings.tit);
            if( settings.type !=='dn'){
                tab_con.addClass('hide-tab');
            }

            function clickTab(current) {
                tab_tit.removeClass(settings.curClass).eq(current).addClass(settings.curClass);
                if( settings.type =='dn'){
                    tab_con.hide().eq(current).show();
                }else{
                    tab_con.addClass('hide-tab');
                    tab_con.eq(current).removeClass('hide-tab');
                }
                //$(".bar").getNiceScroll().resize();

            }
            tab_tit.bind(settings.trigger, function () {
                clickTab(tab_tit.index(this));
                return false;
            });
            if (tab_tit.hasClass(settings.curClass)) {
                tab_ul.find('.' + settings.curClass).trigger(settings.trigger);
            } else {
                clickTab(settings.active);
            }
        })
    };
})(jQuery);


$('.sub-l').tabs({tit:'a',trigger:'mouseenter', type:'hide'})
$('.tit-w').tabs({tit:'a', type:'dn'})


if($(".table2-2").length){
    $(".table2-2 tr").each(function(index, el) {
        var s2 = $(this).find('.s2').html();
        var s3 = $(this).find('.s3').html();
        // $(s2).addClass('m-show').prependTo( $(this).find('.s4') )
        $(s3).addClass('m-show').appendTo( $(this).find('.s1') )
    });
}

if($(".table2-1").length){
    $(".table2-1 tr").each(function(index, el) {
        // var s3 = $(this).find('.s3').html();
        // var s2 = $(this).find('.s2').html();
        // var s4 = $(this).find('.s4').html();
        // $(s3).addClass('m-show').appendTo( $(this).find('.s1') )
        // $(s4).addClass('m-show').appendTo( $(this).find('.s7') )
    });
}

/* $('.nav li').hover(function(){
	$('#hd').toggleClass('white-hd');
}) */

;(function(){
    var timer3;
    var mask = $('.menu-mask');
    $('.nav li').mouseenter(function(){

        $('#hd').addClass('white-hd');
        clearTimeout(timer3);

        if( $(this).find('.sub-pro').length ){

            timer3 = setTimeout(function(){
                if( !mask.is(':visible') ){
                    mask.delay(100).stop(false,false).fadeIn(200)
                }
            },150)

        }

    }).mouseleave(function(event) {
        clearTimeout(timer3);

        $('#hd').removeClass('white-hd');
        timer3 = setTimeout(function(){
            mask.stop(false,false).fadeOut(200)
        }, 200)
    });
})();


$('.nav li').mouseenter(function(){
    // $(this).find('.sub-pro').stop(false,true).fadeIn(250);
    $(this).addClass('current');
}).mouseleave(function(event) {
    // $(this).find('.sub-pro').stop(false,true).fadeOut(250);
    $(this).removeClass('current');
});

$('.sub-pro').mouseleave(function(){
    $(".sub-l a:first").trigger('mouseenter')
})


/*window._bd_share_config = {
    "common": {
        "bdSnsKey": {},
        "bdText": "",
        "bdMini": "2",
        "bdMiniList": false,
        "bdPic": "",
        "bdStyle": "css/kgu.reset.css",
        "bdSize": "32"
    },
    "share": {}
};
with (document) 0[(getElementsByTagName('head')[0] || body).appendChild(createElement('script')).src = 'http://bdimg.share.baidu.com/static/api/js/share.js?v=89860593.js?cdnversion=' + ~(-new Date() / 36e5)];*/

$('.pop-pay .x-btn').click(function(event) {
    $('#pop-pay').hide()
});

if( $('.index-menu').length ){
    $('html').addClass('index-body').addClass('white-logo-body');
}


if($('#pop-case').length ){
    // $('body').addClass('trans-body').addClass('white-logo-body');
}
// if( !$('body').hasClass('white-logo-body')  ){
// $('.logo-normal').remove();
// }
if( $('.index-menu').length){
    $('#fd').addClass('index-body-fd')
    $('.m-footer').addClass('index-body-mfd')
}


;(function(){
    $('[role=checkbox],[role=radio]').addClass('custom-checkbox-radio');


    !function () {
        var css = '.custom-checkbox-radio label input{position: absolute;width: 0;height:0; }\
                .custom-checkbox-radio label{cursor: pointer;}\
    ',
            head = document.getElementsByTagName('head')[0],
            style = document.createElement('style');
        style.type = 'text/css';
        if (style.styleSheet) {
            style.styleSheet.cssText = css;
        } else {
            style.appendChild(document.createTextNode(css));
        }
        head.appendChild(style);
    }();
    /*$('.custom-checkbox-radio label').each(function(i){
        $(this).attr('for', 'cus-select'+i).find('input').attr('id','cus-select'+i);
    });
    */
    $('[role=checkbox]').each(function(){
        var input = $(this).find('input[type="checkbox"]');
        input.each(function(){
            if( $(this).attr('checked')){
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })

        input.change(function(){
            $(this).parents('label').toggleClass('checked');
            return false;
        });
    })

    $('[role=radio]').each(function(){
        var input = $(this).find('input[type="radio"]'),
            label = $(this).find('label');

        input.each(function(){
            if( $(this).attr('checked')){
                $(this).parents('label').addClass('checked');
                $(this).prop("checked", true)
            }
        })

        input.change(function(){
            label.removeClass('checked');
            $(this).parents('label').addClass('checked');
            input.removeAttr('checked');
            $(this).prop("checked", true)
        })
    })
})();



$('#types-btn input').change(function(){
    var i = $('#types-btn input:checked').parents('label').index()
    if(i == 0){
        $('.form3').removeClass('show-org');
    }else{
        $('.form3').addClass('show-org');
    }
})




$('#types-btn2 input').change(function(){
    var i = $('#types-btn2 input:checked').parents('label').index()
    if(i == 0){
        $('#pop-invoice .form5').removeClass('show-org');
    }else{
        $('#pop-invoice .form5').addClass('show-org');
    }
})




$('#purchase-order-radio input').change(function(){
    var i = $('#purchase-order-radio input:checked').parents('label').index()
    if(i == 0){
        $('.pop-purchase-order').removeClass('show-p2');
    }else{
        $('.pop-purchase-order').addClass('show-p2');
    }
})





;(function(){
    function setIndex(){
        $('.device-info').each(function(i){
            i++;
            $(this).find('h4').find('s').text(i)
        })
    }
    $('#add-more-device').click(function(event) {
        var temp = $('#device-info-temp').text()
        $(temp).insertAfter('.device-info:last');
        setIndex();
        return false;
    });


    var inputStr = '<div class="col_lg_8 col_xs_12">'+
        '<div class="inp"><input type="text" class="inp_control" name="product_nums[]"></div>'+
        '</div>';
    if( $('.select-hd').length ){
        $('body').on('change', '.select-hd', function(){
            var inpRow = $(this).closest('.form5').find('.select-bd');
            var curLen = inpRow.children('div').length;
            var val = $(this).val();
            if(curLen < val){
                for(var i =0; i< (val - curLen); i++){
                    inpRow.append($(inputStr));
                }
            }else{
                inpRow.children('div').slice(val - curLen).remove();
            }

        })

        $('body').on('click', '.del-k', function(){
            $(this).closest('.device-info').remove();
            setIndex();
            return false;
        })
    }

})();

;(function(){
    // $(".order-box3 .table1:not(:first)").addClass('hide-head')
    $('.table1-1 tr').each(function(index, el) {
        $(this).find('td[rowspan]').addClass('white-td')
        // var num = $(this).find('td').attr('rowspan')
        // if( num ){
        // $(this).nextAll().slice(0, num).addClass('odd')
        // $(this).addClass('white-td')
        // }
    });
})();

!function(o,t,e,i){var s="backgroundcover",a={image:null,safearea:"0%,0%,100%,100%",resizeInterval:250};function n(t,e){this.$element=o(t),this._defaults=a,this._name=s,this.settings=o.extend({},a,this.$element.data(),e),this.setOptions(this.settings),this.init()}n.prototype={init:function(){var t=this;setInterval(function(){t._checkResize()},this.settings.resizeInterval)},setOptions:function(t){this.settings=o.extend({},a,this.$element.data(),t),void 0!==t.image?this.setImage(t.image):t.safearea&&this.setSafearea(t.safearea)},_checkResize:function(){var t=this.$element.outerWidth(),e=this.$element.outerHeight();t===this.elementLastWidth&&e===this.elementLastHeight||this.layout()},setImage:function(t){var e,i,s,a,n=this;if(this.image=t,!this.image){if(!(e=this.$element.css("background-image")))throw new Error("No background image available");if(!(i=e.match(/url\([\"\']?([^\"\']*)[\"\']?\)/i)))throw new Error("Background image could not be retrieved from CSS property");this.image=i[1]}function h(t){n.imageWidth=t.width,n.imageHeight=t.height,n.loaded=!0,n.setSafearea(n.settings.safearea)}void 0===this.$element.css("background-size")?(this.mode="img",this.$img=o('<img src="'+this.image+'" />').css("position","absolute"),"static"===this.$element.css("position")&&this.$element.css("position","relative"),this.$element.css("background-image","none").css("overflow","hidden").prepend(this.$img)):(this.mode="css",this.$element.css("background-image","url("+this.image+")")),this.loaded=!1,(s=new Image).onload=function(){h(this)},a=this.image,navigator.userAgent.match(/msie/i)&&(a+="?"+(new Date).valueOf()),s.src=a,s.complete&&h(s)},setSafearea:function(t){if(t=t||a.safearea,this.settings.safearea=t,this.loaded){var e=t.split(","),i=function(t,e){if("number"==typeof t)return t;if("function"==typeof t.trim&&(t=t.trim()),"%"===t.charAt(t.length-1)){var i=parseFloat(t);return Math.round(i/100*e)}return Math.round(parseFloat(t))};this.safearea={x1:i(e[0],this.imageWidth),y1:i(e[1],this.imageHeight),x2:i(e[2],this.imageWidth),y2:i(e[3],this.imageHeight)},this.layout()}},layout:function(){if(this.loaded){var t,e,i,s,a,n,h,o,r,m=this.$element.outerWidth(),d=this.$element.outerHeight(),g=m/d,u=this.safearea.x1,c=this.safearea.y1,l=this.safearea.x2,f=this.safearea.y2,p=l-u,v=f-c,$=this.imageWidth,x=this.imageHeight,b=$/x,w=p/$,y=v/x;b<g?(t=m,e=Math.round(t/b),d<v*(r=t/$)&&(e=Math.round(d/y),r=(t=Math.round(e*b))/$)):(e=d,m<p*(r=(t=Math.round(e*b))/$)&&(t=Math.round(m/w),e=Math.round(t/b),r=t/$)),o=e-f*r-(s=(e-d)/2),(n=c*r-s)<0?s+=n:o<0&&(s-=o),h=t-l*r-(i=(t-m)/2),(a=u*r-i)<0?i+=a:h<0&&(i-=h),i=Math.round(-i),s=Math.round(-s),this.elementLastWidth=m,this.elementLastHeight=d,this._update(t,e,i,s)}},_update:function(t,e,i,s){"css"===this.mode?this.$element.css("background-position",i+"px "+s+"px").css("background-size",t+"px "+e+"px"):"img"===this.mode&&this.$img.css("width",t+"px").css("height",e+"px").css("top",s+"px").css("left",i+"px")}},o.fn[s]=function(t){return this.each(function(){o.data(this,s)?o.data(this,s).setOptions(t):o.data(this,s,new n(this,t))})}}(jQuery,window,document);


if( $('html').hasClass('ie8') ){

    $(".index-menu").backgroundcover({
        safearea: "0,0,0,0"
    });
    $(".form-bg").backgroundcover({
        safearea: "0,0,0,0"
    });
    $("[cover]").backgroundcover({
        safearea: "0,0,0,0"
    });
    $(".ban-inner").backgroundcover({
        safearea: "0,0,0,0"
    });

}


$(function () {
    $('.p-box').each(function(index, el) {
        if( $(this).find('.p-sub').length && $(this).find('.p-sub').find('a').length ){
            $(this).addClass('has-p-sub')
        }
    });

    $(".p-box").click(function(){
        if($(this).find(".p-sub").is(":visible")){
            $('.p-sub').slideUp();

        }else{
            $(this).find(".p-sub").slideDown();
            $(this).siblings().find(".p-sub").slideUp();
        };
    });

    var w_width = $(window).width();
    if (w_width > 768){
        $('.p-box.has-p-sub').hover(function () {
            $(this).find('.p-sub').stop(!0,!0).slideDown();
        },function () {
            $('.p-sub').stop(!0,!0).slideUp();
        });
    };

});


if( $('.center-address').length ){
    $(".center-address:nth-child(4n)").after('<div class="line1"></div>')
}




$('.slider-invert').slick({
    dots: true,
    arrows: false,
    autoplay: true,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});




var topNav = $('.i-center'),
    drop = $('.center-pop'),
    myTimer1;


topNav.mouseenter(function(event) {
    clearTimeout(myTimer1);
    myTimer1 = setTimeout(function(){
        drop.stop(false,false).fadeIn();
    },250)
}).mouseleave(function(event) {
    clearTimeout(myTimer1);
    myTimer1 = setTimeout(function(){
        drop.stop(false,false).fadeOut(200)
    },250);
});

drop.mouseenter(function(event) {
    clearTimeout(myTimer1);
}).mouseleave(function(event) {
    clearTimeout(myTimer1);
    myTimer1 = setTimeout(function(){
        drop.stop(false,false).fadeOut(200)
    },250);
});


$('body').on('click','.delete-exp', function(){
    $(this).parents('.form3').remove();
    return false;
});

$('.nav li:not(":first")').each(function(){
    if( $(this).find('.sub-pro').length ){
        $(this).addClass('posr');
    }
})

$('.contact-row2 dl:first .td').addClass('first-td');

;(function(){
    $(".other-1").each(function(index, el) {

        var len = $(this).find('li').length;

        if(len == 2){
            $('.other-1 li').addClass('col_lg_12')
        }else if(len == 3){
            $('.other-1 li').addClass('col_lg_8')
        }

    });

})();
/*


$('#banner').slick({
  dots: false,
  arrows: false,
  autoplay: true,
  fade:true,
  speed: 1000,
  customPaging: function (slider, i) {
      return '<a tabindex="0">' + (i + 1) + '</a>';
  }
});

$('#banner').on('afterChange', function(event, slick, currentSlide) {
 	$('#banner video').each(function(index, el) {
 		$(this).get(0).pause();
 	});
 	var video = $('#banner .slick-current video');
 	if( video.length ){
	 	video.get(0).play();
 	}
});
*/

$('.news-det .bd p').each(function(index, el) {
    if( $(this).find('img').length ){
        $(this).addClass('no-indent');
    }
});


$('.pro-select2 h3').click(function(event) {
    $(this).toggleClass('on');
    $('.pro-select2 ul').stop(false,false).slideToggle();
});
$('.pro-select2 li').each(function(){
    if( $(this).find('dl').length  ){
        $(this).addClass('has-sub');
    }
})
$('.pro-select2 a.v1').click(function(event) {
    var dl = $(this).next('dl');
    if( dl.length ){
        $(this).parents('li').addClass('on');
        $(this).parents('ul').addClass('push-v1');
        return false;
    }


    /*  if( dl.length ){
        if(!dl.is(':visible')  ){
          $('.pro-select2 dl').slideUp();
          $(this).addClass('opening')
          dl.stop(false,false).slideDown();
          return false;
        }else{
             $(this).removeClass('opening')
           dl.stop(false,false).slideUp();
        }
        return false;
      }
      */

});

$('.pro-select2 dt').click(function(event) {
    $(this).parents('ul').removeClass('push-v1');
    $(this).parents('li').removeClass('on');
    return false;
})


// 主菜单


$('.m_nav_list li').each(function(){
    if( $(this).find('.m-sub').length  ){
        $(this).addClass('has-sub');
    }
})

$('.m_nav_list a.v1').click(function(event) {
    var sub = $(this).next('.m-sub');
    if( sub.length ){
        $(this).parents('li').addClass('on no-trans')
        $(this).parents('ul').addClass('push-v1');
        return false;
    }
});

$('.m-sub span').click(function(event) {
    var _this = this;
    $(this).parents('ul').removeClass('push-v1');
    $(this).parents('li').removeClass('on');
    setTimeout(function(){
        $(_this).parents('li').removeClass('no-trans');
    },300)
    return false;
})






!function(y){y.fn.sticky=function(t){var f=y.extend({},{topSpacing:0,zIndex:"",stopper:".sticky-stopper",stickyClass:!1},t);var h="number"==typeof f.zIndex;var u=0<y(f.stopper).length||"number"==typeof f.stopper;return this.each(function(){var o=y(this),n=o.outerHeight(),t=o.outerWidth(),r=f.topSpacing,p=f.zIndex,a=o.offset().top-r,d=y("<div></div>").width(t).height(n).addClass("sticky-placeholder"),l=f.stopper,c=y("body");function s(){var t=c.scrollTop(),s=l,e=o.parent().width();(d.width(e),u&&"string"==typeof l)&&(s=y(l).offset().top-n-r);if(a<t){if(f.stickyClass&&o.addClass(f.stickyClass),o.after(d).css({position:"fixed",top:r,width:e}),h&&o.css({zIndex:p}),u&&s<t){var i=s-t+r;o.css({top:i})}}else f.stickyClass&&o.removeClass(f.stickyClass),o.css({position:"relative",top:null,left:null,width:"auto"}),d.remove()}c.bind("scroll",s),c.bind("load",s),c.bind("resize",s)})}}(jQuery);




;(function(){

    var select2 = $('.pro-select2');
    if( select2.is(':visible') ){
        select2.sticky({
            zIndex: 200000,
        })

        $(window).scroll(function(event) {
            if( $('.pro-select2 h3').hasClass('on') ){
                $('.pro-select2 h3').removeClass('on');
                $('.pro-select2 ul').slideUp().removeClass('push-v1')
                $('.pro-select2 li').removeClass('on');
            }
        });

    }

})();

;(function(){
    var top = $('.to-top');
    if(  top.length > 0 ){
        $(window).scroll(function(event) {
            if ( $(window).scrollTop() > $(window).height() ) {
                top.show();
            }else{
                top.hide();
            }
        }).scroll();

        top.click(function(event) {
            $('body,html').stop().animate({
                scrollTop: 0
            }, 500);
            return false;
        });
    }

})();



;(function(){

    if( $('#label-cert').length ){

        $('#image').change(function(event) {
            var label = $(this).parents('label');
            if( $(this).val() != ''){
                label.addClass('hide-ico')
            }else{
                label.removeClass('hide-ico')
            }
        });


        $(document).on('click','.upload-certificate .del-me', function(){
            $('#image').val('');
            $('.data-preview-img').remove();
            $('#label-cert').removeClass('hide-ico')
            return false;
        })


        new Preview(get('label-cert'), get('image'), {
            onlegal: function(path, ext, accept){
                return true;
            },
            onillegal: false
        });

    }


})();



;(function(){

    if( $('#label-cert2').length ){

        $('#imageFile').change(function(event) {
            var label = $(this).parents('label');
            if( $(this).val() != ''){
                label.addClass('hide-ico')
            }else{
                label.removeClass('hide-ico')
            }
        });


        $(document).on('click','.upload-certificate .del-me', function(){
            $('#imageFile').val('');
            $('.data-preview-img').remove();
            $('#label-cert2').removeClass('hide-ico')
            return false;
        })



        new Preview(get('label-cert2'), get('imageFile'), {
            onlegal: function(path, ext, accept){
                return true;
            },
            onillegal: false
        });

    }


})();





/*

;(function(){
	if( $('.contact-row2').length ){
		$('.contact-row2 .row dl:lt(3)').addClass('cn-loc')
		$('.contact-row2 .row dl').each(function(i){
			i++;
			$(this).addClass('s'+i)
		})
	}

})();
*/

;(function(){

    if( $('[m-src]').length ){

        $('[m-src]').each(function(){
            var mSrc = $(this).attr('m-src');
            var pcSrc = $(this).attr('pc-src');

            if ($(window).width() < 767){
                $(this).css({
                    'background-image': 'url('+mSrc+')'
                })
            }else{
                $(this).css({
                    'background-image': 'url('+pcSrc+')'
                })
            }
        })
    }


})();

$('.case-item').each(function(i){
    i++;
    $(this).addClass('case-c'+i);
})

// !function(a,b){function c(b){var c,d=a("<div></div>").css({width:"100%"});return b.append(d),c=b.width()-d.width(),d.remove(),c}function d(e,f){var g=e.getBoundingClientRect(),h=g.top,i=g.bottom,j=g.left,k=g.right,l=a.extend({tolerance:0,viewport:b},f),m=!1,n=l.viewport.jquery?l.viewport:a(l.viewport);n.length||(console.warn("isInViewport: The viewport selector you have provided matches no element on page."),console.warn("isInViewport: Defaulting to viewport as window"),n=a(b));var o=n.height(),p=n.width(),q=n.get(0).toString();if(n[0]!==b&&"[object Window]"!==q&&"[object DOMWindow]"!==q){var r=n.get(0).getBoundingClientRect();h-=r.top,i-=r.top,j-=r.left,k-=r.left,d.scrollBarWidth=d.scrollBarWidth||c(n),p-=d.scrollBarWidth}return l.tolerance=~~Math.round(parseFloat(l.tolerance)),l.tolerance<0&&(l.tolerance=o+l.tolerance),0>=k||j>=p?m:m=l.tolerance?!!(h<=l.tolerance&&i>=l.tolerance):!!(i>0&&o>=h)}String.prototype.hasOwnProperty("trim")||(String.prototype.trim=function(){return this.replace(/^\s*(.*?)\s*$/,"$1")});var e=function(b){if(1===arguments.length&&"function"==typeof b&&(b=[b]),!(b instanceof Array))throw new SyntaxError("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions");for(var c=0;c<b.length;c++)if("function"==typeof b[c])for(var d=0;d<this.length;d++)b[c].call(a(this[d]));else console.warn("isInViewport: Argument(s) passed to .do/.run should be a function or an array of functions"),console.warn("isInViewport: Ignoring non-function values in array and moving on");return this};a.fn["do"]=function(a){return console.warn("isInViewport: .do causes issues in IE and some browsers since its a reserved. Use $.fn.run instead i.e., $(el).run(fn)."),e(a)},a.fn.run=e,a.extend(a.expr[":"],{"in-viewport":function(a,b,c){if(c[3]){var e=c[3].split(",");return 1===e.length&&isNaN(e[0])&&(e[1]=e[0],e[0]=void 0),d(a,{tolerance:e[0]?e[0].trim():void 0,viewport:e[1]?e[1].trim():void 0})}return d(a)}})}(jQuery,window);
;(function(){

    function isScrolledIntoView(elem)
    {
        var docViewTop = $(window).scrollTop();
        var docViewBottom = docViewTop + $(window).height();
        var elemTop = $(elem).offset().top;
        var elemBottom = elemTop + $(elem).height();
        return ((elemBottom <= docViewBottom) && (elemTop >= docViewTop));
    }

    function sliderMoblie(slider){
        if( $('.m_header').is(":visible") && $(slider).length > 0 ){
            $(window).on("scroll", function() {
                $(slider).each(function(){
                    if( isScrolledIntoView(this) ){
                        $(this).addClass('show-arrow')
                    }else{
                        $(this).removeClass('show-arrow')
                    }
                })
            }).scroll();
        }
    }


    sliderMoblie('.slider3')
    sliderMoblie('.slider4')



})();

;(function(){
    if( $(window).width() < 750 ){
        // $('.m-ban-full').height($(window).height()-50);
    }
})();


$('.slick-dots').each(function(){
    if( $(this).find('li').length <=1 ){
        $(this).hide();
    }
})


$('.x-alert').click(function(){
    $('.ie-alert').hide();
})


if( $('.site-list').length ){
    $('html').addClass('site-map-html')
}


;(function(){

    if( $('.det-tit').length ){

        var w = $('.pro-det5 .container').width();
        var all = 0;
        $('.det-tit a').each(function(){
            all += $(this).outerWidth(true);
        })
        if(all >= w){
            $('.det-tit').addClass('align-left')
        }

    }
})();

;(function(){
    var search = $('.m-search2');
    $('.m-pop-search').click(function(){
        search.fadeIn();
    })
    $('.x-s3').click(function(){
        search.fadeOut();
    })
})();


;(function(){
    var timer3;
    var pop = $('.lan-pop');
    $('.cur-lan').mouseenter(function(){
        clearTimeout(timer3);
        timer3 = setTimeout(function(){
            pop.stop(false,false).fadeIn();
        },250)
    }).mouseleave(function(event) {
        clearTimeout(timer3);
        timer3 = setTimeout(function(){
            pop.stop(false,false).fadeOut(200)
        }, 250)
    });

    pop.mouseenter(function(){
        clearTimeout(timer3);
    }).mouseleave(function(event) {
        clearTimeout(timer3);
        timer3 = setTimeout(function(){
            pop.stop(false,false).fadeOut(200)
        }, 250)
    });


})();




;(function(){
    if( !$('.ban-mask .lxftime').length > 0 ){
        $('.ban-mask').addClass('no-active')
    }
})();



$('.n-banner').slick({
    dots: true,
    arrows: true,
    autoplay: true,
    draggable:false,
    speed: 300,
    customPaging: function (slider, i) {
        return '<a tabindex="0">' + (i + 1) + '</a>';
    }
});


$('#banner2').on('afterChange', function(event, slick, currentSlide) {
    $('#banner2 video').each(function(index, el) {
        $(this).get(0).pause();
    });
    var video = $('#banner2 .slick-current video');
    if( video.length ){
        video.get(0).play();
    }
});

$('#banner2-m').on('afterChange', function(event, slick, currentSlide) {
    $('#banner2-m video').each(function(index, el) {
        $(this).get(0).pause();
    });
    var video = $('#banner2-m .slick-current video');
    if( video.length ){
        video.get(0).play();
    }

});




;(function(){




    $('.m-nav2 li').each(function(){
        if( $(this).find('dl').length  ){
            $(this).addClass('has-sub');
        }
    })
    $('.m-nav2 .has-sub .v1').click(function(event) {
        var dl = $(this).next('dl');
        if(!dl.is(":visible")){
            $('.m-nav2 li dl').slideUp();
            $('.m-nav2 li .v1').removeClass('on');
            dl.stop().slideDown();
            $(this).addClass('on');
        }else{
            dl.stop().slideUp();
            $(this).removeClass('on')
        }
        return false;
    });


})();





/*$('.ban-com-profile video').on('play', function (e) {
	$('.ban-com-profile h2').fadeOut();
});
*/



;(function(){
	$('.pro-all .list-pro2').each(function(){
		var len = $(this).children('li').length;
		if( len == 2 || len == 4 ){
			$(this).children('li').addClass('col_lg_12')
		}else if( len == 3){
			$(this).children('li').addClass('col_lg_8')
		}else if (len >= 5 ){
			$(this).children('li').addClass('col_lg_8')
		}
	})
})();

$('#btn-lan2').pop();