export const findRowCol = (matrix, value) => {

    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[0].length; col++) {

            if(value === matrix[row][col]) {
                
                return [row, col];
            }
        }
    }
}