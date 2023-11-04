<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-2">
        <img class="__profile_image" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt=""/>
      </div>
      <div class="col-4">
        <h2>{{ user.name }}</h2>
      </div>
    </div>

    <h4 class="pt-5 pb-2">Last listened to</h4>
    <song-row-component
      @addedToFav="getPlaylists"
      v-for="song in songs"
      :song="song"
    />

    <h4 class="pt-5 pb-3">My playlists</h4>

    <div class="row">
      <playlist-card-component
        v-for="playlist in playlists"
        :playlist="playlist"
      />
    </div>

  </div>
</template>

<script>
import DB from '@/services/db'
import SongRowComponent from "@/components/songs/SongRowComponent.vue";
import PlaylistCardComponent from "@/components/playlists/PlaylistCardComponent.vue";
import { mapGetters } from 'vuex'

export default {
  components: {
    SongRowComponent,
    PlaylistCardComponent,
  },

  data: () => ({
    songs: [],
    playlists: [],
  }),

  computed: {
    ...mapGetters({
      user: 'auth/getUser',
    })
  },

  mounted() {
    this.getSongs()
    this.getPlaylists()
  },

  methods: {
    getSongs() {
      DB.index('songs', ['artist'], ['cover', 'audio']).then(res => {
        this.songs = res
      })
    },

    getPlaylists() {
      DB.getPlaylists(this.user.uid).then(playlists => {
        this.playlists = playlists
      })
    }
  },
}
</script>

<style scoped>
.__profile_image {
  padding:0;
  height: 130px;
  width:130px;
  border-radius: 50%;
}
hr {
  color: #FAF0E6;
  margin: 10px;
}
</style>