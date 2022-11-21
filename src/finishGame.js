export const finishGame = (matrix, time, amount, timer, board) => {

    const current = matrix.flat();
    const winner = matrix.flat().sort((a, b) => a - b);
    const isWinner = JSON.stringify(current) === JSON.stringify(winner);

    if (isWinner) {

        const timeData = time.textContent;
        const amountData = amount.textContent;

        alert(`Hooray! You solved the puzzle in ${timeData} and ${amountData} moves!`);

        const data = { timeData, amountData };

        let results = JSON.parse(localStorage.getItem('winners'));

        clearInterval(timer);
        board.onclick = null;
        board.ondragover = null;
        board.onmouseover = null;
        board.onmouseout = null;
        board.ondrop = null;

        if(results) {

            results.push(data);
            results.sort((a, b) => {

                if(a.timeData === b.timeData) return a.amountData - b.amountData; 
            
                const timeA = parseInt(a.timeData.split(':').join(''));
                const timeB = parseInt(b.timeData.split(':').join(''));
        
                return timeA - timeB;
            });

            results.length > 10 && (results.length = 10);
            localStorage.setItem('winners', JSON.stringify(results));

        } else {
            localStorage.setItem('winners', JSON.stringify([data]));
        }
    }
}