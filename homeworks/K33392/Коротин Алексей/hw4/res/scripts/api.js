import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm';

const apiKeys = await fetch("/res/API_KEY.json")
                .then((r) => r.json());

export const search = async (query) => {
    const options = {
        method: 'GET',
        url: 'https://deezerdevs-deezer.p.rapidapi.com/search',
        params: {q: query},
        headers: apiKeys
    };

    return await axios.request(options);
};


export const getPlaylists = async (accessToken) => {
    const options = {
        method: "GET",
        headers: {Authorization: `Bearer ${accessToken}`},
        url: "http://localhost:3000/600/playlists?_embed=tracks"
    }

    return await axios.request(options);
}


export const getPlaylist = async (accessToken, playlistId) => {
    const options = {
        method: "GET",
        headers: {Authorization: `Bearer ${accessToken}`},
        url: `http://localhost:3000/600/playlists/${playlistId}?_embed=tracks`
    }

    return await axios.request(options);
}

export const createPlaylist = async (accessToken, playlist) => {
    const options = {
        method: "POST",
        headers: {Authorization: `Bearer ${accessToken}`},
        url: "http://localhost:3000/600/playlists",
        data: playlist
    }

    return await axios.request(options);
}

export const likeTrack = async (accessToken, track) => {
    const options = {
        method: "POST",
        headers: {Authorization: `Bearer ${accessToken}`},
        url: "http://localhost:3000/600/tracks",
        data: track
    }

    return await axios.request(options);
}