const createCell = (number, width, length) => {

    const cell = document.createElement('li');

    number = number < 10 ? `0${number}` : `${number}`;

    cell.className = 'cell main__cell';

    cell.dataset.value = number;

    cell.style.width = width;
    cell.style.height = width;

    cell.innerHTML = parseInt(number) === length ? '' : `<button class="cell-btn" type="button">${number}</button>`;

    parseInt(number) === length && (cell.style.display = 'none');

    return cell;
}

export const buildBoard = (size) => {
    
    const length = size ** 2;

    const width = 100 / size + '%';

    return Array.from({ length }, (_, i) => createCell(i + 1, width, length));
}