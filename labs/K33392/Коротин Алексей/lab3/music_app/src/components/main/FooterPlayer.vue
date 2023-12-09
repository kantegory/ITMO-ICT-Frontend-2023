<template>
    <div class="col">
        <q-linear-progress rounded size="15px" v-bind:value="playerPercentage" animation-speed="500" color="secondary"
            track-color="accent" @click="scrollAudio"></q-linear-progress>
        <div class="row align-center justify-between q-pa-xs">
            <div class="row align-center">
                <div class="row flex-center q-ml-sm-xs q-ml-md-sm">
                    <svg class="icon grey-filter q-mr-md" @click="playPrevious" role="button" alt="Play pervious">
                        <use xlink:href="@/assets/icons.svg#play-previous"></use>
                    </svg>
                    <svg class="icon grey-filter q-mr-md" @click="onPlayClick" v-if="!isPlaying" role="button" alt="Play">
                        <use xlink:href="@/assets/icons.svg#play"></use>
                    </svg>
                    <svg class="icon grey-filter q-mr-md" @click="onPauseClick" v-if="isPlaying" role="button" alt="Pause">
                        <use xlink:href="@/assets/icons.svg#pause"></use>
                    </svg>
                    <svg class="icon grey-filter q-mr-md" @click="playNext" role="button" alt="Pause">
                        <use xlink:href="@/assets/icons.svg#play-next"></use>
                    </svg>

                </div>
                <div class="row q-ml-md-sm q-ml-sm-xs">
                    <div class="row flex-center">
                        <img class="gt-xs song-cover q-mr-md" v-bind:src="currentSong.album.cover" />
                    </div>
                    <div class="column q-mr-sm justify-center">
                        <div class="song-info ellipsis q-mb-xs">{{ currentSong.title }}</div>
                        <div class="song-info ellipsis text-accent">{{ currentSong.artist.name }}</div>
                    </div>
                    <div class="q-ml-sm row flex-center">
                        <svg id="icon-like" class="icon grey-filter" role="button" alt="Like">
                            <use xlink:href="@/assets/icons.svg#like"></use>
                        </svg>
                    </div>
                </div>
            </div>
            <div class="row right-section flex-center gt-xs">
                <svg id="icon-repeat" @click="onRepeatClick" :class="{ active: repeat }" class="icon" role="button"
                    alt="Repeat">
                    <use xlink:href="@/assets/icons.svg#repeat"></use>
                </svg>
                <div class="row flex-center q-pa-md">
                    <q-slider id="volume-slider" v-model="audio.volume" :min="0" :max="1" :step="0.01" label
                        color="secondary" />
                </div>

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
            isPlaying: false,
            audio: new Audio(),
            duration: 1,
            currentTime: 0,
        }
    },

    computed: {
        ...mapState(playerStore, ['currentSong', 'queue', 'currentSongIndex']),

        playerPercentage() {
            const percentage = this.currentTime / this.duration;
            return isNaN(percentage) ? 0 : percentage
        }
    },

    methods: {
        ...mapActions(playerStore, ['enqueue', 'changeCurrentIndex']),

        onPlayClick() {
            this.isPlaying = true;
            this.audio.play();
        },

        onPauseClick() {
            this.isPlaying = false;
            this.audio.pause();
        },

        onRepeatClick() {
            this.repeat = !this.repeat
        },

        playNext() {
            this.changeCurrentIndex(this.currentSongIndex + 1);
        },
        playPrevious() {
            this.changeCurrentIndex(this.currentSongIndex - 1);
        },

        scrollAudio(e) {
            const rect = e.currentTarget.getBoundingClientRect();
            const x = e.clientX - rect.left; //x position within the element.
            const width = e.currentTarget.clientWidth;
            const current = (x / width) * this.audio.duration;
            this.audio.currentTime = current;
        },
        initAudio() {
            this.audio.src = this.currentSong.preview;
            this.audio.load();
            this.audio.addEventListener('timeupdate', (e) => {
                const duration = e.currentTarget.duration;
                const currentTime = e.currentTarget.currentTime;
                this.currentTime = currentTime;
                this.duration = duration;
            });
            this.duration = this.audio.duration;

            this.audio.addEventListener('ended', (e) => {
                if (this.repeat) {
                    this.audio.currentTime = 0;
                    this.audio.play();
                    return;
                }

                this.playNext();
            })

        }
    },

    beforeMount() {
        this.initAudio();
    },

    updated() {
        if (this.audio.src === this.currentSong.preview) {
            return;
        }

        this.audio.pause();
        this.initAudio();
        this.isPlaying = true;
        this.audio.play();
    },
}
</script>

<style scoped lang="scss">
@import '@/css/quasar.variables.scss';

.icon {
    height: 40px;
    width: 40px;
    cursor: pointer;
    transition: stroke 0.2s, fill 0.2s;
}

.grey-filter {
    filter: brightness(0) invert(0.7);
}

.song-cover {
    height: 50px;
    width: 50px;
}

.song-info {
    font-size: 16px;
    max-width: 150px;
}

#icon-like,
#icon-repeat {
    height: 25px;
    width: 25px;
}

#icon-repeat {
    stroke: $accent
}

#volume-slider {
    min-width: 100px;
}

.right-section {
    min-width: 150px;
}

.active {
    stroke: $secondary !important;
    fill: $secondary !important;
}
</style>
