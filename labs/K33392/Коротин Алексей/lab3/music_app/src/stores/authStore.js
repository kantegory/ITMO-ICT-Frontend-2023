import { defineStore } from 'pinia'
import { authApi } from '@/api'

export const authStore = defineStore('auth', {
    state: () => ({
        user: null,
        accessToken: null,
        redirectUrl: null
    }),

    actions: {
        async login({ email, password }) {
            const response = await authApi.login({ email: email, password: password });
            this.user = response.data.user;
            this.accessToken = response.data.accessToken;
            return response;
        },

        async signUp({ email, password }) {
            const response = await authApi.signUp({ email: email, password: password })
                .then((r) => console.log(r));

            this.user = response.data.user;
            this.accessToken = response.data.accessToken;
            return response;
        },

        logout() {
            this.user = null;
            this.accessToken = null;
        },

        userIsAnonymous() {
            return this.accessToken === null
        }
    }
})
