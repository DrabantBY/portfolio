const getTime = (time) => {

    if(!time) return '00:00';
    
    let sec = Math.floor(time % 60);
    sec < 10 && (sec = '0' + sec);

    let min = Math.floor(time / 60);
    min < 10 && (min = '0' + min);

    return min + ':' + sec;
}

export const setTime = ([nowTime, allTime], audio) => {

    allTime.textContent = getTime(audio?.duration);
    
    nowTime.textContent = getTime(audio?.currentTime);
}