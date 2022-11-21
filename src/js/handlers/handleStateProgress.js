import { setTime } from "../helpers/setTime";

export const handleStateProgress = (e, audio, time) => {

    const progress = e.currentTarget;

    audio.currentTime = (e.offsetX / progress.offsetWidth) * audio.duration;

    progress.value = audio.currentTime;
    
    setTime(time, audio);
}