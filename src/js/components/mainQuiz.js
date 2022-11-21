
import { audioPlayer } from './audioPlayer';
import { answersList } from './answersList';
import { birdDescription } from './birdDescription';

export const mainQuiz = () => {

    const wrapper = document.body.querySelector('.wrapper');
    const main = document.createElement('main');
    wrapper.append(main);

    main.classList = 'main main-quiz';
    main.innerHTML = '<div class="container main-quiz__container"></div>';

   audioPlayer();
   answersList();
   birdDescription();
}