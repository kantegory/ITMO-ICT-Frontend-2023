<template>
    <main class="container bg-primary column">
        <q-dialog v-model="playlistOpen" transition-show="rotate" transition-hide="rotate">
            <q-card class="modal-dialog">
                <q-card-section class="bg-primary" :key="playlistOpen">
                    <p class="text items-center text-h6 q-mb-sm">{{ playlistName }}</p>
                    <p class="text row flex-center text-h6" v-if="playlistTracks.length === 0">Empty</p>
                    <TrackCard v-for="(track, index) in playlistTracks" v-bind:key="track.id" :id="track.id"
                        :name="track.title" :artist="track.artist.name" :cover="track.album.cover_small"
                        :duration="track.duration" :preview="track.preview" :index="index" @click="onPlayClick" />
                </q-card-section>
                <q-card-actions class="bg-primary" align="right">
                    <q-btn flat label="Close" color="secondary" v-close-popup />
                </q-card-actions>
            </q-card>
        </q-dialog>
        <section class="fit column inline q-pt-xl">
            <div class="row ">
                <div>
                    <img class="gt-xs user-avatar" src="@/assets/collection/avatar.png">
                </div>
                <div class="column justify-center q-pl-lg">
                    <p class="text-accent text-subtitle1">Collection</p>
                    <p class="text-h3 ellipsis text-wrap mw-90 q-pb-xs"> {{ user.email }} </p>
                    <div>
                        <q-btn class="play-collection-button" text-color="primary" rounded color="secondary" label="Play" />
                    </div>
                </div>
            </div>
        </section>
        <p class="text-h4 q-ml-md q-mt-lg">Playlists</p>
        <section class="row fit inline q-px-sm">
            <PlaylistCard class="q-mr-sm" v-for="playlist in playlists" v-bind:key="playlist.id" :name="playlist.name"
                @click="openPlaylist(playlist)" />
        </section>
    </main>
</template>
<script>
import PlaylistCard from '@/components/PlaylistCard.vue'
import TrackCard from '@/components/TrackCard.vue'

import { authStore } from '@/stores/authStore'
import { playerStore } from '@/stores/playerStore'
import { mapState, mapActions, mapWritableState } from 'pinia'

export default {
    data() {
        return ({
            playlistOpen: false,
            playlistTracks: [],
            playlistName: ''
        });
    },

    setup() {

    },

    computed: {
        ...mapState(authStore, ['user', 'accessToken']),
        ...mapState(playerStore, ['playlists']),
        ...mapWritableState(playerStore, ['queue'])
    },
    methods: {
        ...mapActions(playerStore, ['loadPlaylists']),

        openPlaylist(playlistToOpen) {
            const id = playlistToOpen.id;
            const playlist = this.playlists.find((p) => p.id === id);
            this.playlistTracks = playlist.tracks;
            this.playlistName = playlistToOpen.name;
            this.playlistOpen = true;
        },

        onPlayClick() {
            this.queue = this.playlistTracks;
        }
    },

    async mounted() {
        this.loadPlaylists(this.accessToken);
    },

    components: { PlaylistCard, TrackCard }
}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';
@import '@/css/app.scss';

.text {
    color: $text;
}

.play-collection-button {
    min-width: 120px;
}

.modal-dialog {
    width: 700px;
    max-width: 80vw;
}
</style>