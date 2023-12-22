import { defineStore } from "pinia"
import { usersApi } from "@/api"
import stores from "@/stores/index.js";
import users from "@/api/users.js";

const usersStore = defineStore('users', {
    state: () => ({
        user: "",
        token: ""
    }),

    getters: {
      checkAuth: state => {
          if (localStorage.accessToken){
              state.user = localStorage.user
              state.token = localStorage.accessToken
          }
          return (state.token != "")
      }
    },

    actions: {
        async loadUsers(){
            const response = (await usersApi.getAllUsers())['data']
            const {accessToken, user} = response
            this.user = JSON.stringify(user)
            this.token = JSON.stringify(accessToken)
            return response
        },

        async createUser(data){
            const response = (await usersApi.createUser(data))['data']
            const {accessToken, user} = response
            this.user = JSON.stringify(user)
            this.token = JSON.stringify(accessToken)
            return response
        },

        async loginUser(data) {
            const response = (await usersApi.loginUser(data))['data']
            const {accessToken, user} = response
            this.user = JSON.stringify(user)
            this.token = JSON.stringify(accessToken)
            return response
        }
    }
})

export default usersStore