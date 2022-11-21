import { birdDescription } from '../components/birdDescription';

export const handleClickList = (e) => {

    const label = e.target;

    if(label.tagName === 'LABEL') {
        const answerIndex = label.dataset.id;
        const questionIndex = label.closest('ul').previousElementSibling.dataset.index;
        birdDescription(questionIndex, answerIndex);
    }
}