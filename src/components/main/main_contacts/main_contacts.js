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
}