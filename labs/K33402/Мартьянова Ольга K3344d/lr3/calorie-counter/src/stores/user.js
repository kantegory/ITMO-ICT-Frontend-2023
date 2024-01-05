import { defineStore } from 'pinia'
import { UserService } from '@/service/user'
import { NutritionService } from '@/service/nutritions'
import { useNutritionStore } from './nutrition'

export const useUserStore = defineStore('user', {
  state: () => ({
    user: null,
    favorites: null
  }),

  actions: {
    async fetch() {
      const response = await UserService.getUserInfo()
      this.user = response.data
    },

    async addToFavorites(data) {
      await UserService.addToFavorites(data)
      await this.fetch()
      await this.getFavorites()
    },

    async removeFromFavorites(data) {
      await UserService.removeFromFavorites(data)
      await this.fetch()
      await this.getFavorites()
    },

    async editUserData(data) {
      const response = await UserService.editUser(data)
      this.user = response.data
    },

    async addRations(data) {
      await UserService.addRations(data)
      await this.fetch()
    },

    async getFavorites() {
      const nutritionStore = useNutritionStore()
      this.favorites = []
      for (const f of this.user.favorites) {
        const favotire = await NutritionService.getInfo(f)
        const filterFav = nutritionStore.filterData(favotire.data.items)[0]
        if (filterFav)
          this.favorites.push(filterFav)
      }
    }
  }
})
