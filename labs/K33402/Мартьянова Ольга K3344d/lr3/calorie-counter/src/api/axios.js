import axios from 'axios'
import { useNutritionTokenInterceptors, useTokenInterceptors } from './interceptors'

const apiUrl = 'http://localhost:3000'
const nutritionUrl = 'https://api.calorieninjas.com'

export const $publicApi = axios.create({
  baseURL: apiUrl
})

export const $api = axios.create({
  baseURL: apiUrl
})
useTokenInterceptors($api)

export const $nutritionApi = axios.create({
  baseURL: nutritionUrl
})
useNutritionTokenInterceptors($nutritionApi)