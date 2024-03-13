import { createStore } from 'vuex';
import auth from './modules/auth';
import projects from './modules/projects';
import theme from './modules/theme'; 

const store = createStore({
  modules: {
    auth,
    projects,
    theme, 
  },
});

export default store;
