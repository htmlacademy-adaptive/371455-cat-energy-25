const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const buttonBefore = document.querySelector('.slider__button--before');
const buttonAfter = document.querySelector('.slider__button--after');
const wrapperBefore = document.querySelector('.slider-images__wrapper--before');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

buttonBefore.addEventListener('click', function () {
  wrapperBefore.classList.add('slider-images--state-before');
});

buttonAfter.addEventListener('click', function () {
  wrapperBefore.classList.remove('slider-images--state-before');
});
