<template>
    <q-card shrink class="playlist-card border-hover bg-primary col-xs-6 col-sm-3 col-md-2 col-lg-2 q-pa-xs cursor-pointer">
        <img src="@/assets/collection/playlist-cover_no_cover.png">
        <q-card-section>
            <div class="playlist-caption block text-h6 ellipsis overflow-hidden">{{ name }}</div>
        </q-card-section>
    </q-card>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';

.playlist-card {
    color: $text;
}
</style>
