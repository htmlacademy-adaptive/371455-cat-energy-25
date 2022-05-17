const navMain = document.querySelector('.main-nav');
const navToggle = document.querySelector('.main-nav__toggle');
const buttonBefore = document.querySelector('.slider__button--before');
const buttonAfter = document.querySelector('.slider__button--after');
const wrapperBefore = document.querySelector('.slider-images__wrapper--before');
const wrapperAfter = document.querySelector('.slider-images__wrapper--after');
const sliderToggle = document.querySelector('.slider__toggle');

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
  wrapperBefore.classList.add('slider-images__state-before');
  wrapperBefore.style.width = '100%';
  sliderToggle.style.left = '0';

  if (document.documentElement.clientWidth < 768) {
    sliderToggle.style.left = '6px';
  }
});

buttonAfter.addEventListener('click', function () {
  wrapperBefore.classList.remove('slider-images__state-before');
  wrapperBefore.style.width = '0';
  sliderToggle.style.left = '396px';

  if (document.documentElement.clientWidth < 768) {
    sliderToggle.style.left = '44px';
  }
});
