<template>
  <div
    class="col-12 col-xl-2 col-md-4"
  >
    <div class="image-cover">
      <div class="image-cover__hover_content">
        <play-icon class="__play_icon" @click="play"/>
      </div>
      <img
        :src="playlist.cover_url"
        class="card-img-top __image"
      >
    </div>
    <div>
      <h5 class="mb-3">{{ playlist.name }}</h5>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import usePlayerStore from "../../pinia/player";

export default {
  props: {
    playlist: { type: Object, required: true },
  },

  computed: {
    ...mapStores(usePlayerStore)
  },

  methods: {
    play() {
      this.playerStore.setCurrentPlaylist(this.playlist.songs)
    },
  }
}
</script>

<style scoped>
.image-cover {
  position: relative;
}
.image-cover:hover .image-cover__hover_content {
  opacity: 60%;
}
.image-cover__hover_content {
  background-color: black;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0;
  transition: 0.3s;
  cursor: pointer;
}
.__play_icon {
  position: relative;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
}
</style>