$(document).ready(function() {
    var partnerCarousel = $('.partners-carousel').owlCarousel({
        loop: true,
        nav: false,
    });
    $('.partner-slider .next').click(function() {
        partnerCarousel.trigger('next.owl.carousel', [300]);
    });
    $('.partner-slider .prev').click(function() {
        partnerCarousel.trigger('prev.owl.carousel', [300]);
    });

    // $(document).on("click", ".scroll-to-top", function (e) {
    //     e.preventDefault();
    //     $("html, body").animate({ scrollTop: 0 }, 1000);
    // })
});
// var burgerBtn = document.querySelector('.burger-btn');
// var headerTop = document.querySelector('.header-top');
//
// burgerBtn.addEventListener('click', crossFunction);
// function crossFunction(){
//     headerTop.classList.toggle("menu-open");
// }