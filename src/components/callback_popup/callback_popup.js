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

}