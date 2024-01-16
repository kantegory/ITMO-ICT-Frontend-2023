
const playerModule = {
  state: () => ({
    currentSong: null,
    playlist: [],
  }),
  getters: {
    getCurrentSong(state) {
      return state.playlist[state.currentSong]
    },
    getCurrentSongIndex(state) {
      return state.currentSong
    },
  },
  mutations: {
    setCurrentSong(state, songIndex) {
      state.currentSong = songIndex
    },
    addToPlaylist(state, song) {
      state.playlist.push(song)
    },
    setPlaylist(state, playlist) {
      state.playlist = playlist
    },
  },
  actions: {
    setCurrentSong(context, song) {
      context.state.playlist = [song]

      context.commit('setCurrentSong', 0)
    },
    addToPlaylist(context, song) {
      context.commit('addToPlaylist', song)
    },

    setCurrentPlaylist(context, playlist, play = true) {
      context.commit('setPlaylist', playlist)

      if (play) {
        context.commit('setCurrentSong', 0)
      }
    },

    playNextSong(context) {
      let currentSongIndex = context.getters.getCurrentSongIndex

      if (context.state.playlist.length > currentSongIndex + 1) {
        context.commit('setCurrentSong', currentSongIndex + 1)
      }
    },
    playPreviousSong(context) {
      let currentSongIndex = context.getters.getCurrentSongIndex

      if (currentSongIndex > 0) {
        context.commit('setCurrentSong', currentSongIndex - 1)
      }
    },
  },
  namespaced: true
}

export default playerModule