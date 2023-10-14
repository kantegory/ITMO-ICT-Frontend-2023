import {search} from './api.js';
import Artist from "../components/search/Artist.js";
import Track from "../components/search/Track.js";
import { startAudio } from './footer.js';

let searchBar = document.getElementById("search-form");
let artistContainer = document.getElementById("container-artist");
let trackContainer = document.getElementById("container-track");


const fillArtists = (result) => {
    let totalArtists = result.data.data.map((a) => {
        return JSON.stringify({
            name: a.artist.name,
            genre: "Genre",
            picture: a.artist.picture_big
        });
    });
    totalArtists = Array.from(new Set(totalArtists)).slice(0, 5);
    totalArtists = totalArtists.map(a => JSON.parse(a));
    const artists = totalArtists.map((a) => Artist(a.name, a.genre, a.picture));
    artistContainer.replaceChildren(...artists);
}

const fillTracks = (result) => {
    result = result.data.data.slice(0, 10);

    const tracks = result.map((t) => {
        let minutes = Math.floor(t.duration / 60);
        let seconds = Math.floor(t.duration - minutes * 60);
        seconds = seconds < 10 ? `0${seconds}`: String(seconds);
        let track = Track(t.title, t.artist.name, `${minutes}:${seconds}`, t.album.cover_small);
        return track;
    });

    trackContainer.replaceChildren(...tracks);

    const topLevelChildren = document.querySelectorAll("#container-track > div"); 


    topLevelChildren.forEach((node, index) => {
        node.addEventListener("click", (e) => {
            window.localStorage.currentTrackIndex = index;
            window.localStorage.lastSearched = JSON.stringify(result);
            startAudio();
        });
    });
    return result;
}

const searchFunction = async () => {
    const text = searchBar.value;
    const result = await search(text);
    fillArtists(result);
    fillTracks(result);
}

searchBar.addEventListener("keypress", (e) => {
    if (e.key !== "Enter") {
        return;
    }

    searchFunction();
});

