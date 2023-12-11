import { defineStore } from 'pinia'
import { playlistApi, trackApi } from '@/api/index'

export const playerStore = defineStore('player', {
    state: () => ({
        currentSong: {
            id: 168295413,
            title: "Song name",
            artist: {
                name: "Artist"
            },
            album: {
                cover: "https://placekitten.com/50/50"
            }
        },
        currentSongIndex: 0,
        queue: [{
            id: 168295413,
            title: "Song name",
            artist: {
                name: "Artist"
            },
            album: {
                cover: "https://placekitten.com/50/50"
            }
        }],
        playlists: [{
            id: 1,
            name: "Test playlist"
        }],
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

        async createPlaylist(token, playlist) {
            const created = await playlistApi.createPlaylist(token, playlist);
            if (playlist.data) {
                await this.loadPlaylists(token);
            }

            return created;
        },


        async loadPlaylists(token) {
            const playlists = await playlistApi.getPlaylists(token);
            if (playlists.data) {
                this.playlists = playlists.data;
            }
            return playlists;
        },

        async likeTrack(token, track) {
            let likedPlaylist = this.playlists.find((p) => p.name === 'Liked');
            if (likedPlaylist === undefined) {
                likedPlaylist = await this.createPlaylist(token, { name: 'Liked', userId: track['userId'] }).data;
            }

            const response = await trackApi.addToPlaylist(token, track, likedPlaylist.id);
            likedPlaylist.tracks.push(response.data);
            return response;
        }
    }

});