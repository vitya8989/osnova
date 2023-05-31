const detailPopup = document.querySelector('.js_detail_popup');

if (detailPopup) {
    const detailPopupClose = detailPopup.querySelectorAll('.js_detail_popup_close');
    const detailPopupChange = detailPopup.querySelectorAll('.js_detail_popup_change');
    const openDetailPopupBtns = document.querySelectorAll('.js_open_detail_popup');

    if (detailPopupClose.length > 0) {
        detailPopupClose.forEach((close) => {
            close.addEventListener('click', (e) => {
                e.preventDefault();
                detailPopup.classList.remove('open');
                document.body.classList.remove('this--overflow');
            });
        });
    }
    if (detailPopupChange.length > 0) {
        detailPopupChange.forEach((change) => {
            change.addEventListener('click', (e) => {
                e.preventDefault();
                detailPopup.classList.remove('open');
            });
        });
    }
    if (openDetailPopupBtns.length > 0) {
        openDetailPopupBtns.forEach((open) => {
            open.addEventListener('click', (e) => {
                e.preventDefault();
                detailPopup.classList.add('open');
                document.body.classList.add('this--overflow');
            });
        });
    }
    detailPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.detail_popup__body')) {
            detailPopup.classList.remove('open');
            document.body.classList.remove('this--overflow');
        }
    });
}
if (document.querySelector('.case__slider')) {
    const caseSlider = new Swiper('.case__slider', {
        effect: 'fade',
        fadeEffect: {
            crossFade: true
        },
        pagination: {
            el: '.case__slider_pagination',
            clickable: true,
        }

    });
}