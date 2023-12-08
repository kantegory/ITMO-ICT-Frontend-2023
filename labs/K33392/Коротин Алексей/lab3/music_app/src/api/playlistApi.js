export class PlaylistApi {
    constructor(api) {
        this.api = api;
    }

    async getPlaylists(accessToken) {
        const options = {
            method: 'GET',
            headers: {Authorization: `Bearer ${accessToken}`},
            url: '/600/playlists?_embed=tracks'
        }

        return this.api(options);
    }

    async getPlaylist(accessToken, playlistId) {
        const options = {
            method: 'GET',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            url: `/600/playlists/${playlistId}?_embed=tracks`
        }

        return this.api(options);
    }

    async createPlaylist(accessToken, playlist) {
        const options = {
            method: 'POST',
            headers: {Authorization: `Bearer ${accessToken}`},
            url: '/600/playlists',
            data: playlist
        }

        return this.api(options);
    }

    async createPlaylist(accessToken, track, playlistId) {
        track.playlistId = playlistId;
        
        const options = {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            url: '/600/tracks',
            data: track
        }

        return this.api(options);
    }
}