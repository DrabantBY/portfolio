export const handleTime = (time) => {

    let [min, sec] = time.textContent.split(':').map(Number);

    sec++;

    sec === 60 && ++min && (sec = 0);
    
    sec = sec < 10 ? `0${sec}` : sec;
    min = min < 10 ? `0${min}` : min;

    time.textContent = `${min}:${sec}`;
}