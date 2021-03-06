$(document).ready(function(){
    $('.slick1').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        dots: true,
        fade: true,
        cssEase: 'linear',
        pauseOnFocus: false,
    });

    $('.slick2').slick({
        autoplay: true,
        infinite: true,
        autoplaySpeed: 4000,
        cssEase: 'linear',
        slidesToShow: 6,
        slidesToScroll: 1,
        pauseOnFocus: false,
    });

    $('.slick-slider').hover(
        function () {
            $(this).find(".slick-arrow").attr("style", "z-index:1")
        },
        function () {
            $(this).find(".slick-arrow").attr("style", "z-index:-1")
        }
    );
});
