const swiper = new Swiper('.swiper-mini-mod', {
  // speed: 400,
  spaceBetween: 25,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next-mini',
    prevEl: '.swiper-button-prev-mini',
  },

  breakpoints: {
    320: {
      slidesPerView: 1.3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 2.5,
      spaceBetween: 34,
    },
    1280: {
      slidesPerView: 3,
      spaceBetween: 86,
    },
  },
});
