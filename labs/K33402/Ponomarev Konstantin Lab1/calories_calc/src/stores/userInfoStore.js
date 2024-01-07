import {defineStore} from 'pinia'
import {UserInfo} from "@/domain/model/userInfo";

export const useUserInfoStore = defineStore('userInfo', {
    state: () => {
        return {
            userInfo: UserInfo
        }
    },
    actions: {

    },
    persist: true,
})
