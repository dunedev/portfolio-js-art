const cheeckTextInputs = (selector) => {
    const textInputs = document.querySelectorAll(selector);

    textInputs.forEach(item => {
        item.addEventListener('keypress', function(e) {
            if (e.key.match(/[^а-яё 0-9]/ig)) {
                e.preventDefault();
            }
        });
    });
};

export default cheeckTextInputs;