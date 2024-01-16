<template>
  <div class="container" v-if="!progress">
    <div class="music__section">
      <h2>Songs for you</h2>

      <div class="row">
        <song-card-component
          v-for="song in songs"
          :song="song"
        >
        </song-card-component>
      </div>
    </div>

  </div>
</template>

<script>
import DB from '@/services/db'
import SongCardComponent from "@/components/songs/SongCardComponent.vue";

export default {
  components: { SongCardComponent },

  data: () => ({
    progress: true,
    songs: null,
  }),

  mounted() {
    this.getSongs()
  },

  methods: {
    getSongs() {
      DB.index('songs', ['artist'], ['cover', 'audio']).then(res => {
        this.songs = res
        this.progress = false
      })
    },
  },
}
</script>

<style scoped>
.music__section {
  margin-top: 60px;
}
</style>