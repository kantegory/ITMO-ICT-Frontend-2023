<template>
  <div :class="{ 'top-songs': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
    <h2 :class="titleClass">Top Songs</h2>
    <div v-for="song in topSongs" :key="song.id" class="top-song">
      <h3>{{ song.title }}</h3>
      <p>{{ song.artist }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TopSongs',
  props: {
    topSongs: Array,
    isDarkTheme: Boolean
  },
  computed: {
    titleClass() {
      return this.isDarkTheme ? 'text-light' : 'text-dark';
    }
  }
}
</script>

<style scoped>
/* Styles for TopSongs.vue */
.top-songs {
  /* Add common styles here */
}

.text-light {
  color: #ffffff; /* Change text color for light theme */
}

.text-dark {
  color: #000000; /* Change text color for dark theme */
}

/* Add other styles here */
</style>