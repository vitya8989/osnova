// изменение хедера при скролле

const header = document.querySelector('.header');

if (header) {
    if (window.pageYOffset > 0) {
        header.classList.add('scroll');
    } else {
        header.classList.remove('scroll');
    }
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > 0) {
            header.classList.add('scroll');
        } else {
            header.classList.remove('scroll');
        }
    });

// Открытие моб. меню

    const headerBurger = document.querySelector('.header__burger');
    const headerNav = document.querySelector('.header__nav');

    headerBurger.addEventListener('click', () => {
        headerNav.classList.toggle('open');
        headerBurger.classList.toggle('active');
        document.body.classList.toggle('this--overflow');
    });


    if (header.querySelectorAll('a[href^="#"]').length > 0) {
        header.querySelectorAll('a[href^="#"]').forEach(link => {
            link.addEventListener('click', function (e) {
                e.preventDefault();
                headerNav.classList.remove('open');
                headerBurger.classList.remove('active');
                document.body.classList.remove('this--overflow');
                let href = this.getAttribute('href').substring(1);
                const scrollTarget = document.getElementById(href);
                let topOffset = header.offsetHeight;
                const elementPosition = scrollTarget.getBoundingClientRect().top;
                const offsetPosition = elementPosition - topOffset;
                window.scrollBy({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            });
        });
    }
};
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
};

// анимация

const mainTopTitles = document.querySelectorAll('.main_top__title');
const mainTopSubitles = document.querySelectorAll('.main_top__subtitle');
const mainTopSubitlesSpan = document.querySelectorAll('.main_top__subtitle_big');
const mainTopTexts = document.querySelectorAll('.main_top__text');

if (mainTopTitles.length > 0) {
    startAnim(mainTopTitles);
}
if (mainTopSubitles.length > 0) {
    startAnim(mainTopSubitles);
}
if (mainTopSubitlesSpan.length > 0) {
    startAnim(mainTopSubitlesSpan);
}
if (mainTopTexts.length > 0) {
    startAnim(mainTopTexts);
}

function startAnim (items) {
    items.forEach((item) => {
        item.classList.add('played');
    });
}

const animBlocks = document.querySelectorAll('.js-anim-block');

if (animBlocks.length > 0) {
    let offsetPositions = [];
    window.addEventListener('load', () => {
        for (let i = 0; i < animBlocks.length; i++) {
            offsetPositions.push(animBlocks[i].getBoundingClientRect().top + window.pageYOffset);
        }
    });
    window.addEventListener('scroll', () => {
        let centerOfWindow = window.pageYOffset + window.innerHeight / 8 * 7;
        for (let i = 0; i < offsetPositions.length; i++) {
            if (centerOfWindow >= offsetPositions[i]) {
                if (animBlocks[i].classList.contains('hide')) {
                    if (i % 2 === 0) {
                        animBlocks[i].classList.remove('hide');
                    } else {
                        setTimeout(() => {
                            animBlocks[i].classList.remove('hide');
                        }, 400);
                    }
                }
                if (animBlocks[i].classList.contains('blur')) {
                    if (i % 2 === 0) {
                        animBlocks[i].classList.remove('blur');
                    } else {
                        setTimeout(() => {
                            animBlocks[i].classList.remove('blur');
                        }, 400);
                    }
                }
            }
        }
    });
}

// аккордеоны с табами

const servicesAccordionHeads = document.querySelectorAll('.js_services_accordion_head');

if (servicesAccordionHeads.length > 0) {
    const servicesItems = document.querySelectorAll('.js_services_item');

    servicesAccordionHeads.forEach((head) => {
        if (head.classList.contains('active')) {
            head.nextElementSibling.style.maxHeight = head.nextElementSibling.scrollHeight + 'px';
            servicesItems.forEach((item) => {
                if (head.dataset.item === item.dataset.item) {
                    item.classList.add('active');
                }
            });
        }

        head.addEventListener('click', function () {
            servicesAccordionHeads.forEach((head) => {
                if (head !== this && head.classList.contains('active')) {
                    head.classList.remove('active');
                    head.parentElement.classList.remove('active');
                    head.nextElementSibling.style.maxHeight = 0 + 'px';
                    servicesItems.forEach((item) => {
                        item.classList.remove('active');
                    });
                }
            });
            if (this.classList.contains('active')) {
                this.classList.remove('active');
                this.nextElementSibling.style.maxHeight = 0 + 'px';
                this.parentElement.classList.remove('active');
                servicesItems.forEach((item) => {
                    if (this.dataset.item === item.dataset.item) {
                        item.classList.remove('active');
                    }
                });
            } else {
                this.classList.add('active');
                this.parentElement.classList.add('active');
                this.nextElementSibling.style.maxHeight = this.nextElementSibling.scrollHeight + 'px';
                servicesItems.forEach((item) => {
                    if (this.dataset.item === item.dataset.item) {
                        item.classList.add('active');
                    }
                });
            }
        });
    });
};
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
};
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
};
const formBlocks = document.querySelectorAll('.js_form_block');

