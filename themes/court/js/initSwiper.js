function initSwiper() {
  var swiper = new Swiper('#slider', {
    loop: true,
    autoplay: {
        delay: 5000,
    },
    pagination: {
      el: '.swiper-pagination',
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper2 = new Swiper('#slider2', {
	slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });

  var swiper3 = new Swiper('#slider3', {
	slidesPerView: 6,
    spaceBetween: 10,
    loop: true,
    autoplay: {
        delay: 5000,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });
}
