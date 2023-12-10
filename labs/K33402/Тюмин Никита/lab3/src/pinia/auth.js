import { defineStore } from 'pinia'

import { auth } from '@/firebase/firebase'
import { signOut } from "firebase/auth";
import router from "../router";

const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated() {
      return this.user !== null
    }
  },
  actions: {
    setUser(user) {
      this.user = user
    },
    logout() {
      signOut(auth).then(() => {
        router.push({name: 'login'})
        this.$reset()
      }).catch((error) => {
        // An error happened.
      });
    }
  },
})

export default useAuthStore