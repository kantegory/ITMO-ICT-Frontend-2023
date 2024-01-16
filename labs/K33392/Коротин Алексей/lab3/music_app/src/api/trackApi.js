export class TrackApi {
    constructor(api) {
        this.api = api;
    }

    async addToPlaylist(accessToken, track, playlistId) {
        track['playlistId'] = playlistId;

        const options = {
           method: 'POST',
            headers: {
                Authorization: `Bearer ${accessToken}`
            },
            url: '/600/tracks',
            data: track
        };

        return this.api(options);
    }
}