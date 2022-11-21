import birdsData from "../birdsData";
import { handleChangeInput } from "../handlers/handleChangeInput";
import { handleClickList } from "../handlers/handleClickList";

const buildAnswer = ({ id, name }) => {

    const item = document.createElement('li');

    item.classList = 'answer main-quiz__answer';

    item.innerHTML = `<label data-id="${id}"><input type="checkbox">${name}</label>`;

    return item;
} 

export const answersList = (index = 0) => {

    const mainContainer = document.body.querySelector('.main-quiz__container');
    const list = document.createElement('ul');
    mainContainer.append(list);

    list.classList = 'answers main-quiz__answers';

    birdsData[index].forEach(item => list.append(buildAnswer(item)));

    list.onchange = (e) => handleChangeInput(e);
    list.onclick = (e) => handleClickList(e);
}