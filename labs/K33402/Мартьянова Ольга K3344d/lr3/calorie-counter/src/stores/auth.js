import { AuthService } from '@/service/auth'
import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    isAuth: false
  }),

  actions: {
    async login(data) {
      const response = await AuthService.login(data)
      this.isAuth = response.status === 200
      return response
    },

    async register(data) {
      const response = await AuthService.register(data)
      this.isAuth = response.status === 200
      return response
    },

    async logoutUser() {
      await AuthService.logout()
      this.isAuth = false
    }
  }
})
