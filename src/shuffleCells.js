
import { canWin } from "./canWin";

export const shuffleCells = (cells) => {

    for(let i = cells.length - 1; i > 0; i--) {

        let j = Math.floor(Math.random() * (i + 1));
        
        [cells[i], cells[j]] = [cells[j], cells[i]];
    }

    if (canWin(cells)) {

        return;

    } else {
        
        shuffleCells(cells);
    }
}