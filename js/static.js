$(document).ready(function() {
    $('.clients__slider').slick({
        arrows: true,
        dots: true,
        slidesToShow: 1,
        // speed: 1000,
        // autoplay: true,
        centerMode: true,
    })
});

let burger = document.querySelector('.burger')
burger.addEventListener('click', function() {
    burger.classList.toggle('burger--active-toggle')
})