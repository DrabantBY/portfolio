import { audioPlayer } from "../components/audioPlayer"; 
import { answersList } from "../components/answersList";
import { birdDescription } from "../components/birdDescription";
import { finishPage } from "../components/finishPage";
import { bodyQuiz } from "../components/bodyQuiz";

export const handleFooterBtn = (e) => {

    if (e.currentTarget.textContent === 'Try Again') {
        bodyQuiz();
    } else {
        e.currentTarget.disabled = true;

        const score = parseInt(document.body.querySelector('.score').textContent.slice(-2));
    
        const questions = document.body.querySelectorAll('.header-quiz__item');
    
        let currentIndex;
    
        questions.forEach((question, index) => {
            if(question.classList.contains('active') && index !== (questions.length - 1)) {
    
                currentIndex = index + 1;
                question.classList.remove('active');
    
                document.body.querySelector('.main-quiz__container').innerHTML = '';
    
                audioPlayer(currentIndex);
                answersList(currentIndex);
                birdDescription();
    
            } else if(question.classList.contains('active') && index === (questions.length - 1)) {
                finishPage(score);
    
                question.classList.remove('active');
            }
        })
    
        currentIndex && questions[currentIndex].classList.add('active');
    }
}