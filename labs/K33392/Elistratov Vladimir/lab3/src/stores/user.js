import { defineStore } from "pinia";
import { usersApi } from "@/api";

const usersStore = defineStore("users", {
    state: () => ({
        user: "",
        token: "",
    }),

    getters: {
      authCheck: state => {
          return (state.token !== "")
      }
    },

    actions: {
        async loginUser(data) {
            const response = (await usersApi.userLogin(data))['data'];
            const {accessToken, user} = response
            this.user = JSON.stringify(user);
            this.token = JSON.stringify(accessToken);
            return response;
        },
        async logoutUser() {
            this.user = '';
            this.token = '';
            return "success";
        },
        async updateUser(data) {
            const response = (await usersApi.userUpdate(data))['data'];
            const {accessToken, user} = response
            this.user = JSON.stringify(user);
            this.token = JSON.stringify(accessToken);
            return response;
        },
        async createUser(data) {
            const response = (await usersApi.userRegistration(data))['data'];
            const {accessToken, user} = response
            this.user = JSON.stringify(user);
            this.token = JSON.stringify(accessToken);
            return response;
        },
    },
});

export default usersStore;