import birdsData from '../birdsData'; 
import svgData from '../svgData';
import { addPlayerHandlers } from '../helpers/addPlayerHandlers';

export const birdDescription = (questionIndex, answerIndex) => {

    if(questionIndex && answerIndex) {

        const div = document.body.querySelector('.description');

        div.classList.add('active');
        
        div.innerHTML = `<section class="description__about">
                            <h2 class="description__bird-name">
                                ${birdsData[questionIndex][answerIndex - 1].name}
                                <span>(${birdsData[questionIndex][answerIndex - 1].species})</span>
                            </h2>
                            <p class="description__text">
                                ${birdsData[questionIndex][answerIndex - 1].description}
                            </p>
                        </section>
                        <section class="description__body">
                            <audio>
                                <source src="${birdsData[questionIndex][answerIndex - 1].audio}" type="audio/mp3">
                            </audio>
                            <div class="description__state">
                                <progress class="progress description__progress" max="1" value="0"></progress>
                                <div class="description__time">
                                    <time class="description__time-now">00:00</time>
                                    <time class="description__time-all">00:00</time>
                                </div>
                            </div>
                            <div class="description__controls">
                                <progress class="description__progress" max="1" value="0.5"></progress>
                                <button class="btn-play controls__btn-play">${svgData.play}</button>
                                <button class="btn-sound controls__btn-sound">${svgData.volumeOn}</button>
                            </div>
                        </section>
                        <figure class="description__image">
                            <img src="${birdsData[questionIndex][answerIndex - 1].image}">
                        </figure>`;

        addPlayerHandlers(div);

    } else {

        const mainContainer = document.body.querySelector('.main-quiz__container');

        const div = document.createElement('div');

        mainContainer.append(div);

        div.classList = 'description main-quiz__description';

        div.innerHTML = '<h2 class="description__title">Послушайте плеер. Выберите птицу из списка</h2>';
    }
}