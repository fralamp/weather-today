export const showError = (message) => {
    const container = document.querySelector('.header__container');

    const errorBlock = document.createElement('div');

    errorBlock.classList.add('header__error');

    errorBlock.innerHTML = message;
    
    container.append(errorBlock);

    setInterval(() => { errorBlock.remove()}, 1500);
};


