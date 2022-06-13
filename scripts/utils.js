export const initialPhotos = [
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
  
  export const createPhoto = (img) => {
    const photoTemplate = document.querySelector(".photo-template").content;
    const photoElement = photoTemplate
      .querySelector(".photo__swiper-slide")
      .cloneNode(true);
    photoElement.src = img;
    photoElement.alt = "Фотография из пьессы.";
    return photoElement;
  };
