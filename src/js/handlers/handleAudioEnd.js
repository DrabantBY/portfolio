import svgData from "../svgData";
import { setTime } from "../helpers/setTime";

export const handleAudioEnd = (e, btnPlay, btnSound, stateProgress, volumeProgress, time) => {

    const audio = e.currentTarget;

    btnPlay.innerHTML = svgData.play;

    btnSound.innerHTML = svgData.volumeOn;

    stateProgress.value = 0;

    volumeProgress.value = 0.5;

    audio.muted && (audio.muted = !audio.muted);

    setTime(time);
}