export const getWinnerList = () => {
    
    const winners = JSON.parse(localStorage.getItem('winners'));

    if(winners) {

        const list = winners.reduce((acc, obj, i) => acc + `${i + 1}) time: ${obj.timeData}, moves: ${obj.amountData}\n`, '');

        alert('TOP 10 RESULTS:\n' + list);

    } else {

        alert ('If you want to see the results list\nyou have to finish the game and win!\nGood Luck!')
    }
}