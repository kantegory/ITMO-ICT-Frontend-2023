<template>
  <div
    class="col-12 col-xl-2 col-md-4"
  >
    <div class="image-cover">
      <div class="image-cover__hover_content">
        <play-icon class="image-cover__play_icon" @click="play"/>
      </div>
      <img
        :src="song.cover_url"
        class="card-img-top __image"
      >
    </div>
    <div class="image-cover__song_info">
      <div>
        <h5>{{ song.name }}</h5>
        <p>{{ song.artist.name }}</p>
      </div>

      <div class="dropdown show">
        <button role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <three-dots-icon/>
        </button>
        <div class="dropdown-menu" aria-labelledby="dropdownMenuLink">
          <a class="dropdown-item" href="#" @click.prevent="addToCurrentPlaylist">Add to current playlist</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapStores } from "pinia";
import usePlayerStore from "../../pinia/player";

export default {
  props: {
    song: { type: Object, required: true },
  },

  computed: {
    ...mapStores(usePlayerStore)
  },

  methods: {
    play() {
      this.playerStore.setCurrentSong(this.song)
    },
    addToCurrentPlaylist() {
      this.playerStore.addToPlaylist(this.song)
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
.image-cover__play_icon {
  position: relative;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
}
.image-cover__song_info {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.image-cover__song_info:hover .__dots_icon {
  opacity: 100%;
}
.__dots_icon {
  opacity: 0;
  transition: 0.3s;
}
</style>