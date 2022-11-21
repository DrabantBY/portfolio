import { handleFooterBtn } from "../handlers/handleFooterBtn";

export const footerQuiz = (isDisabled = true) => {
    const wrapper = document.body.querySelector('.wrapper');
    const footer = document.createElement('footer');
    wrapper.append(footer);

    footer.innerHTML = `<div class="container footer-quiz__container">
                            <button class="btn footer-quiz__btn">
                                Next Level
                            </button>
                        </div>`;
    
    const btn = footer.querySelector('button');

    btn.disabled = isDisabled;

    btn.onclick = (e) => handleFooterBtn(e);
}