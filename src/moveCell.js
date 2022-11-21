import { getPositionInMatrix } from "./getPositionInMatrix";
import { setCellsPosition } from "./setCellsPosition";
import { finishGame } from "./finishGame";

export const moveCell = (event, matrix, audio, time, amount, timer, board) => {

    const target = event.target.closest('.cell');

    if (!target) return;

    const locations = getPositionInMatrix(target, matrix);

    if (locations) {

        audio.play();

        const [eX, eY, tX, tY] = locations;
        
        [ matrix[eX][eY], matrix[tX][tY] ] = [ matrix[tX][tY], matrix[eX][eY] ];
        
        setCellsPosition(matrix);

        amount.textContent = parseInt(amount.textContent) + 1;
    
        setTimeout(() => finishGame(matrix, time, amount, timer, board), 300);
    }
}
