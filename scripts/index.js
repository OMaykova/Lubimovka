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
    nextEl: '.swiper-button-next',
    prevEl: '.slider-button-prev',
    // nextEl: value.nextElementSibling.nextElementSibling,
    // prevEl: value.nextElementSibling,
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
  },

  watchOverflow: true,
  spaceBetween: 30,
  // breakpoints: {
  //   320: {
  //     slidesPerView:1
  //   }
  // },

});