if (formBlocks.length > 0) {
    formBlocks.forEach((formBlock) => {
        const formContents = formBlock.querySelectorAll('.js_form_content');
        const form = formBlock.querySelector('.js_form');
        const formInputs = form.querySelectorAll('.main_contacts__form_input');

        formInputs.forEach((input) => {
            input.addEventListener('focus', () => {
                input.previousElementSibling.classList.add('top_position');
                if (input.classList.contains('error') && input.nextElementSibling && input.previousElementSibling) {
                    input.classList.remove('error');
                    input.nextElementSibling.textContent = '';
                }
            });
            input.addEventListener('blur', () => {
                if (input.value === '') {
                    input.previousElementSibling.classList.remove('top_position');
                }
            });
        });

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            if (!validateForm(form)) {
                return;
            }
            // Отправка формы
            setActiveContentThanks(formContents);
            form.reset();
        });

        const newQuestionBtn = document.querySelector('.js_new_form');

        newQuestionBtn.addEventListener('click', (e) => {
            e.preventDefault();
            setActiveContentForm(formContents);
        });
    });

    $('.js_tel_mask').inputmask({
        mask: '+7 (999) 999-9999',
        showMaskOnHover: false
    });
}

function setActiveContentForm(formContents) {
    formContents.forEach((content) => {
        if (content.dataset.content === 'thanks' && content.classList.contains('active')) {
            content.classList.remove('active');
        } else if (content.dataset.content === 'form' && !content.classList.contains('active')) {
            content.classList.add('active');
        }
    });
}
function setActiveContentThanks(formContents) {
    formContents.forEach((content) => {
        if (content.dataset.content === 'thanks' && !content.classList.contains('active')) {
            content.classList.add('active');
        } else if (content.dataset.content === 'form' && content.classList.contains('active')) {
            content.classList.remove('active');
        }
    });
}

function validateForm (form) {
    let valid = true;
    const validateInputs = form.querySelectorAll('.js_required');

    validateInputs.forEach((input) => {
        if (input.value === '') {
            valid = false;
            input.classList.add('error');
            input.nextElementSibling.textContent = 'Это обязательное поле';
        }
        if (input.classList.contains('js_tel_mask') && input.value.indexOf('_') !== -1) {
            valid = false;
            input.classList.add('error');
            input.nextElementSibling.textContent = 'Неверное значение';
        }
    });

    return valid;
};
const callbackPopup = document.querySelector('.js_callback_popup');

if (callbackPopup) {
    const callbackPopupClose = callbackPopup.querySelectorAll('.js_callback_popup_close');
    const openCallbackPopupBtns = document.querySelectorAll('.js_open_callback_popup');
    const formContents = callbackPopup.querySelectorAll('.js_form_content');

    if (callbackPopupClose.length > 0) {
        callbackPopupClose.forEach((close) => {
            close.addEventListener('click', (e) => {
               e.preventDefault();
               callbackPopup.classList.remove('open');
               document.body.classList.remove('this--overflow');
                setTimeout(() => {
                    setActiveContentForm(formContents);
                }, 200);
            });
        });
    }
    if (openCallbackPopupBtns.length > 0) {
        openCallbackPopupBtns.forEach((open) => {
            open.addEventListener('click', (e) => {
                e.preventDefault();
                callbackPopup.classList.add('open');
                document.body.classList.add('this--overflow');
            });
        });
    }
    callbackPopup.addEventListener('click', (e) => {
        if (!e.target.closest('.callback_popup__body')) {
            callbackPopup.classList.remove('open');
            document.body.classList.remove('this--overflow');
            setTimeout(() => {
                setActiveContentForm(formContents);
            }, 200);
        }
    });

};
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
};

