if (document.querySelector('.main_reviews__slider')) {
    const reviewsSlider = new Swiper('.main_reviews__slider', {
        speed: 400,
        spaceBetween: 10,
        slidesPerView: 1,
        navigation: {
            nextEl: ".main_reviews__slider_next",
            prevEl: ".main_reviews__slider_prev",
        },
        pagination: {
            el: '.main_reviews__slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        },
        breakpoints: {
            768: {
                spaceBetween: 52,
                slidesPerView: 1,
            }
        }
    });
}