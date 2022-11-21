import birdsData from "../birdsData";
import svgData from '../svgData';
import poster from '../../img/bird.png';
import { getRandomIndex } from "../helpers/getRandomIndex";
import { getImage } from "../helpers/getImage";
import { addPlayerHandlers } from "../helpers/addPlayerHandlers";

export const audioPlayer = (index = 0) => {

    const mainContainer = document.body.querySelector('.main-quiz__container');
    const question = document.createElement('div');
    mainContainer.append(question);

    question.classList = 'question main-quiz__question';

    const indexQuestion = getRandomIndex();

    question.dataset.id = birdsData[index][indexQuestion].id;
    question.dataset.index = index;

    question.innerHTML = `<figure class="poster question__poster">
                            <figcaption>**********</figcaption>
                          </figure>
                          <audio>
                              <source src="${birdsData[index][indexQuestion].audio}" type="audio/mp3">
                          </audio>
                          <div class="state question__state">
                              <progress class="progress question__progress" max="1" value="0"></progress>
                              <div class="time state__time">
                                  <time class="time-now state__time-now">00:00</time>
                                  <time class="time-all state__time-all">00:00</time>
                              </div>
                          </div>
                          <div class="controls question__controls">
                              <button class="btn-play controls__btn-play">${svgData.play}</button>
                              <button class="btn-sound controls__btn-sound">${svgData.volumeOn}</button>
                              <progress class="progress question__progress" max="1" value="0.5"></progress>
                          </div>`;

    const target = question.querySelector('figure');

    getImage(poster, 'bird', target);

    addPlayerHandlers(question);
}