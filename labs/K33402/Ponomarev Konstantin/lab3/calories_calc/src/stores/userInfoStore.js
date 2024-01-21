import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            /** @type {UserInfo} */
            userInfo: null
        }
    },
    actions: {
        async login(userInfo) {
            this.userInfo = userInfo
        },
        async logout() {
            this.userInfo = null
        }
    },
    persist: true,
})
