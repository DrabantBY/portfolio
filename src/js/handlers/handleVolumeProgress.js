import svgData from "../svgData";

export const handleVolumeProgress = (e, audio, btnSound) => {

    const progress = e.currentTarget;

    audio.volume = (e.offsetX / progress.offsetWidth);

    progress.value = audio.volume;

    if(progress.value === 0) {

        btnSound.innerHTML = svgData.volumeOff;

        audio.muted === false && (audio.muted = true);

    } else {
        
        btnSound.innerHTML = svgData.volumeOn;

        audio.muted && (audio.muted = !audio.muted);
    }
}