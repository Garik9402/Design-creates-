// слайдер jq
$(document).ready(function() {
    $('.clients__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        speed: 1000,
        autoplay: true,
        centerMode: true,
        infinite: false,
    })
});
// бургер меню открытие меню
let mobMain = document.querySelector('.main-m-wrapper')
let burger = document.querySelector('.burger')
let closeMain = document.querySelector('.main-m__close')
burger.addEventListener('click', function() {
        burger.classList.add('burger--active')
        mobMain.classList.add('main-m-wrapper--open')
        mobMain.classList.remove('main-m-wrapper--close')
        closeMain.classList.remove('main-m__close--active')
    })
    //закрытие меню
closeMain.addEventListener('click', function() {
    closeMain.classList.add('main-m__close--active')
    mobMain.classList.remove('main-m-wrapper--open')
        // mobMain.classList.add('main-m-wrapper--close')

})