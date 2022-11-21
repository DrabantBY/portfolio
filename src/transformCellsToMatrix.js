export const transformCellsToMatrix = (numbers, size) => {

    const matrix = Array.from({ length: size }, (_) => []);

    let row = 0;
    let col = 0;
    
    for(let i = 0; i < numbers.length; i++) {

        col >= size && ++row && (col = 0);

        matrix[row][col] = numbers[i];

        col++;
    }

    return matrix;
}