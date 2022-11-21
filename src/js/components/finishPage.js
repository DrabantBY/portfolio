export const finishPage = (score) => {
    const container = document.body.querySelector('.main-quiz__container');

    const button = document.body.querySelector('.footer-quiz__btn');

    container.innerHTML = `<h1>Поздравлям! Вы прошли викторину и набрали ${score} из 30 возможных баллов!</h1>`;

    container.classList.add('end');

    button.textContent = 'Try Again';

    button.disabled = false;
}