import svgData from "../svgData"

export const handleBtnSound = (e, audio, volumeProgress) => {

    const btnSound = e.currentTarget; 
    const volume = audio.volume;

    if(audio.muted) {

        audio.muted = !audio.muted;
        audio.volume = volume || 0.5;

        volumeProgress.value = volume || 0.5;

        btnSound.innerHTML = svgData.volumeOn;

    } else {

        audio.muted = !audio.muted;

        volumeProgress.value = 0;

        btnSound.innerHTML = svgData.volumeOff;
    }
}