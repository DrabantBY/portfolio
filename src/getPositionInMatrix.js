import { findRowCol } from './findRowCol';

export const getPositionInMatrix = (cell, matrix) => {

    const emptyValue = matrix.length ** 2;
    const targetValue = parseInt(cell.dataset.value);

    const [eX, eY] = findRowCol(matrix, emptyValue);
    const [tX, tY] = findRowCol(matrix, targetValue);

    const isNeighborsRow = eX === tX && Math.abs(eY - tY) === 1;
    const isNeighborsCol = eY === tY && Math.abs(eX - tX) === 1;

    return isNeighborsRow || isNeighborsCol ? [eX, eY, tX, tY] : null; 
}