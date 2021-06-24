/*--------------------------------------------------------*/
/* TABLE OF CONTENTS: */
/*--------------------------------------------------------*/
/* 01 - VARIABLES */
/* 02 - page calculations */
/* 03 - function on document ready */
/* 04 - function on page load */
/* 05 - function on page resize */
/* 06 - function on page scroll */
/* 07 - swiper sliders */
/* 08 - buttons, clicks, hovers */
var _functions = {};

$(function() {

	/*"use strict";*/
	/* "严格模式"是一种在JavaScript代码运行时自动实行更严格解析和错误处理的方法。这种模式使得Javascript在更严格的条件下运行。*/
	
	/*================*/
	/* 01 - VARIABLES */
	/*================*/
	var swipers = [], winW, winH, headerH, winScr, footerTop, _isresponsive, _ismobile = navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/webOS/i) || navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/iPod/i);

	/*========================*/
	/* 02 - page calculations */
	/*========================*/
	_functions.pageCalculations = function(){
		winW = $(window).width();
		winH = $(window).height();
	};

	/*=================================*/
	/* 03 - function on document ready */
	/*=================================*/
	if(_ismobile) $('body').addClass('mobile');
	_functions.pageCalculations();

	/*============================*/
	/* 04 - function on page load */
	/*============================*/
	$(window).load(function(){
		_functions.initSwiper();
		$('body').addClass('loaded');
		$('#loader-wrapper').delay(1000).fadeOut();
	});
	
	/*function handlePreloader() {
		if($('.preloader').length){
			$('.preloader').delay(200).fadeOut(500);
		}
	}*/

	/*==============================*/
	/* 05 - function on page resize */
	/*==============================*/
	_functions.resizeCall = function(){
		_functions.pageCalculations();
	};
	if(!_ismobile){
		$(window).resize(function(){
			_functions.resizeCall();
		});
	} else{
		window.addEventListener("orientationchange", function() {
			_functions.resizeCall();
		}, false);
	}

	/*==============================*/
	/* 06 - function on page scroll */
	/*==============================*/
	
	$(window).scroll(function(){
		_functions.scrollCall();
	});

	_functions.scrollCall = function(){
		winScr = $(window).scrollTop();

		if (winScr > 130){
			$(".tt-header").addClass("stick fadeInDown animated");
		} else {
			$(".tt-header").removeClass("stick fadeInDown animated");
		}
		
	};
	
	/*=====================*/
	/* 07 - swiper sliders */
	/*=====================*/
	var initIterator = 0;

	_functions.initSwiper = function(){
		
		$('.swiper-container').not('.initialized').each(function(){								  
			var $t = $(this);								  

			var index = 'swiper-unique-id-'+initIterator;

			$t.addClass('swiper-'+index+' initialized').attr('id', index);
			$t.find('.swiper-pagination').addClass('swiper-pagination-'+index);
			$t.find('.swiper-button-prev').addClass('swiper-button-prev-'+index);
			$t.find('.swiper-button-next').addClass('swiper-button-next-'+index);

			var slidesPerViewVar = ($t.data('slides-per-view'))?$t.data('slides-per-view'):1;
			if(slidesPerViewVar!='auto') slidesPerViewVar = parseInt(slidesPerViewVar, 10);

			swipers['swiper-'+index] = new Swiper('.swiper-'+index,{
				pagination: '.swiper-pagination-'+index,
		        paginationClickable: true,
		        nextButton: '.swiper-button-next-'+index,
		        prevButton: '.swiper-button-prev-'+index,
		        slidesPerView: slidesPerViewVar,
		        autoHeight:($t.is('[data-auto-height]'))?parseInt($t.data('auto-height'), 10):0,
		        loop: ($t.is('[data-loop]'))?parseInt($t.data('loop'), 10):0,
				autoplay: ($t.is('[data-autoplay]'))?parseInt($t.data('autoplay'), 10):5000,
		        breakpoints: ($t.is('[data-breakpoints]'))? { 767: { slidesPerView: parseInt($t.attr('data-xs-slides'), 10) }, 991: { slidesPerView: parseInt($t.attr('data-sm-slides'), 10) }, 1199: { slidesPerView: parseInt($t.attr('data-md-slides'), 10) } } : {},
		        initialSlide: ($t.is('[data-ini]'))?parseInt($t.data('ini'), 10):0,
		        speed: ($t.is('[data-speed]'))?parseInt($t.data('speed'), 10):1500,
		        keyboardControl: true,
		        mousewheelControl: ($t.is('[data-mousewheel]'))?parseInt($t.data('mousewheel'), 10):0,
		        mousewheelReleaseOnEdges: true,
		        spaceBetween: ($t.is('[data-space-between]'))?parseInt($t.data('space-between'), 10):0,
		        direction: ($t.is('[data-direction]'))?$t.data('direction'):'horizontal',
				onSlideChangeEnd: function(swiper){
					var animationBlocks = $t.find('.swiper-slide-active .text-animation');
					for (var i = 0; i < animationBlocks.length; ++i ){
						$(animationBlocks[i]).addClass('animated ' + $(animationBlocks[i]).attr("data-animation"));
					}
				},		        
				onSlideChangeStart: function(swiper){
					var animationBlocks = $t.find('.swiper-slide-active .text-animation');
					for (var i = 0; i < animationBlocks.length; ++i ){
						$(animationBlocks[i]).removeClass('animated ' + $(animationBlocks[i]).attr("data-animation"));
					}
				},		        
			});
			swipers['swiper-'+index].update();
			initIterator++;
		});
		$('.swiper-container.swiper-control-top').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-bottom').attr('id')];
		});
		$('.swiper-container.swiper-control-bottom').each(function(){
			swipers['swiper-'+$(this).attr('id')].params.control = swipers['swiper-'+$(this).parent().find('.swiper-control-top').attr('id')];
		});
	};

	/*==============================*/
	/* 08 - buttons, clicks, hovers */
	/*==============================*/

	//menu
	$('.cmn-toggle-switch').on('click', function(e){
		$(this).toggleClass('active');
		$(this).parents('header').find('.toggle-block').slideToggle();
		e.preventDefault();
	});
	$('.main-nav .menu-toggle').on('click', function(e){
		$(this).closest('li').toggleClass('select').siblings('.select').removeClass('select');
		$(this).closest('li').siblings('.parent').find('ul').slideUp();
		$(this).closest('a').siblings('ul').slideToggle();
		e.preventDefault();
	});

	    
	/* accordeon */
	$('.tt-accordeon-title').on('click', function(){
		$(this).closest('.tt-accordeon').find('.tt-accordeon-title').not(this).removeClass('active').next().slideUp();
		$(this).toggleClass('active').next().slideToggle();
		
		
	});		

	/* 填充进度条 */
	$('.barfiller').barfiller({ barColor: '#df0b00' });
	
	/*==============================*/
	/*  - project carousel */
	/*==============================*/
	
	/*  - default.html */
	var owl = $('.owl-carousel1');
		owl.owlCarousel({
			
		margin: 30,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:3000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1,
			
			}, 
			600: {
			margin: 0,
			items: 2
			},
			767:{
			margin: 30,
			items: 3,
			},
			1000: {
			items: 3
			}
		}
	})
	$('.play').on('click',function(){
		owl.trigger('play.owl.autoplay',[1000])
	})
	$('.stop').on('click',function(){
		owl.trigger('stop.owl.autoplay')
	})
	
	
	/*  - index-2.html */
	var owl = $('.owl-carousel2');
		owl.owlCarousel({
		margin: 30,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1,
			
			}, 
			600: {
			margin: 0,
			items: 2
			},
			767:{
			margin: 30,
			items: 2,
			},
			1000: {
			items: 3
			}
		}
	})
	
	/*  - index-4.html */	
	var owl = $('.owl-carousel3');
		owl.owlCarousel({
		margin: 30,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1,
			
			}, 
			600: {
			margin: 30,
			items: 2
			},
			767:{
			margin: 30,
			items: 2,
			},
			1000: {
			items: 4
			}
		}
	})
	
	/*  - index-4.html */
	var owl = $('.owl-carousel4');
		owl.owlCarousel({
		margin: 30,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1,
			
			}, 
			600: {
			margin: 0,
			items: 1
			},
			767:{
			margin: 30,
			items: 1,
			},
			1000: {
			items: 1
			}
		}
	})
	
	var owl = $('.owl-carousel17');
		owl.owlCarousel({
		margin: 30,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1,
			
			}, 
			600: {
			margin: 0,
			items: 3
			},
			767:{
			margin: 30,
			items: 3,
			},
			1000: {
			items: 4
			}
		}
	})
	
	
	// homepage 1
	$('.owl-carousel3 ').owlCarousel({
    	loop: true,
        margin: 10,
		nav: true,
		loop: true,
		nav: true,
		autoplay:true,
		smartSpeed: 1500, 
		autoplayHoverPause:false,
		fluidSpeed:true,
        responsive: {
        	0: {
            items: 1,
                   
            },
         	600: {
            items: 1,
            
			},
            1000: {
            items: 1,
                
            }
         }		
    })
	$( ".owl-prev").html('<i class="icofont icofont-thin-left"></i>');
	$( ".owl-next").html('<i class="icofont icofont-thin-right"></i>');
	
	
	// about us page - team section carousel
	
	$('.owl-carousel4 ').owlCarousel({
                loop: true,
                margin: 30,
				loop: true,
				dots: true,
				autoplay:true,
				smartSpeed: 1500,
				pagination:false,
				navigation:true	,			
				autoplayHoverPause:false,
				fluidSpeed:true,
                responsive: {
                  0: {
                    items: 1,
                   
                  },
                  767: {
                    items: 2,
                  },
                  992: {
                    items: 3,
                
                  }
                }
				
              })
	
	// about us page - customer section carousel
	
	$('.owl-carousel5 ').owlCarousel({
				nav: true,
				loop: true,
                margin: 30,
				dots: true,
				autoplay:true,
				smartSpeed: 1500,
				pagination:false,
				navigation:true	,			
				autoplayHoverPause:false,
				fluidSpeed:true,
                responsive: {
                  0: {
                    items: 1,
                   
                  },
                  600: {
                    items: 1,
                  },
                  991: {
                    items: 1,
                
                  }
                }
				
              })
	
			
		// project detail page - related projects
			
			$('.owl-carousel6 ').owlCarousel({
						margin: 30,
						loop: true,
						dots: true,
						nav: true,
						autoplay:true,
						smartSpeed: 1500,
						pagination:false,
						navigation:true	,			
						autoplayHoverPause:false,
						fluidSpeed:true,
						responsive: {
						  0: {
							items: 1,
						   
						  },
						  414: {
							items: 1,
						  },
						  767: {
							items: 1,
						  },
						   991: {
							items:2,
						  }
						}
				
		  })
			$( ".owl-prev").html('<i class="icofont icofont-rounded-left"></i>');
			$( ".owl-next").html('<i class="icofont icofont-rounded-right"></i>');
	
	//project carousel 
	
		
			$('.owl-carousel8 ').owlCarousel({
						margin: 30,
						loop: true,
						dots: true,
						nav: true,
						autoplay:true,
						
						responsive: {
						  0: {
							items: 1,
						   
						  },
						  414: {
							items: 1,
						  },
						  767: {
							items: 1,
						  },
						   991: {
							items:2,
						  }
						}
				
		  })
			$( ".owl-prev").html('<i class="fa fa-angle-left"></i>');
			$( ".owl-next").html('<i class="fa fa-angle-right"></i>');
	
	//
	
	var owl = $('.owl-carousel7');
		owl.owlCarousel({
		margin: 0,
		nav: true,
		loop: true,
		autoplay:true,
		autoplayTimeout:1000,
		autoplayHoverPause:true,
		responsive: {
			0: {
			items: 1
			},
			500: {
			items: 2
			},
			650: {
			items: 2
			},
			767: {
			items: 3
			},
			1000: {
			items:2
			},
			1200: {
			items:5
			}
		}
	})
		$('.play').on('click',function(){
			owl.trigger('play.owl.autoplay',[1000])
		})
		$('.stop').on('click',function(){
			owl.trigger('stop.owl.autoplay')
		})			
	
	
	
	
				
		
	// 数字滚动
	$('.border-left22 h2 span:first-child').each(function () {
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		}, {
			duration: 3000,
			easing: 'swing',
			step: function (now) {
				$(this).text(Math.ceil(now));
			}
		});
	});
	
	// 数字滚动
	$(document).ready(function(){
	$('.counter-value').each(function(){
		$(this).prop('Counter',0).animate({
			Counter: $(this).text()
		},{
			duration: 3000,
			easing: 'swing',
			step: function (now){
				$(this).text(Math.ceil(now));
			}
		});
	});
	});
	
	// TAB切换
	$(function(){
		$(".taba ul li").click(function(){
		$(".taba-c .tabacontent").hide().eq($(".taba ul li").removeClass().index($(this).addClass("current"))).show(); 	
		});
	});

	
	

	// 返回顶部
   	$(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('#mkdf-back-to-top').addClass('on');
        } else {
            $('#mkdf-back-to-top').removeClass('on');
        }
    });

    $('#mkdf-back-to-top').click(function() {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

	// shop-detail
	$('.input-number-increment').click(function() {
			  var $input = $(this).parents('.input-number-group').find('.input-number');
			  var val = parseInt($input.val(), 10);
			  $input.val(val + 1);
			});

			$('.input-number-decrement').click(function() {
			  var $input = $(this).parents('.input-number-group').find('.input-number');
			  var val = parseInt($input.val(), 10);
			  $input.val(val - 1);
			})
				
	// Page Loaded...
	
	try {

	  var ZoomImage = jQuery('.zoom, .zoom-image');
	    ZoomImage.magnificPopup({
	        type: 'image',
	         gallery: {
	            enabled: true
	        }
	    });
	  } catch(err) {
	}
	
	
	
	// 详情页多图切换放大镜
	var sdBoxW = $('.moveBox').css('width');
        sdBoxW = parseInt(sdBoxW);//移动层的宽度
        var magBoxW = $('.magBox').css('width');
        magBoxW = parseInt(magBoxW);//图片放大层的宽度
        var normalBoxW = $('.normalBox').css('width');
        normalBoxW = parseInt(normalBoxW);//事件绑定层的宽度
        var num = 0;//存放下标
        //找出放大图片的比例(核心)
        var scale = magBoxW/sdBoxW;
        //移入normalBox盒子
        $('.normalBox').hover(function () {
            $('.moveBox').css('display','block');
            $('.magBox').css('display','block');
        },function () {
            $('.moveBox').css('display','none');
            $('.magBox').css('display','none');
        });
        //3、移入leftBox层
        $('.leftBox').mouseover(function () {
            //给放大的图片和图片层设置宽度；
            $('.magBox ul li img').css('width',scale*normalBoxW+'px');
            $('.magBox ul li').css({'width':scale*normalBoxW+'px','height':scale*normalBoxW+'px'})
        });
        //4、设置放大倍数
        var n = 1;
        function sty() {
            $('.moveBox').css({'width':200/n+'px','height':200/n+'px'});
            $('.multiple').html(n);
            scale = magBoxW/(sdBoxW/n);
        }
        $('.btn1').click(function () {
            n ++;
           sty()
        });
        $('.btn2').click(function () {
            if (n==1){
                return;
            } else {
                n --;
                sty()
            }
        }) ;
        //1、移入缩小图关联
        $('.botBox ul li').attr('index',function (i,e) {
            return i;
        });
        $('.botBox ul li').mouseover(function () {
            if ($(this).attr('class')=='bord'){
                return;//跳过第一个
            }else{
                $(this).attr('class','bord').siblings().removeAttr('class');
                var index = $(this).attr('index');
                //联动normal和magBox中的图片
                $('.normalBox .w').eq(index).attr('id','n').siblings().removeAttr('id');
                $('.magBox ul li').eq(index).attr('class','m').siblings().removeAttr('class');
                num = index;
            }
        });
        //2、鼠标在移动层移动
        $('.normalBox').mousemove(function (e) {
             var offset = $(this).offset();
            var X = e.pageX-offset.left-$('.moveBox').width()/2;
            var Y = e.pageY-offset.top-$('.moveBox').height()/2;
            if (X<=0){
                X=0;
            }else if(X>$(this).width()-$('.moveBox').width()){
                X = $(this).width()-$('.moveBox').width();
            }
            if (Y<=0){
                Y=0;
            }else if(Y>$(this).height()-$('.moveBox').height()){
                Y = $(this).height()-$('.moveBox').height();
            }
            $('.moveBox').css('left',X+'px');
            $('.moveBox').css('top',Y+'px');
            $('.magBox ul li').eq(num).css('left',-X*scale+'px');
            $('.magBox ul li').eq(num).css('top',-Y*scale+'px');
        });
		
		
		/*--start 视频list--*/
		$(".play").click(function () {
                var _src = $(this).attr("_src");
                $(".video_tc").fadeIn();
                $(".video_tc ._vid").html('<video autoplay="autoplay" controls><source src="' + _src + '" type="video/mp4"></video>');
            });
            $(".video_tc i").click(function () {
                $(".video_tc").fadeOut();
                $(".video_tc ._vid").html("");
            });

            $(".d_1 .d_1_play").click(function () {
                var type = $(this).attr('data-type');
                if (type == '附件') {
                    var fj = $(this).attr('data-fj');
                    $(".video_tc ._vid").html('<video autoplay="autoplay" controls><source src="' + fj + '" type="video/mp4"></video>');
                } else {
                    var dm = $(this).attr('data-dm');
                    $(".video_tc ._vid").html(dm);
                }
                $(".video_tc").fadeIn();
            });
			$(".d_s .d_1_play").click(function () {
                var type = $(this).attr('data-type');
                if (type == '附件') {
                    var fj = $(this).attr('data-fj');
                    $(".video_tc ._vid").html('<video autoplay="autoplay" controls><source src="' + fj + '" type="video/mp4"></video>');
                } else {
                    var dm = $(this).attr('data-dm');
                    $(".video_tc ._vid").html(dm);
                }
                $(".video_tc").fadeIn();
            });
            $(".video_tc i").click(function () {
                $(".video_tc").fadeOut();
                $(".video_tc ._vid").html('');
            });
		/*--end 视频list--*/

});


//以下是aos滚动
AOS.init({
    easing: 'ease-out-back',
    duration: 1000
});

$('.hero__scroll').on('click', function (e) {
    $('html, body').animate({
        scrollTop: $(window).height()
    }, 1200);
});

function autoHeight(){
	      if (window.innerHeight){//FF
	      	nowHeight = window.innerHeight;
	      }else{
	      	nowHeight = document.documentElement.clientHeight;
	      }
	      	var jianHeight = 0;
	      if(nowHeight > jianHeight){
	      	document.getElementById('Full').style.height = nowHeight - jianHeight + 'px';
	      }else{
	      	document.getElementById('Full').style.height = jianHeight + 'px';
	      }
	      }
	      autoHeight();
	      window.onresize = autoHeight;


