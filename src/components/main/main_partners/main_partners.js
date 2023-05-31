if (document.querySelector('.main_partners__slider')) {
    const partnersSlider = new Swiper('.main_partners__slider', {
        speed: 2000,
        spaceBetween: 8,
        slidesPerView: 'auto',
        loop: true,
        allowTouchMove: false,
        autoplay:  {
            delay: 1000,
        },
        breakpoints: {
            768: {
                spaceBetween: 60,
                slidesPerView: 'auto',
            }
        }
    });
}