if (document.querySelector('.main_top__slider')) {
    const offerSlider = new Swiper('.main_top__slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        navigation: {
            nextEl: ".main_top__slider_next",
            prevEl: ".main_top__slider_prev",
        },
        // autoplay: {
        //     delay: 7000,
        //     disableOnInteraction: false,
        // },
        pagination: {
            el: '.main_top__slider_pagination',
            clickable: true,
            renderBullet: function (index, className) {
                return '<span class="' + className + '">' + (index + 1) + '</span>';
            },
        }

    });
}