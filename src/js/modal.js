const btnFeedback = document.querySelectorAll('.btn-feedback')
const btnModalClose = document.querySelectorAll('.btn-close')
const modalFeedback = document.querySelector('.feedback')
const btnCall = document.querySelectorAll('.btn-call')
const modalCall = document.querySelector('.call')
export const backdrop = document.querySelector('.backdrop')
//открытие feedback
btnFeedback.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modalFeedback.classList.add('modal--active')
    backdrop.classList.add('backdrop--show')
  })
})
//открытие call
btnCall.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modalCall.classList.add('modal--active')
    backdrop.classList.add('backdrop--show')
  })
})
//закрытие модалки через задник
backdrop.addEventListener('click', function () {
  backdrop.classList.remove('backdrop--show')
  modalFeedback.classList.remove('modal--active')
  modalCall.classList.remove('modal--active')
})
//закрытие модалки через кнопку
btnModalClose.forEach(function (btn) {
  btn.addEventListener('click', function () {
    modalFeedback.classList.remove('modal--active')
  modalCall.classList.remove('modal--active')
    backdrop.classList.remove('backdrop--show')
  })
})
