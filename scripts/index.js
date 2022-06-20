import { initialPhotos, createPhoto } from './utils.js'

const swiperPhoto = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 1,
});

const elementContainer = document.querySelector(".photo__swiper-wrapper");

initialPhotos.forEach((el) => {
  const photo = createPhoto(el.src);
  elementContainer.append(photo);
});


// =======feat/slider-reviews
const swiper = new Swiper('.swiper', {
  loop: true,
  slidesPerView: 3,

  pagination: {
    el: '.slider-pagination',
    clickable: true,
  },

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
// >>>>>>> feat/slider-reviews
