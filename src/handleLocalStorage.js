import { renderGamesBoard } from './renderGamesBoard';

export const saveToLocalStorage = (audio, matrix, btnSound, time, amount, select) => {

    const muted = audio.muted;
    const icon = btnSound.innerHTML;
    const timeData = time.textContent;
    const amountData = amount.textContent;
    const size = select.value;
    const data = JSON.stringify({ amountData, icon, matrixData: matrix, muted, size, timeData });
    localStorage.setItem('data', data);
}

export const loadFromLocalStorage = (audio, btnSound, time, amount, select, timer) => {

    const data = JSON.parse(localStorage.getItem('data'));

    if (!data) {

        alert('You have to save your current game!');

    } else {

        clearInterval(timer);

        const { amountData, icon, matrixData, muted, size, timeData } = data;

        renderGamesBoard(size, matrixData, audio);
        
        audio.muted = muted;
        console.log(btnSound)
        btnSound.innerHTML = icon;
        time.textContent = timeData;
        amount.textContent = amountData;
        select.value = size;
    }
}