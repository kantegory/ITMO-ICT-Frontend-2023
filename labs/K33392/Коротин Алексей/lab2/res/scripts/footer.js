const iconPlay = document.getElementById("icon-play");
const iconPause = document.getElementById("icon-pause");
const iconPrevious = document.getElementById("icon-play-previous");
const iconNext = document.getElementById("icon-play-next");
const progressBar = document.getElementById("music-progress-bar");
const volumeRange = document.getElementById("volume-range");
let currentSong = null;

document.getElementById("music-progress-bar-total").addEventListener("click", (e) => {
    if (currentSong === null) {
        return;
    }
    let rect = e.currentTarget.getBoundingClientRect();
    let x = e.clientX - rect.left; //x position within the element.
    let width = e.currentTarget.clientWidth;
    let current = currentSong.audio.duration * (x / width);
    currentSong.audio.currentTime = current;
});

const volumeChange = () => {
    if (currentSong === null) {
        return;
    }
    currentSong.audio.volume = volumeRange.value / 100;
};

volumeRange.addEventListener("input", volumeChange);

export const startAudio = () => {
    if (currentSong !== null) {
        currentSong.audio.pause();
    }
    let song = JSON.parse(window.localStorage.lastSearched)[window.localStorage.currentTrackIndex];
    if (currentSong === null || ((song.title !== currentSong.name) || (song.artist.name !== currentSong.artist))) {
        currentSong = {
            audio: new Audio(song.preview),
            name: song.title,
            artist: song.artist.name,
            cover: song.album.cover_small
        };
    }
    volumeChange();

    iconPlay.hidden = true;
    iconPause.hidden = false;
    document.getElementById("song-name").textContent = currentSong.name;
    document.getElementById("song-author").textContent = currentSong.artist;
    document.getElementById("track-cover").src = currentSong.cover;
    currentSong.audio.play();
    currentSong.audio.addEventListener("timeupdate", () => {
        let total = currentSong.audio.duration;
        let current = currentSong.audio.currentTime;

        let frac = current / total * 100;

        progressBar.style = "width: " + frac + "%;"
    });

    currentSong.audio.addEventListener("ended", playNext);
};

iconPlay.addEventListener("click", startAudio);

iconPause.addEventListener("click", () => {
    iconPause.hidden = true;
    iconPlay.hidden = false;
    currentSong.audio.pause();
});

const playNext = () => {
    window.localStorage.currentTrackIndex = (++window.localStorage.currentTrackIndex) % JSON.parse(window.localStorage.lastSearched).length;
    startAudio();
};

iconNext.addEventListener("click", playNext);

iconPrevious.addEventListener("click", () => {
    const newIndex = window.localStorage.currentTrackIndex - 1;
    window.localStorage.currentTrackIndex = newIndex < 0 ? JSON.parse(window.localStorage.lastSearched).length + newIndex : newIndex;
    startAudio();
});