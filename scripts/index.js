const swiper = new Swiper('.swiper'
, {
  loop: true,
  slidesPerView: 3,
    // If we need pagination
  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button-next',
    prevEl: '.slider-button-prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchOverflow: true,
  spaceBetween: 30,
  breakpoints: {
    320: {
      slidesPerView: 1
    },
    768: {
      slidesPerView: 2
    },
    1440: {
      slidesPerView: 3
    }
  },

});
