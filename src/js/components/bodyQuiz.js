import { headerQuiz } from "./headerQuiz";
import { mainQuiz } from './mainQuiz'; 
import { footerQuiz } from "./footerQuiz";
 
export const bodyQuiz = () => {

    const wrapper = document.body.querySelector('.wrapper');
    wrapper.innerHTML = '';

    headerQuiz();
    mainQuiz();
    footerQuiz();
}
