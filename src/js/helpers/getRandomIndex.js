import birdsData from "../birdsData";

export const getRandomIndex = () => {

    const size = birdsData[0].length;
    
    return Math.floor(Math.random() * size);
}
