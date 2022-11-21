import { renderGamesBoard } from './renderGamesBoard'; 

export const handleSelectChange = (timer, time, amount, audio, btnSound) => {
    clearInterval(timer);
    time.textContent = '00:00';
    amount.textContent = '0';
    audio.muted = false;
    btnSound.innerHTML = `
    <svg height="36" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#4169e1">
        <path d="M18.28,8.37a1,1,0,1,0-1.56,1.26,4,4,0,0,1,0,4.74A1,1,0,0,0,17.5,16a1,1,0,0,0,.78-.37A6,6,0,0,0,18.28,8.37Z"/>
        <path d="M19.64,5.23a1,1,0,1,0-1.28,1.54A6.8,6.8,0,0,1,21,12a6.8,6.8,0,0,1-2.64,5.23,1,1,0,0,0-.13,1.41A1,1,0,0,0,19,19a1,1,0,0,0,.64-.23A8.75,8.75,0,0,0,23,12,8.75,8.75,0,0,0,19.64,5.23Z"/>
        <path d="M15,3.12a1,1,0,0,0-1,0L7.52,7.57h-5a1,1,0,0,0-1,1v6.86a1,1,0,0,0,1,1h5l6.41,4.4a1.06,1.06,0,0,0,.57.17,1,1,0,0,0,1-1V4A1,1,0,0,0,15,3.12Zm-1.47,15L8.4,14.6a1,1,0,0,0-.57-.17H3.5V9.57H7.83A1,1,0,0,0,8.4,9.4l5.1-3.5Z"/>
    </svg>  
    `
    renderGamesBoard();
}