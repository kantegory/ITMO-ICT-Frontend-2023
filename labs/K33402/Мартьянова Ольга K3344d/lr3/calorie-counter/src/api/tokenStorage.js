const key = 'token'
export const TokenStorage = {
  getToken() {
    return localStorage.getItem(key)
  },

  setToken(token) {
    if (token) localStorage.setItem(key, token)
    else localStorage.removeItem(key)
  }
}
