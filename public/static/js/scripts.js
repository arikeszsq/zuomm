(function($) {

    $('.project-feature-slider').each( function () {
        var $show   = $(this).data('show');
        var $arr    = $(this).data('arrow');
        var $dots   = !$arr;
        var $m_show = $show;
        if( $show == 3 ) $m_show = $show - 1;
        $(this).slick({
            slidesToShow: $show,
            slidesToScroll: 1,
            arrows: $arr,
            autoplay: true,
            autoplaySpeed: 6000,
            adaptiveHeight: true,
            prevArrow: '<button type="button" class="prev-nav"><i class="iconfont icon-jiantouzuo "></i></button>',
            nextArrow: '<button type="button" class="next-nav"><i class="iconfont icon-jiantou "></i></button>',
            responsive: [
                {
                    breakpoint: 991,
                    settings: {
                        slidesToShow: $m_show,
                        slidesToScroll: 1,
                        infinite: true,
                        arrows: $arr,
                        dots: $dots
                    }
                },
                {
                    breakpoint: 767,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                },
                {
                    breakpoint: 480,
                    settings: {
                        slidesToShow: 1,
                        slidesToScroll: 1,
                        arrows: false,
                        dots: true
                    }
                }
            ]
        });
    });    


} )( jQuery );
