import { defineStore } from 'pinia';
import { authApi } from '@/api';

const authStore = defineStore('auth', {
  state: () => ({
    user: null,
    accessToken: null,
    redirectUrl: null,
  }),

  actions: {
    async login({ username, password }) {
      try {
        const response = await authApi.login({ username, password });
        this.user = response.data.user;
        this.accessToken = response.data.accessToken;
        return response;
      } catch (error) {
        console.error('Error during login:', error);
        throw error;
      }
    },

    async signUp({ username, password }) {
      try {
        const response = await authApi.signUp({ username, password });
        this.user = response.data.user;
        this.accessToken = response.data.accessToken;
        return response;
      } catch (error) {
        console.error('Error during sign-up:', error);
        throw error;
      }
    },

    logout() {
      this.user = null;
      this.accessToken = null;
    },
  },
});
export default authStore;