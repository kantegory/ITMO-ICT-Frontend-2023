import {defineStore} from 'pinia'

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            /** @type {UserInfo} */
            userInfo: null
        }
    },
    persist: true,
})
