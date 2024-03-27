<template>
  <div class="song-list">
    <div v-for="song in songs" :key="song.id" class="song-item" :class="{ 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
      <h3>{{ song.title }}</h3>
      <p>{{ song.artist }}</p>
      <audio controls :src="song.audio"></audio>
      <button @click="addToFavorites(song)">Add to Favorites</button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SongList',
  props: {
    songs: Array,
    isDarkTheme: Boolean
  },
  methods: {
    addToFavorites(song) {
      // Implement logic to add song to favorites using Vuex
    }
  }
}
</script>

<style scoped>
/* Styles for SongList.vue */
.song-item {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.light-theme .song-item {
  background-color: #ffffff;
}

.dark-theme .song-item {
  background-color: #222222;
  color: #ffffff;
}

.song-item h3 {
  margin: 0;
}

.song-item audio {
  margin-top: 10px;
}

.song-item button {
  padding: 5px 10px;
  background-color: #007bff;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  cursor: pointer;
}

.song-item button:hover {
  background-color: #0056b3;
}

</style>