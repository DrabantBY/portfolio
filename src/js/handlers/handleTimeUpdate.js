import { setTime } from "../helpers/setTime";

export const handleTimeUpdate = (e, state, time) => {

    const audio = e.currentTarget;

    state.value = audio.currentTime / audio.duration;
    
    setTime(time, audio);
}