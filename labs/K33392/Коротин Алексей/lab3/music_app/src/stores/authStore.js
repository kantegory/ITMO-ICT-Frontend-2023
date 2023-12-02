import { defineStore } from 'pinia'
import { authApi } from '@/api'

export const authStore = defineStore('auth', {
    state: () => ({
        user: null,
        redirectUrl: null
    }),

    getters: {
        isAuthenticated: (state) => state.user !== null
    },

    actions: {
        login(data) {
            const response = authApi.login(data)
                .then((r) => console.log(r))
                .then((r) => {
                    this.user = JSON.parse(r.data)
                });


            return response;
        },

        logout() {

        }
    }
})
