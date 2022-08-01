const btnFeedback = document.querySelectorAll('.btn-feedback')
const btnModalClose = document.querySelectorAll('.btn-close')
const modalFeedback = document.querySelector('.feedback')
const btnCall = document.querySelectorAll('.btn-call')
const modalCall = document.querySelector('.call')
const backdrop = document.querySelector('.backdrop')

btnFeedback.forEach(function(btn){
    btn.addEventListener('click', function(){
        modalFeedback.setAttribute('open', '');
        backdrop.classList.add('backdrop--show');
    })
})

btnCall.forEach(function(btn){
    btn.addEventListener('click', function(){
        modalCall.setAttribute('open', '');
        backdrop.classList.add('backdrop--show');
    })
})

backdrop.addEventListener('click', function(){
    backdrop.classList.remove('backdrop--show');
    modalFeedback.removeAttribute('open');
    modalCall.removeAttribute('open');
})

btnModalClose.forEach(function(btn){
    btn.addEventListener('click', function(){
        modalFeedback.removeAttribute('open');
        modalCall.removeAttribute('open');
        backdrop.classList.remove('backdrop--show');
    })
})