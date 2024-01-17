import { createStore } from 'vuex';
import authModule from '@/store/modules/auth.module';
import playerModule from '@/store/modules/player.module';

export default createStore({
    state: {
    },
    getters: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        auth: authModule,
        player: playerModule,
    }
})