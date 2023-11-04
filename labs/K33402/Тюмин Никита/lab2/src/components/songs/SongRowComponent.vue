<template>
  <div>
    <div class="row __last_listened">
      <div class="__image_cover col-1 __last_listened_image_container">
        <div style="margin:auto; position:relative">
          <div class="__hover_content">
            <play-icon class="__play_icon" @click="play"/>
          </div>

          <img class="__last_listened_image" :src="song.cover_url" alt="">
        </div>
      </div>

      <div class="col-2">
        <h5>{{ song.name }}</h5>
        <p>{{ song.artist.name }}</p>
      </div>
      <div class="col-2 offset-7 __button_container">
        <button>
          <thumb-up-icon @click="addToFavorite"/>
        </button>
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

    <hr>
  </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import db from '@/services/db'

export default {
  props: {
    song: { type: Object, required: true }
  },

  emits: [
    'addedToFav',
  ],

  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    })
  },

  methods: {
    ...mapActions({
      setCurrentSong: 'player/setCurrentSong',
      addToPlaylist: 'player/addToPlaylist',
    }),
    play() {
      this.setCurrentSong(this.song)
    },
    addToCurrentPlaylist() {
      this.addToPlaylist(this.song)
    },
    addToFavorite() {
      db.addToFavorite(this.user.uid, this.song.id).then(() => {
        this.$emit('addedToFav')
      })
    },
  },
}
</script>

<style scoped>
.__play_icon {
  position: relative;
  width: 50%;
  height: 50%;
  top: 25%;
  left: 25%;
}
.__last_listened_image {
  max-height: 50px;
  margin: auto;
}
.__last_listened_image_container {
  display: flex;
  align-items: center;
  align-content: center;
}
.__button_container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
}
.__last_listened {
  max-height: 60px;
}
.__image_cover {
  max-height: 50px;
  position: relative;
}
.__image_cover:hover .__hover_content {
  opacity: 60%;
}
.__hover_content {
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
</style>