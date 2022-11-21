import { buildBoard } from './buildBoard';
import { transformCellsToMatrix } from './transformCellsToMatrix';
import { setCellsPosition } from './setCellsPosition';
import { shuffleCells } from './shuffleCells';
import { moveCell } from './moveCell';
import { handleTime } from './handleTime';
import { renderGameDom } from './renderGameDom';
import { getWinnerList } from './getWinnerList';
import noise from './sound.mp3';
import { handleMuted } from './handleMuted';
import { saveToLocalStorage, loadFromLocalStorage } from './handleLocalStorage';
import { handleMouseOverOut } from './handleMouseOverOut';
import { handleDrop } from './handleDrop';
import { handleSelectChange } from './handleSelectChange';



export const renderGamesBoard = (sizeData, matrixData, audioData) => {

    const board = document.body.querySelector('.board');
    board.innerHTML = '';

    const btnRestart = document.body.querySelector('.restart');
    const btnSound = document.body.querySelector('.sound');
    const btnResult = document.body.querySelector('.result');
    const btnSave = document.body.querySelector('.save');
    const btnLoad = document.body.querySelector('.load');

    const select = document.body.querySelector('select');
    const time = document.body.querySelector('time');
    const amount = document.body.querySelector('.amount');

    const audio = audioData ?? new Audio(noise);

    sizeData && (select.value = sizeData);
    const size = sizeData ?? parseInt(select.value);
    const cells = buildBoard(size);
    board.append(...cells);

    let matrix;

    if(matrixData) {
        matrix = matrixData;
    } else {
        const numbers = cells.map(cell => parseInt(cell.dataset.value));
        shuffleCells(numbers);
        matrix = transformCellsToMatrix(numbers, size);
    }
    
    setCellsPosition(matrix);

    const timer = setInterval(() => handleTime(time), 1000);

    board.onclick = (e) => moveCell(e, matrix, audio, time, amount, timer, board);
    board.ondragover = (e) => e.preventDefault();
    board.onmouseover = (e) => handleMouseOverOut(e, matrix, true);
    board.onmouseout = (e) => handleMouseOverOut(e, matrix, null);
    board.ondrop = (e) => handleDrop(e, audio, matrix, time, amount, timer, board);
    
    select.onchange = () => handleSelectChange(timer, time, amount, audio, btnSound);  
    btnSound.onclick = () => handleMuted(audio, btnSound);
    btnSave.onclick = () => saveToLocalStorage(audio, matrix, btnSound, time, amount, select);
    btnLoad.onclick = () => loadFromLocalStorage(audio, btnSound, time, amount, select, timer);
    btnResult.onclick = getWinnerList;
    btnRestart.onclick = () => {
        if (confirm('Are you sure?')) {
            clearInterval(timer);
            renderGameDom();
            renderGamesBoard(size);
        }
    }
}