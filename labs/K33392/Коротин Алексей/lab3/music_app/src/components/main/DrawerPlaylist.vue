<template>
    <div class="container column fit">
        <div class="bg-primary text-h6 col-1 row items-center q-pl-sm">Track queue</div>
        <q-scroll-area class="q-pa-sm scroll-area bg-primary col">
            <TrackCard class="drawer-track" v-for="(track, index) in queue" v-bind:key="track.id" :id="track.id" :name="track.title"
                :artist="track.artist.name" :cover="track.album.cover_small" :duration="track.duration"
                :preview="track.preview" :index="index"/>

        </q-scroll-area>
    </div>
</template>

<script>
import { playerStore } from '@/stores/playerStore';
import TrackCard from '@/components/TrackCard.vue';
import { mapState } from 'pinia'

export default {
    data() {
        return {};
    },
    computed: {
        ...mapState(playerStore, ['queue'])
    },
    components: { TrackCard }
}
</script>
<style scoped lang="scss">
.scroll-area {
    width: 100%;
}
</style>