import { breakpointTablet } from './swiper'
import { closeItems } from './brands'

const repairBlock = document.querySelector('.repair-type')
const blockItems = repairBlock.querySelector('.repair-items__wrapper')
const expand = repairBlock.querySelector('.repair-type__expand')
const expandIcon = expand.querySelector('.repair-type__expand__icon')
const brands = repairBlock.querySelectorAll('.repair-items__block')
const expandText = expand.querySelector('.repair-type__expand__text')

const breakpointDesktop = window.matchMedia('(min-width:1120px)')

//показ блоков в соответствии с разрешением
if (breakpointDesktop.matches) {
  for (let i = 0; i < 4; i++) {
    brands[i].classList.add('repair-items__block--show')
  }
} else if (breakpointTablet.matches) {
  for (let i = 0; i < 3; i++) {
    brands[i].classList.add('repair-items__block--show')
  }
}

//показ доб плоков по кнопке
expand.addEventListener('click', function () {
  if (expand.classList.contains('repair-type__expand--false')) {
    //проверка открыто ли окно
    if (breakpointDesktop.matches) {
      for (let i = 4; i < brands.length; i++) {
        brands[i].classList.add('repair-items__block--show')
      }
    } else if (breakpointTablet.matches) {
      for (let i = 3; i < brands.length; i++) {
        brands[i].classList.add('repair-items__block--show')
      }
    }

    expand.classList.remove('repair-type__expand--false')
    expand.classList.add('repair-type__expand--expanded')
    blockItems.classList.add('repair-items__wrapper--expanded')
    expandIcon.classList.add('repair-type__expand__icon--rotated')
    expandText.innerHTML = 'Скрыть'
  } else if (expand.classList.contains('repair-type__expand--expanded')) {
    //скрывание блоков через кнопку
    repairBlock.classList.remove('repair-type__expand--expanded')
    expand.classList.add('repair-type__expand--false')
    blockItems.classList.remove('repair-items__wrapper--expanded')
    expandText.innerHTML = 'Показать все'
    expandIcon.classList.remove('repair-type__expand__icon--rotated')

    setTimeout(closeItems, 940)
  }
})
