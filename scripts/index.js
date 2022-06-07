const swiperPhoto = new Swiper(".mySwiper", {
  slidesPerView: 4,
  grid: {
    rows: 2,
  },
  spaceBetween: 1,
});

const initialPhotos = [
  {
    src: "./images/image1.png",
  },
  {
    src: "./images/image2.png",
  },
  {
    src: "./images/image3.png",
  },
  {
    src: "./images/image4.png",
  },
  {
    src: "./images/image5.png",
  },
  {
    src: "./images/image6.png",
  },
  {
    src: "./images/image7.png",
  },
  {
    src: "./images/image8.png",
  },
  {
    src: "./images/image1.png",
  },
  {
    src: "./images/image2.png",
  },
  {
    src: "./images/image3.png",
  },
];

const elementContainer = document.querySelector(".photo__swiper-wrapper");

const createPhoto = (img) => {
  const photoTemplate = document.querySelector(".photo-template").content;
  const photoElement = photoTemplate
    .querySelector(".photo__swiper-slide")
    .cloneNode(true);
  photoElement.src = img;
  photoElement.alt = "Фотография из пьессы.";
  return photoElement;
};

initialPhotos.forEach((el) => {
  const photo = createPhoto(el.src);
  elementContainer.append(photo);
});
