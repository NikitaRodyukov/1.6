import { backdrop } from './modal'

const burgerMenu = document.querySelector('.aside-menu')
const btnBurger = document.querySelector('.burger')
const backdropBurger = document.querySelector('.aside-background')
const btnBurgerClose = burgerMenu.querySelector('.header-part__btn-close')

//открытие бокового меню
btnBurger.addEventListener('click', function () {
  burgerMenu.classList.add('aside-menu--show')
  backdropBurger.classList.add('fixed')
})

//закрытие бокового меню
btnBurgerClose.addEventListener('click', function () {
  burgerMenu.classList.remove('aside-menu--show')
  backdropBurger.classList.remove('fixed')
})
