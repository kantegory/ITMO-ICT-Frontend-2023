import { $nutritionApi } from '@/api/axios'

export const NutritionService = {
  async getInfo(query) {
    return $nutritionApi.get('/v1/nutrition', { params: { query } })
  }
}
