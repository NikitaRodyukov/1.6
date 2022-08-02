const expandButton = document.querySelector('.about-us__expand')
const expandButtonText = expandButton.querySelector('.about-us__expand__text')
const expandButtonIcon = expandButton.querySelector('.icon')
const textBlock = document.querySelector('.about-us__text')
const moreText = textBlock.querySelectorAll('.text--hidden')
const moreTextBlock = textBlock.querySelector('.text__show-more')

const sliderMenu = document.querySelector('.slider-menu')

//открытие и закрытие доп текста
expandButton.addEventListener('click', function () {
  if (!expandButton.classList.contains('expanded')) {
    //проверка на закрытый
    expandButton.classList.add('expanded')
    expandButtonText.innerHTML = 'Скрыть'
    expandButtonIcon.classList.add('icon--rotated')
    textBlock.classList.add('about-us__text--expanded')
    moreTextBlock.classList.add('text__show-more--visible')
    moreText.forEach(function (text) {
      text.classList.add('text--visible')
    })
  } else {
    expandButton.classList.remove('expanded')
    expandButtonText.innerHTML = 'Читать далее'
    expandButtonIcon.classList.remove('icon--rotated')
    textBlock.classList.remove('about-us__text--expanded')
    moreTextBlock.classList.remove('text__show-more--visible')
    moreText.forEach(function (text) {
      text.classList.remove('text--visible')
    })
  }
})

// добавление обводки для ссылки меню
sliderMenu.addEventListener('click', function (e) {
  sliderMenu
    .querySelector('.slider-menu__item--selected')
    .classList.remove('slider-menu__item--selected')
  e.target.classList.add('slider-menu__item--selected')
})
