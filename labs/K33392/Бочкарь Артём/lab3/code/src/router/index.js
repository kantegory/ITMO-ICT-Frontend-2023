import { createRouter, createWebHistory } from 'vue-router'
import LogInView from '../views/LogInView.vue'
import RegView from '../views/RegView.vue'
import HomeView from '../views/HomeView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/reg',
      name: 'registraition',
      component: RegView
    },
    {
      path: '/login',
      name: 'login',
      component: LogInView
    }
  ]
})

export default router