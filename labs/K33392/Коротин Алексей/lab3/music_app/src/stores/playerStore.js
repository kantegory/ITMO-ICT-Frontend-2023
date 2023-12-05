import { defineStore } from 'pinia'

export const playerStore = defineStore('player', {
    state: () => ({
        currentSong: {
            name: "Song name",
            artist: "Artist",
            cover: "https://placekitten.com/50/50"
        },
        queue: []  
    }),

    actions: {
        enqueue(song) {
            this.queue.push(song);
        }
    }

});