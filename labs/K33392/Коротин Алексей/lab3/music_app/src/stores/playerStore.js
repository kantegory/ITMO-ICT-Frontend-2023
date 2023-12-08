import { defineStore } from 'pinia'
import { playlistApi } from '@/api/index'

export const playerStore = defineStore('player', {
    state: () => ({
        currentSong: {
            id: 168295413,
            name: "Song name",
            artist: "Artist",
            cover: "https://placekitten.com/50/50"
        },
        queue: [],
        playlists: [{
            id: 1,
            name: "Test playlist"
        }]
    }),

    actions: {
        enqueue(song) {
            this.queue.push(song);
        },

        async loadPlaylists(token) {
            const playlists = await playlistApi.getPlaylists(token);
            if (playlists.data) {
                this.playlists = playlists.data;
            }
            return playlists;
        }
    }

});