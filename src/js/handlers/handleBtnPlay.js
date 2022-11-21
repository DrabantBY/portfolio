import svgData from "../svgData";

export const handleBtnPlay = (e, audio, progress) => {

    const target = e.target.closest('button');

    audio.volume = progress.value;

    if(audio.paused) {

        audio.play();

        target.innerHTML = svgData.pause;

    } else {
        
        audio.pause();

        target.innerHTML = svgData.play;
    }
}