// src/store/modules/theme.js

const state = {
    darkMode: false,
  };
  
  const mutations = {
    toggleDarkMode(state) {
      state.darkMode = !state.darkMode;
    },
  };
  
  export default {
    state,
    mutations,
  };
  