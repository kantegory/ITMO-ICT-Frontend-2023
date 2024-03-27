<template>
  <div class="song-item" :class="{ 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
    <h3>{{ song.title }}</h3>
    <p>{{ song.artist }}</p>
    <audio controls :src="song.audio"></audio>
    <button @click="addToFavorites">Add to Favorites</button>
  </div>
</template>

<script>

export default {
  name: 'SongItem',
  props: {
    song: Object,
    isDarkTheme: Boolean
  },
  methods: {
    addToFavorites() {
      // Implement logic to add song to favorites using Vuex
    }
  }
}
</script>

<style scoped>
/* Styles for SongItem.vue */
.song-item {
  border: 1px solid #ccc;
  padding: 20px;
  border-radius: 5px;
}

.light-theme .song-item {
  background-color: #ffffff;
}

.dark-theme .song-item {
  background-color: #222222;
  color: #ffffff;
}

.song-item h3 {
  margin-bottom: 5px;
}

.song-item p {
  margin-bottom: 10px;
}

.song-item audio {
  margin-bottom: 10px;
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