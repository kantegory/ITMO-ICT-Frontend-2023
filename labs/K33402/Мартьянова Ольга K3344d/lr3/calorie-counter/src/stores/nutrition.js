import { defineStore } from 'pinia'
import { NutritionService } from '@/service/nutritions'
import { log } from 'console'

export const useNutritionStore = defineStore('nutrition', {
  state: () => ({
    data: null,
    fromCalorie: null,
    toCalorie: null,
    fromProteins: null,
    toProteins: null,
    fromFats: null,
    toFats: null,
    fromCarbohydrates: null,
    toCarbohydrates: null
  }),

  actions: {
    async fetch(query) {
      const response = await NutritionService.getInfo(query)
      console.log(response);
      this.data = this.filterData(response.data.items)
      console.log(response.data.items);
    },

    filterData(data) {
      return data.filter((e) => {
        if (this.fromCalorie && this.toCalorie) {
          if (e.calories < this.fromCalorie || e.calories > this.toCalorie) return false
        }
        if (this.fromProteins && this.toProteins) {
          if (e.protein_g < this.fromProteins || e.protein_g > this.toProteins) return false
        }
        if (this.fromFats && this.toFats) {
          if (e.fat_total_g < this.fromFats || e.fat_total_g > this.toFats) return false
        }
        if (this.fromCarbohydrates && this.toCarbohydrates) {
          if (
            e.carbohydrates_total_g < this.fromCarbohydrates ||
            e.carbohydrates_total_g > this.toCarbohydrates
          )
            return false
        }
        return true
      })
    }
  }
})
