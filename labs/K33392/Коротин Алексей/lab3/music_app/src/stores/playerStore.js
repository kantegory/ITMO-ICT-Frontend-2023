import { defineStore } from 'pinia'
import { playlistApi } from '@/api/index'

export const playerStore = defineStore('player', {
    state: () => ({
        currentSong: {
            id: 168295413,
            title: "Song name",
            artist: {
                name: "Artist"
            },
            cover: "https://placekitten.com/50/50"
        },
        currentSongIndex: 0,
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

        changeCurrentIndex(index) {
            index = index < 0 ? this.queue.length + index : index;
            this.currentSongIndex = index % this.queue.length;
            this.currentSong = this.queue[this.currentSongIndex];
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