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
const swiperReviews = new Swiper('.reviews-swiper', {
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
const swiperNewsReviews = new Swiper('.news-reviews-swiper', {
  slidesPerView: 1,
  centeredSlides: true,

  pagination: {
    el: '.news-reviews-slider-pagination',
    clickable: true,
  },

  navigation: {
    nextEl: '.news-reviews-slider-button-next',
    prevEl: '.news-reviews-slider-button-prev',
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
let container = document.querySelector(".news-reviews-swiper");
let slides = container.querySelectorAll("li");
let count = 0;
slides[count + 1].classList.add("slide-opacity");
document.querySelector(".news-reviews").querySelector('.news-reviews-slider-button-next').addEventListener('click', () => {
  if (count ==slides.length-1) {
    return
  }
  count +=1;
  slides[count].classList.remove("slide-opacity");
  slides[count - 1].classList.add("slide-opacity");
  if(count <= slides.length) {
    slides[count + 1].classList.add("slide-opacity");
  }
})
document.querySelector(".news-reviews").querySelector('.news-reviews-slider-button-prev').addEventListener('click', () => {
  if (count == 0) {
    return
  }
  count -=1;
  slides[count].classList.remove("slide-opacity");
  slides[count + 1].classList.add("slide-opacity");
  slides[count - 1].classList.add("slide-opacity");
  if(count = 1) {
    slides[count].classList.remove("slide-opacity");
    slides[count + 1].classList.add("slide-opacity");
  }
})
