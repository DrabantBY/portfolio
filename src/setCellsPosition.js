export const setCellsPosition = (matrix) => {

    const cells = document.body.querySelectorAll('.cell');
   
    for (let row = 0; row < matrix.length; row++) {

        for (let col = 0; col < matrix[0].length; col++) {

            const number = matrix[row][col];
            
            cells[number - 1].style.transform = `translate(${col * 100}%, ${row * 100}%)`;
        }
    }
}
