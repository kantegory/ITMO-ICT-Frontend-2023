import { TokenStorage } from './tokenStorage'
const nutritionToken = 'yNHRx+yRMMHLnN907h/kNw==sYBu7FD1a0LtVn8P'
export function useTokenInterceptors($api) {
  $api.interceptors.request.use((config) => {
    config.headers.Authorization = `Bearer ${TokenStorage.getToken()}`
    return config
  })
}

export function useNutritionTokenInterceptors($api) {
  $api.interceptors.request.use((config) => {
    config.headers['X-Api-Key'] = nutritionToken
    return config
  })
}
