import modals from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';
import mask from './modules/mask';
import cheeckTextInputs from './modules/cheeckTextInputs';
import showMoreStyles from './modules/showMoreStyles';

window.document.addEventListener('DOMContentLoaded', () => {
    "use strict";

    modals();
    sliders('.feedback-slider-item', '', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');
    forms();
    mask('[name="phone"]');
    cheeckTextInputs('[name="name"]');
    cheeckTextInputs('[name="message"]');
    showMoreStyles('.button-styles', '#styles .row');
});