export const updateScore = (label) => {

    const score = document.body.querySelector('.score');

    let points = 5 - label.closest('ul').querySelectorAll('.wrong').length;
    
    score.textContent = `Score: ${parseInt(score.textContent.slice(-2)) + points}`;

}