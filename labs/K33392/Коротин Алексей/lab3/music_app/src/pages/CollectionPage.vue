<template>
    <main class="container bg-primary column">
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
        <section class="fit row inline q-px-sm" v-for="playlist in playlists" v-bind:key="playlist.id">
            <PlaylistCard :name="playlist.name" />
        </section>
    </main>
</template>
<script>
import PlaylistCard from '@/components/PlaylistCard.vue'
import { authStore } from '@/stores/authStore'
import { playerStore } from '@/stores/playerStore'
import { mapState, mapActions } from 'pinia'
export default {
    data() {
        return ({

        });
    },
    computed: {
        ...mapState(authStore, ['user', 'accessToken']),
        ...mapState(playerStore, ['playlists'])
    },
    methods: {
        ...mapActions(playerStore, ['loadPlaylists']),
    },

    async mounted() {
        this.loadPlaylists(this.accessToken);
    },

    components: { PlaylistCard }
}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';
@import '@/css/app.scss';

.play-collection-button {
    min-width: 120px;
}

.container {
    min-height: 100vh;
    color: $text;
}
</style>