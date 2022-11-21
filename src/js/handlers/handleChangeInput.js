import birdsData from "../birdsData";
import win from '../../audio/win.mp3';
import error from '../../audio/error.mp3';
import { playAudioAfterChange } from "../helpers/playAudioAfterChange";
import { stopAudioPlayAfterWin } from "../helpers/stopAudioPlayAfterWin";
import { updateScore } from '../helpers/updateScore';

export const handleChangeInput = (e) => {

    const checkbox = e.target;
    const label = checkbox.parentElement;

    if(checkbox.checked) {

        const { id: questionId, index: questionIndex } = e.currentTarget.previousElementSibling.dataset;
        const answerId = label.dataset.id;

        if(questionId === answerId) {

            playAudioAfterChange(win);
            stopAudioPlayAfterWin();

            label.classList.add('success');
            label.closest('ul').onchange = null;

            updateScore(label);

            const [birdImage, birdName] = [...document.body.querySelector('.poster').children];
            birdImage.src = birdsData[questionIndex][questionId - 1].image;
            birdName.textContent =  birdsData[questionIndex][questionId - 1].name;

            document.body.querySelector('.footer-quiz__btn').disabled = false;
           
        } else {
            label.classList.add('wrong');
            playAudioAfterChange(error);
        }
    } else {
        checkbox.checked = true;
    }
}