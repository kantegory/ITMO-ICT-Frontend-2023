<template>
  <div class="container">

    <div class="row filters-block">
      <button
        class="col-1 filters-block__filters_item"
        :class="{'filters-block__filter_item_active': isFilterActive('songs')}"
        @click="changeFilter('songs')"
      >
        Songs
      </button>
      <button
        class="col-1 filters-block__filters_item"
        :class="{'filters-block__filter_item_active': isFilterActive('playlists')}"
        @click="changeFilter('playlists')"
      >
        Playlists
      </button>
      <button
        class="col-1 filters-block__filters_item"
        :class="{'filters-block__filter_item_active': isFilterActive('artists')}"
        @click="changeFilter('artists')"
      >
        Artists
      </button>
    </div>

    <div v-show="showSongs">
      <h4 class="pt-5 pb-2">Songs</h4>
      <song-row-component
        v-for="song in songsFiltered"
        :song="song"
      />
    </div>

    <div v-show="showPlaylists">
      <h4 class="pt-5 pb-3">Playlists</h4>

      <div class="row">
        <playlist-card-component
          v-for="playlist in playlistsFiltered"
          :playlist="playlist"
        />
      </div>
    </div>
  </div>
</template>

<script>
import DB from '@/services/db'
import SongRowComponent from "@/components/songs/SongRowComponent.vue";
import PlaylistCardComponent from "@/components/playlists/PlaylistCardComponent.vue";

export default {
  components: {
    SongRowComponent,
    PlaylistCardComponent,
  },

  data: () => ({
    songs: [],
    playlists: [],
    filter: null,
  }),

  computed: {
    query() {
      return this.$route.query.q
    },

    songsFiltered() {
      return this.songs.filter(el => {
        if (!this.query) {
          return true
        }

        let regexp = new RegExp(this.query.toLowerCase())

        if (regexp.test(el.name.toLowerCase())) {
          return true
        }
        if (regexp.test(el.artist.name.toLowerCase())) {
          return true
        }

        return false
      })
    },

    playlistsFiltered() {
      return this.playlists.filter(el => {
        if (!this.query) {
          return true
        }

        let regexp = new RegExp(this.query.toLowerCase())

        if (regexp.test(el.name.toLowerCase())) {
          return true
        }

        return false
      })
    },
    showSongs() {
      return this.songsFiltered && this.songsFiltered.length > 0 && (this.filter === null || this.filter === 'songs')
    },
    showPlaylists() {
      return this.playlistsFiltered && this.playlistsFiltered.length > 0 && (this.filter === null || this.filter === 'playlists')
    },
  },

  watch: {
    query() {
      this.getSongs()
      this.getPlaylists()
    }
  },

  mounted() {
    this.getSongs()
    this.getPlaylists()
  },

  methods: {
    async getSongs() {
      DB.index('songs', ['artist'], ['cover', 'audio']).then(songs => {
        this.songs = songs
      })
    },

    getPlaylists() {
      DB.getPlaylists().then(playlists => {
        this.playlists = playlists
      })
    },

    changeFilter(filter) {
      if (this.filter === filter) {
        this.filter = null
      } else {
        this.filter = filter
      }
    },

    isFilterActive(filter) {
      return this.filter === filter
    }
  },
}
</script>

<style scoped>
hr {
  color: var(--header-color);
  margin: 10px;
}
.filters-block__filters_item {
  background-color: var(--header-color);
  border-radius: 15px;
  text-align: center;
  margin: 0 5px 0 5px;
}
.filters-block__filter_item_active {
  background-color: var(--text-color);
}
</style>