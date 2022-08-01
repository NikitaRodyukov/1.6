import { breakpointTablet } from './swiper'

const blockItems = document.querySelector('.items__wrapper')
const expand = document.querySelector('.repair-block__expand')
const expandIcon = expand.querySelector('.repair-block__expand__icon')
const brands = document.querySelectorAll('.items__block')
const repairBlock = document.querySelector('.repair-block')
const expandText = expand.querySelector('.repair-block__expand__text')

const breakpointDesktop = window.matchMedia('(min-width:1366px)')
if (breakpointDesktop.matches) {
  for (let i = 0; i < 8; i++) {
    brands[i].classList.add('items__block--show')
  }
} else if (breakpointTablet.matches) {
  for (let i = 0; i < 6; i++) {
    brands[i].classList.add('items__block--show')
  }
}

expand.addEventListener('click', function () {
  if (expand.classList.contains('repair-block__expand--false')) {
    if (breakpointDesktop.matches) {
      for (let i = 8; i < brands.length; i++) {
        brands[i].classList.add('items__block--show')
      }
    } else if (breakpointTablet.matches) {
      for (let i = 6; i < brands.length; i++) {
        brands[i].classList.add('items__block--show')
      }
    }

    expand.classList.remove('repair-block__expand--false')
    expand.classList.add('repair-block__expand--expanded')
    blockItems.classList.add('items__wrapper--expanded')
    expandIcon.classList.add('repair-block__expand__icon--rotated')
    expandText.innerHTML = 'Скрыть'
  } else if (expand.classList.contains('repair-block__expand--expanded')) {
    repairBlock.classList.remove('repair-block__expand--expanded')
    expand.classList.add('repair-block__expand--false')
    blockItems.classList.remove('items__wrapper--expanded')
    expandText.innerHTML = 'Показать все'
    expandIcon.classList.remove('repair-block__expand__icon--rotated')

    setTimeout(closeItems, 940)
  }
})

let closeItems = function () {
  if (breakpointDesktop.matches) {
    for (let i = 8; i < brands.length; i++) {
      brands[i].classList.remove('items__block--show')
    }
  } else if (breakpointTablet.matches) {
    for (let i = 6; i < brands.length; i++) {
      brands[i].classList.remove('items__block--show')
    }
  }
}