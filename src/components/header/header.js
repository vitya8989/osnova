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
}