<template>
  <div :class="{ 'top-song': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }" v-if="song">
    <h3>{{ song.title }}</h3>
    <p>{{ song.artist }}</p>
  </div>
  <div class="top-song-placeholder" v-else></div>
</template>

<script>
export default {
  name: 'TopSongItem',
  props: {
    song: Object,
    isDarkTheme: Boolean
  }
}
</script>

<style scoped>
/* Styles for TopSongItem.vue */
.top-song {
  border: 1px solid #ccc;
  padding: 10px;
  border-radius: 5px;
  margin-bottom: 10px;
}

.top-song-placeholder {
  width: 150px;
  height: 100px;
  border: 1px solid #ccc;
  border-radius: 5px;
  margin-bottom: 10px;
}

.light-theme .top-song {
  background-color: #ffffff;
}

.dark-theme .top-song {
  background-color: #222222;
  color: #ffffff;
}

.light-theme .top-song-placeholder,
.dark-theme .top-song-placeholder {
  background-color: #f2f2f2;
}
</style>