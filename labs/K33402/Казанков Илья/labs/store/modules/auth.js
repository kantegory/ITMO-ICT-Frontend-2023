import axios from 'axios';


const state = {
    user: null,
    isDarkTheme: false,
  };
  
  const mutations = {
    setUser(state, user) {
      state.user = user;
    },
    toggleTheme(state) {
      state.isDarkTheme = !state.isDarkTheme;
    },
  };
  
  const actions = {
    async login({ commit }, credentials) {
      try {
        const response = await axios.post('/api/login', credentials);
        commit('setUser', response.data.user);
      } catch (error) {
      }
    },
  
    async register({ commit }, userData) {
      try {
        const response = await axios.post('/api/register', userData);
        commit('setUser', response.data.user);
      } catch (error) {
      }
    },
  
    logout({ commit }) {
      commit('setUser', null);
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  