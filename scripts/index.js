import { initialPhotos, createPhoto } from './utils.js'

const swiperPhoto = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 1,
  breakpoints: {
    1440: {
      slidesPerView: 4,
      grid: {
        rows: 2,
      },
    },
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 3,
      },
      spaceBetween: 1,
    },
    300: {
      slidesPerView: 2,
      grid: {
        rows: 4,
      },
      spaceBetween: 1,
    },
  }
});

const elementContainer = document.querySelector(".photo__swiper-wrapper");

initialPhotos.forEach((el) => {
  const photo = createPhoto(el.src);
  elementContainer.append(photo);
});
