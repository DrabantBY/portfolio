export const canWin = (numbers) => {
    let value = 0;

    for(let i = 0; i < numbers.length; i ++) {

        if (numbers[i] === numbers.length) {

            value += numbers.length % 2 ? 0 : (Math.ceil(i / Math.sqrt(numbers.length)) || 1);

        } else {

            for (let j = i + 1; j < numbers.length; j++) {

                numbers[i] > numbers[j] && value++;
            }
        }
    }
    
    return value % 2 === 0;
}

