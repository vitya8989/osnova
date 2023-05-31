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
}