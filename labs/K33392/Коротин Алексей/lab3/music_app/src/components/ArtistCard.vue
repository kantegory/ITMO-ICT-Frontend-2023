<template>
    <q-card class="artist-card fit inline cursor-pointer border-hover bg-primary q-mr-sm">
        <q-img :src="this.picture">
            <div class="absolute-bottom text-h6">
                {{ name }}
            </div>
        </q-img>
    </q-card>
</template>
<script>
export default {
    props: {
        name: {
            type: String,
            required: true,
        },
        picture: {
            type: String,
            required: true
        }
    }
}
</script>
<style scoped lang="scss">
.artist-card {
    max-width: 250px;
}
</style>