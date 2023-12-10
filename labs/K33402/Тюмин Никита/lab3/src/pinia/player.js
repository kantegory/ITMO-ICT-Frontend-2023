import { defineStore } from 'pinia'

const usePlayerStore = defineStore('player', {
  state: () => ({
    currentSong: null,
    playlist: [],
  }),
  getters: {
    getCurrentSong() {
      return this.playlist[this.currentSong]
    },
  },
  actions: {
    setCurrentSong(song) {
      this.playlist = [song]

      this.currentSong = 0
    },
    addToPlaylist(song) {
      this.playlist.push(song)
    },

    setCurrentPlaylist(playlist, play = true) {
      this.playlist = playlist

      if (play) {
        this.currentSong = 0
      }
    },

    playNextSong() {
      if (this.playlist.length > this.currentSong + 1) {
        this.currentSong += 1
      }
    },
    playPreviousSong() {
      if (this.currentSong > 0) {
        this.currentSong -= 1
      }
    },
  },
})

export default usePlayerStore