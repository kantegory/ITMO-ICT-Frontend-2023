import { $api } from '@/api/axios'

export const UserService = {
  async getUserInfo() {
    return $api.get('/users')
  },

  async addRations(data) {
    return $api.post('/users/daily-rations', data)
  },

  async editUser(data) {
    return $api.put('/users', data)
  },

  async addToFavorites(data) {
    return $api.post('/users/favorites', { productName: data })
  },

  async removeFromFavorites(data) {
    return $api.delete(`/users/favorites?productName=${data}`)
  }
}
