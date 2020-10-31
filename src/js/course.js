$(document).ready(function () {
    if ($(window).outerWidth() <= '760') {
        $(".program__title").on("click", function(e){
            $(".program__box").removeClass('active');
            $(".program__items").removeClass('active');
            $(this).parent().addClass('active');
            $(this).next().addClass('active');
        });
    }

    var swiperHome = $('.team__slick');
    swiperHome.each(function () {
        var mySwiper = new Swiper(this, {
            slidesPerView: 1,
            spaceBetween: 10,
            slidesPerGroup: 1,
            loop: true,
            speed: 1000,
            iOSEdgeSwipeDetection: true,
            initialSlide: 0,
            navigation: {
                nextEl: '.team .team__arrow.team__arrow_next',
                prevEl: '.team .team__arrow.team__arrow_prew',
            },
            effect: 'fade',
        });
    });
});
