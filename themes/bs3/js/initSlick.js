$(document).ready(function(){
  $('.slick1').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      dots: true,
      fade: true,
      cssEase: 'linear',
  });
  $('.slick2').slick({
      autoplay: true,
      infinite: true,
      autoplaySpeed: 4000,
      cssEase: 'linear',
      slidesToShow: 6,
      slidesToScroll: 1,
  });
});
