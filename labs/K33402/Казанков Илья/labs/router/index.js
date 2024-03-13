import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home.vue';
import LoginView from '../views/LoginView.vue';
import RegisterView from '../views/RegisterView.vue';
import ProjectInfo from '../views/ProjectInfo.vue';
import ProfileView from '../views/ProfileView.vue'; 

const routes = [
  { path: '/', component: Home },
  { path: '/login', component: LoginView },
  { path: '/register', component: RegisterView },
  { path: '/project/:id', component: ProjectInfo },
  { path: '/profile', component: ProfileView }, 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
