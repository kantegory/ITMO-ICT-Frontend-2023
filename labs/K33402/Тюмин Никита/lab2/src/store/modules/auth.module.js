
const authModule = {
  state: () => ({
    user: null,
  }),
  getters: {
    getUser(state) {
      return state.user
    },
    isAuthenticated(state) {
      return state.user !== null
    }
  },
  mutations: {
    setUser(state, user) {
      state.user = user
    }
  },
  actions: {
    setUser(context, user) {
      context.commit('setUser', user)
    }
  },
  namespaced: true
}

export default authModule