<template>
  <div class="container">
    <div class="row align-items-center">
      <div class="col-2">
        <img class="profile_image" src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp" alt=""/>
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
import { mapStores } from 'pinia'
import useAuthStore from "../pinia/auth";

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
    ...mapStores(useAuthStore),
    user() {
      return this.authStore.user
    }
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
.profile_image {
  padding:0;
  height: 130px;
  width:130px;
  border-radius: 50%;
}
hr {
  color: var(--header-color);
  margin: 10px;
}
</style>