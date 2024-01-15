import { $publicApi } from '@/api/axios'
import { TokenStorage } from '@/api/tokenStorage'

export const AuthService = {
  async register(data) {
    const res = await $publicApi.post('/users', data)
    TokenStorage.setToken(res.data.token)
    return res
  },

  async login(data) {
    const res = await $publicApi.post('/login', data)
    TokenStorage.setToken(res.data.token)
    return res
  },

  async logout() {
    TokenStorage.setToken(null)
  }
}
