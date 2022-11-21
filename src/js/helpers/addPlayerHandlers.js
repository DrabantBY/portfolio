import { handleBtnPlay } from '../handlers/handleBtnPlay';
import { handleBtnSound } from "../handlers/handleBtnSound";
import { handleTimeUpdate } from "../handlers/handleTimeUpdate";
import { handleStateProgress } from "../handlers/handleStateProgress";
import { handleVolumeProgress } from '../handlers/handleVolumeProgress';
import { handleAudioEnd } from "../handlers/handleAudioEnd";

export const addPlayerHandlers = (parent) => {

    const btnPlay = parent.querySelector('.btn-play');
    const btnSound = parent.querySelector('.btn-sound');

    const audio = parent.querySelector('audio');

    const [stateProgress, volumeProgress] = parent.querySelectorAll('progress');
    const time = [...parent.querySelectorAll('time')];

    btnPlay.onclick = (e) => handleBtnPlay(e, audio, volumeProgress);
    btnSound.onclick = (e) => handleBtnSound(e, audio, volumeProgress);

    audio.ontimeupdate = (e) => handleTimeUpdate(e, stateProgress, time );
    audio.onended = (e) => handleAudioEnd(e, btnPlay, btnSound, stateProgress, volumeProgress, time);

    stateProgress.onclick = (e) => handleStateProgress(e, audio, time);
    volumeProgress.onclick = (e) => handleVolumeProgress(e, audio, btnSound);
}