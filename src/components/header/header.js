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

}
