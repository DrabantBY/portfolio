import svgData from "../svgData";
import { addPlayerHandlers } from "./addPlayerHandlers";

export const addGalleryItem = ({ name, species, description, image, audio }) => {
    
    const div = document.createElement('div');

    div.classList = 'gallery-item';
    
    div.innerHTML = `<section class="gallery-item__about">
                        <h2 class="gallery-item__bird-name">
                            ${name}
                            <span>(${species})</span>
                        </h2>
                        <p class="gallery-item__text">
                            ${description}
                        </p>
                    </section>
                    <section class="gallery-item__body">
                        <audio>
                            <source src="${audio}" type="audio/mp3">
                        </audio>
                        <div class="gallery-item__state">
                            <progress class="progress gallery-item__progress" max="1" value="0"></progress>
                            <div class="gallery-item__time">
                                <time class="gallery-item__time-now">00:00</time>
                                <time class="gallery-item__time-all">00:00</time>
                            </div>
                        </div>
                        <div class="gallery-item__controls">
                            <progress class="gallery-item__progress" max="1" value="0.5"></progress>
                            <button class="btn-play controls__btn-play">${svgData.play}</button>
                            <button class="btn-sound controls__btn-sound">${svgData.volumeOn}</button>
                        </div>
                    </section>
                    <figure class="gallery-item__image">
                        <img src="${image}">
                    </figure>`;

    addPlayerHandlers(div);

    return div;
}