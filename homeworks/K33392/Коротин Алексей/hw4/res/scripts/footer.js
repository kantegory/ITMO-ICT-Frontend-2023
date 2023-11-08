import { likeTrack } from "./api.js";
import { getPlaylists } from "./api.js";

const iconPlay = document.getElementById("icon-play");
const iconPause = document.getElementById("icon-pause");
const iconPrevious = document.getElementById("icon-play-previous");
const iconNext = document.getElementById("icon-play-next");
const iconLike = document.getElementById("icon-like");
const progressBar = document.getElementById("music-progress-bar");
const iconRepeat = document.getElementById("icon-repeat");
const volumeRange = document.getElementById("volume-range");
let currentSong = null;
window.localStorage.repeat = false;

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

    iconPlay.setAttribute("hidden", "hidden");
    iconPause.removeAttribute("hidden");
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

    currentSong.audio.addEventListener("ended", () => {
        if (!JSON.parse(window.localStorage.repeat)) {
            playNext();
            return;
        }

        currentSong.audio.currentTime = 0;
        currentSong.audio.play();
    });

    markLike();
};

const markLike = async () => {
    const currentId = JSON.parse(window.localStorage.lastSearched)[window.localStorage.currentTrackIndex].id;

    const liked = await getLikedPlaylist();

    for (const track of liked.tracks) {
        if (track.id == currentId) {
            iconLike.classList.add("selected");
            return;
        }
    }

    iconLike.classList.remove("selected");
}

iconPlay.addEventListener("click", startAudio);

iconPause.addEventListener("click", () => {
    iconPause.setAttribute("hidden", "hidden");
    iconPlay.removeAttribute("hidden");
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

iconRepeat.addEventListener("click", () => {
    const isRepeat = JSON.parse(window.localStorage.repeat);
    if (!isRepeat) {
        iconRepeat.classList.add("selected");
    }
    if (isRepeat) {
        iconRepeat.classList.remove("selected");
    }
    console.log(isRepeat);
    window.localStorage.repeat = JSON.stringify(!isRepeat);
});


const getLikedPlaylist = async () => {
    let playlists = await getPlaylists(window.localStorage.accessToken);
    
    if (playlists.status === 304) { // not changed => use cached
        playlists = JSON.parse(window.localStorage.playlists);
    } else { // changed
        window.localStorage.playlists = JSON.stringify(playlists.data);
        playlists = playlists.data;
    }

    return playlists.find(p => p.name === "Liked");
}


const addToLiked = async () => {
    const likedPlaylist = await getLikedPlaylist();
    const track = JSON.parse(window.localStorage.lastSearched)[window.localStorage.currentTrackIndex];

    for (let t of likedPlaylist.tracks) {
        if (t.id === track.id) {
            return;
        }
    }

    iconLike.classList.add("selected");    

    track.userId = JSON.parse(window.localStorage.user).id;
    track.playlistId = likedPlaylist.id;

    likeTrack(window.localStorage.accessToken, track);
}

iconLike.addEventListener("click", addToLiked);