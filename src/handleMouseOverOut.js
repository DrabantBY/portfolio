import { getPositionInMatrix } from "./getPositionInMatrix";

export const handleMouseOverOut = (event, matrix, status) => {

    const target = event.target.closest('.cell');

    if (!target) return;

    const locations = getPositionInMatrix(target, matrix);

    if(locations) {
        target.draggable = !target.draggable;
        target.ondragstart = status ? (e) => e.dataTransfer.setData('locations', JSON.stringify(locations)) : status;
    }

}