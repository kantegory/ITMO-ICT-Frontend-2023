<template>
    <div class="border-hover row q-pa-sm justify-between items-center cursor-pointer" @click="setCurrent">
        <div class="row items-center">
            <div :class="{ bouncing: isPlaying }" class="circle q-mr-sm">
            </div>
            <img v-bind:src="cover">
            <div class="q-ml-md column">
                <div class="">{{ name }}</div>
                <div class="text-accent">{{ artist }}</div>
            </div>
        </div>
        <div>
            {{ durationRepresentation }}
        </div>
    </div>
</template>
<script>

import { mapWritableState } from 'pinia';
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
            required: false
        }
    },

    computed: {
        durationRepresentation() {
            const minutes = Math.floor(this.duration / 60);
            let seconds = Math.floor(this.duration - minutes * 60);
            seconds = seconds < 10 ? `0${seconds}` : String(seconds);

            return `${minutes}:${seconds}`;
        },
        ...mapWritableState(playerStore, ['currentSong']),

        isPlaying() {
            return this.id === this.currentSong.id;
        }
    },

    methods: {
        setCurrent() {
            const current = {
                id: this.id,
                name: this.name,
                artist: this.artist,
                cover: this.cover,
                duration: this.duration,
                preview: this.preview
            }
            if (this.currentSong.id === current.id) {
                return; // already playing this song
            }

            this.currentSong = current;
        }
    },
}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';

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