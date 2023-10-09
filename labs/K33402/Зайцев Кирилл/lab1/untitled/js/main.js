
document.getElementById('playButton').addEventListener('click', function () {
    const audio = document.getElementById('musicPlayer');
    audio.play();
});

document.getElementById('pauseButton').addEventListener('click', function () {
    const audio = document.getElementById('musicPlayer');
    audio.pause();
});

document.getElementById('volumeControl').addEventListener('input', function () {
    const audio = document.getElementById('musicPlayer');
    audio.volume = this.value;
});
