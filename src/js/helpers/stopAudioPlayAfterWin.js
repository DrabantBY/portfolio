import svgData from '../svgData';

export const stopAudioPlayAfterWin = () => {

    const audio = document.body.querySelector('audio');

    const btnPlay = document.body.querySelector('.btn-play');

    if(!audio.paused) {

        audio.pause();

        btnPlay.innerHTML = svgData.play;
    }
}