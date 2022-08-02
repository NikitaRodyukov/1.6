const expandButton = document.querySelector('.about-us__expand')
const textBlock = document.querySelector('.about-us__text')
const moreText = textBlock.querySelectorAll('.text--hidden')
const moreTextBlock = textBlock.querySelector('.text__show-more')
console.log(moreTextBlock)

expandButton.addEventListener('click', function () {
  if (!expandButton.classList.contains('expanded')) {
    expandButton.classList.add('expanded')
    textBlock.classList.add('about-us__text--expanded')
    moreTextBlock.classList.add('text__show-more--visible')
    moreText.forEach(function (text) {
      text.classList.add('text--visible')
    })
  } else {
    expandButton.classList.remove('expanded')
    textBlock.classList.remove('about-us__text--expanded')
    moreTextBlock.classList.remove('text__show-more--visible')
    moreText.forEach(function (text) {
      text.classList.remove('text--visible')
    })
  }
})
