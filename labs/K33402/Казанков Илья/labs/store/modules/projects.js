import axios from 'axios';


const state = {
    projects: [],
  };
  
  const mutations = {
    setProjects(state, projects) {
      state.projects = projects;
    },
  };
  
  const actions = {
    async fetchProjects({ commit }) {
      try {
        const response = await axios.get('/api/projects');
        commit('setProjects', response.data.projects);
      } catch (error) {
      }
    },
  };
  
  export default {
    state,
    mutations,
    actions,
  };
  