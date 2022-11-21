export const playAudioAfterChange = (link) => {
    const audio = new Audio(link);
    audio.play();
    audio.onended = () => audio.remove();
}