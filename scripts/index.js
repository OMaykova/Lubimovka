const headerMenu = document.querySelector('.menu');
const buttonBurger = document.querySelector('.menu__burger');

const burgerMenuActive = () => {
  headerMenu.classList.toggle('menu_active');
}

buttonBurger.addEventListener('click', burgerMenuActive);