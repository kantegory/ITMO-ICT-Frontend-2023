import { getPlaylists, getPlaylist, createPlaylist } from "./api.js";
import Playlist from "/res/components/collection/Playlist.js";
import Track from "../components/search/Track.js";
import { startAudio } from "./footer.js";

const usernameField = document.getElementById("field-username");
const playlistContainer = document.getElementById("container-playlists");
const playlistForm = document.getElementById("form-playlist-modal");
const modalTrackContainer = document.getElementById("modal-track-container");
const playlistTitle = document.getElementById("title-playlist");
const searchBar = document.getElementById("search-form");

searchBar.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
        return;
    }

    const text = searchBar.value;

    window.location = `/pages/search.html?q=${text}`;
});

const playlistOnClick = async (playlistId) => {
    let result = await getPlaylist(window.localStorage.accessToken, playlistId);
    if (result.status === 304) { //not changed => use cached
        result = JSON.parse(window.localStorage.playlists).find((p) => p.id == playlistId);
    } else {
        result = result.data;
    }
    const tracks = result.tracks.map((t) => {
        let minutes = Math.floor(t.duration / 60);
        let seconds = Math.floor(t.duration - minutes * 60);
        seconds = seconds < 10 ? `0${seconds}`: String(seconds);
        let track = Track(t.title, t.artist.name, `${minutes}:${seconds}`, t.album.cover_small);
        return track;
    });

    playlistTitle.innerText = result.name;

    modalTrackContainer.replaceChildren(...tracks);

    const topLevelChildren = document.querySelectorAll("#modal-track-container > div"); 


    topLevelChildren.forEach((node, index) => {
        node.addEventListener("click", (e) => {
            window.localStorage.currentTrackIndex = index;
            window.localStorage.lastSearched = JSON.stringify(result.tracks);
            startAudio();
        });
    });
    }

const loadPlaylists = async () => {
    let playlists = await getPlaylists(window.localStorage.accessToken);
    
    if (playlists.status === 304) { // not changed => use cached
        playlists = JSON.parse(window.localStorage.playlists);
    } else { // changed
        window.localStorage.playlists = JSON.stringify(playlists.data);
        playlists = playlists.data;
    }

    if (playlists.length === 0) {
        const playlist = {
            name: "Liked",
            description: "Your favourite tracks",
            userId: JSON.parse(window.localStorage.user).id
        };
        await createPlaylist(window.localStorage.accessToken, playlist);
        await loadPlaylists();
        return;
    }

    playlists = playlists.map((p) => Playlist(p.id, p.name, p.description));
    playlistContainer.replaceChildren(...playlists);

    const DOMPlaylists = playlistContainer.querySelectorAll(".card");
    console.log(DOMPlaylists.length);
    for (const playlist of DOMPlaylists) {
        playlist.addEventListener("click", () => {
            playlistOnClick(playlist.getAttribute("playlistid"));
        })
    }
}

const onSubmit = async (event) => {
    await event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll("input"));

    const playlist = {};

    for (const input of inputs) {
        playlist[input.name] = input.value;
    }

    playlist["userId"] = JSON.parse(window.localStorage.user).id;

    createPlaylist(window.localStorage.accessToken, playlist);
    event.target.reset();

    window.location.reload();
}

playlistForm.addEventListener("submit", onSubmit);
usernameField.innerText = JSON.parse(window.localStorage.user).email;
loadPlaylists();