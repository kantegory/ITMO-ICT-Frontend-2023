<template>
    <div class="col">
        <q-linear-progress rounded size="15px" :value="0.4" animation-speed="500" color="secondary"
            track-color="accent"></q-linear-progress>
        <div class="row align-center justify-between q-pa-sm">
            <div class="row">
                <div class="row align-center">
                    <svg role="button" alt="Play pervious">
                        <use xlink:href="@/assets/icons.svg#play-previous"></use>
                    </svg>
                    <svg @click="onPlayPauseClick()" v-if="!isPlaying" role="button" alt="Play">
                        <use xlink:href="@/assets/icons.svg#play"></use>
                    </svg>
                    <svg @click="onPlayPauseClick()" v-if="isPlaying" role="button" alt="Pause">
                        <use xlink:href="@/assets/icons.svg#pause"></use>
                    </svg>
                    <svg role="button" alt="Pause">
                        <use xlink:href="@/assets/icons.svg#play-next"></use>
                    </svg>

                </div>
                <div class="row">
                    <div class="column q-ps-sm">
                        <div>{{ currentSong.name }}</div>
                        <div>{{ currentSong.artist }}</div>
                    </div>

                    <img class="song-cover" v-bind:src="currentSong.cover"/>

                </div>
            </div>
            <div>
                Management
            </div>
        </div>
    </div>
</template>

<script>

import { mapState, mapActions } from 'pinia'
import { playerStore } from '@/stores/playerStore'

export default {
    data() {
        return {
            repeat: false,
            isPlaying: false
        }
    },

    computed: {
        ...mapState(playerStore, ['currentSong', 'queue'])
    },

    methods: {
        ...mapActions(playerStore, ['enqueue']),

        onPlayPauseClick() {
            this.isPlaying = !this.isPlaying;
            console.log("Clicked");
        }
    }

}
</script>

<style scoped>
svg {
    height: 35px;
    width: 35px;
    filter: brightness(0) invert(1);
    cursor: pointer;
}

.song-cover {
    height: 50px;
    width: 50px;
}
</style>
