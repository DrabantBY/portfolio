export const addGreetingMain = () => {
    const main = document.body.querySelector('main');
    main.classList.remove('gallery');
    main.innerHTML = ` <section class="section main__section">
                        <h2 class="section__title">
                            Hello! I guess you will be glad to play my game! Wish you to win!
                        </h2>
                     </section>`
}