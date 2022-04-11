const burger = document.querySelector('.burger');
const adaptiveMenu = document.querySelector('.header__nav-adaptive');
const logo = document.querySelector('.header__logo-link');


burger.addEventListener('click', showMenu);

function showMenu() {
  burger.classList.toggle('open');
  adaptiveMenu.classList.toggle('active');
  logo.classList.toggle('closed');
}

