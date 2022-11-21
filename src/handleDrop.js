import { setCellsPosition } from "./setCellsPosition";

import { finishGame } from "./finishGame"; 

export const handleDrop = (event, audio, matrix, time, amount, timer, board) => {

    if(event.target === event.currentTarget) {

        audio.play();

        const [eX, eY, tX, tY] = JSON.parse(event.dataTransfer.getData('locations'));

        [ matrix[eX][eY], matrix[tX][tY] ] = [ matrix[tX][tY], matrix[eX][eY] ];
    
        setCellsPosition(matrix);

        amount.textContent = parseInt(amount.textContent) + 1;
    
        setTimeout(() => finishGame(matrix, time, amount, timer, board), 300);
    }
}