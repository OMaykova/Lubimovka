import { initialPhotos, createPhoto } from './utils.js'

const swiperPhoto = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 1,
});

console.log(initialPhotos)
const elementContainer = document.querySelector(".photo__swiper-wrapper");

initialPhotos.forEach((el) => {
  const photo = createPhoto(el.src);
  elementContainer.append(photo);
});
