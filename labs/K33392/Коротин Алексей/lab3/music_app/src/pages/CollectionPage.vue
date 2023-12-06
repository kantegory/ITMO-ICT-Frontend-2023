<template>
    <main class="container bg-primary">
        <section class="column q-pt-xl">
            <div class="row">
                <div>
                    <img class="user-avatar" src="https://avatars.mds.yandex.net/get-yapic/0/0-0/islands-200">
                </div>
                <div class="column justify-center q-ml-lg">
                    <p class="text-accent">Collection</p>
                    <p class="text-h4 ellipsis"> {{ user.email }} </p>
                    <div>
                        <q-btn class="play-collection-button" text-color="primary" rounded color="secondary" label="Play" />
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>
<script>
import { authStore } from '@/stores/authStore'
import { mapState } from 'pinia'
export default {
    data() {
        return ({

        })
    },

    computed: {
        ...mapState(authStore, ['user'])
    },

    actions: {

    }

}
</script>
<style scoped lang="scss">
@import '@/css/quasar.variables.scss';

.play-collection-button {
    min-width: 120px;
}

.container {
    min-height: 100vh;
    color: $text;
}

.user-avatar {}
</style>