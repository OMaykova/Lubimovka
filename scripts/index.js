const headerMenu = document.querySelector('.menu');
const buttonBurger = document.querySelector('.menu__burger');

const burgerMenuActive = () => {
  headerMenu.classList.toggle('menu_active');
}

buttonBurger.addEventListener('click', burgerMenuActive);
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