@@include('../components/header/header.js');
@@include('../components/main/main_top/main_top.js');

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

@@include('../components/main/main_services/main_services.js');
@@include('../components/main/main_partners/main_partners.js');
@@include('../components/main/main_reviews/main_reviews.js');
@@include('../components/main/main_contacts/main_contacts.js');
@@include('../components/callback_popup/callback_popup.js');
@@include('../components/detail_popup/detail_popup.js');

