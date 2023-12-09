<template>
    <div class="border-hover row q-pa-sm justify-between items-center cursor-pointer no-wrap" @click="setCurrent">
        <div class="row items-center no-wrap">
            <div :class="{ bouncing: isPlaying }" class="circle q-mr-sm">
            </div>
            <img v-bind:src="cover">
            <div class="q-ml-md column track-card">
                <div class="text ellipsis">{{ name }}</div>
                <div class="text text-accent ellipsis">{{ artist }}</div>
            </div>
        </div>
        <div class="text">
            {{ durationRepresentation }}
        </div>
    </div>
</template>
<script>

import { mapState, mapActions } from 'pinia';
import { playerStore } from '@/stores/playerStore';

export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        name: {
            type: String,
            required: true
        },
        artist: {
            type: String,
            required: true
        },
        cover: {
            type: String,
            required: true
        },
        duration: {
            type: Number,
            required: true
        },
        preview: {
            type: String,
            required: true
        },
        index: {
            type: Number,
            required: true
        }
    },

    computed: {
        durationRepresentation() {
            const minutes = Math.floor(this.duration / 60);
            let seconds = Math.floor(this.duration - minutes * 60);
            seconds = seconds < 10 ? `0${seconds}` : String(seconds);

            return `${minutes}:${seconds}`;
        },
        ...mapState(playerStore, ['currentSong']),

        isPlaying() {
            return this.id === this.currentSong.id;
        }
    },

    methods: {
        ...mapActions(playerStore, ['changeCurrentIndex']),

        onPlayClick() {
            this.changeCurrentIndex(this.index);
        },

        setCurrent() {
            if (this.currentSong.id === this.id) {
                return; // already playing this song
            }

            this.changeCurrentIndex(this.index);
        }
    },
}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';

.text {
    color: $text;
    max-width: 100%;
}
.circle {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    background-color: $secondary;
    visibility: hidden;
}

@keyframes bouncing {

    0%,
    100% {
        transform: scale(.66);
    }

    50% {
        transform: scale(1);
    }
}

.bouncing {
    visibility: visible;
    animation: bouncing .6s ease-in-out infinite both;
}
</style>