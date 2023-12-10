import { defineStore } from 'pinia'

import { auth } from '@/firebase/firebase'
import {browserSessionPersistence, setPersistence, signInWithEmailAndPassword, signOut} from "firebase/auth";
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
    login(user) {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, user.email, user.password).then(res => {
            router.push({name: 'home'})
          }).catch(err => {
            console.log(err)
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
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
  persist: true,
})

export default useAuthStore