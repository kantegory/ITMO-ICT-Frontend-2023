let iconPlay = document.getElementById("icon-play");
let iconPause = document.getElementById("icon-pause");
let progressBar = document.getElementById("music-progress-bar");
let volumeRange = document.getElementById("volume-range");
let currentSong = {
    audio: new Audio("/res/audio/bones.mp3"),
    name: "AllDressedUpToGoDreaming",
    artist: "BONES"
};

document.getElementById("music-progress-bar-total").addEventListener("click", (e) => {
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let width = e.currentTarget.clientWidth;
    let current = currentSong.audio.duration * (x / width);
    currentSong.audio.currentTime = current;
});


volumeRange.addEventListener("input", () => {
    currentSong.audio.volume = volumeRange.value / 100;
});

iconPlay.addEventListener("click", () => {
    iconPlay.hidden = true;
    iconPause.hidden = false;
    document.getElementById("song-name").textContent = currentSong.name;
    document.getElementById("song-author").textContent = currentSong.artist;
    currentSong.audio.play();
    currentSong.audio.addEventListener("timeupdate", () => {
        let total = currentSong.audio.duration;
        let current = currentSong.audio.currentTime;

        let frac = current / total * 100;

        progressBar.style = "width: " + frac + "%;"
    });
});

iconPause.addEventListener("click", () => {
    iconPause.hidden = true;
    iconPlay.hidden = false;
    currentSong.audio.pause();
});