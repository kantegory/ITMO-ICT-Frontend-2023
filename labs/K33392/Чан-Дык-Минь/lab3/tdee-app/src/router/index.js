import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Nutrition from '../views/Nutrition.vue'
import Login from '../views/Login.vue'
import Register from '../views/Register.vue'
import Result from '../views/Result.vue'
import History from '../views/History.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/nutrition',
      name: 'nutrition',
      component: Nutrition
    },
    {
      path: '/login',
      name: 'login',
      component: Login
    },
    {
      path: '/register',
      name: 'register',
      component: Register
    },
    {
      path: '/result',
      name: 'result',
      component: Result
    },
    {
      path: '/history',
      name: 'history',
      component: History
    },
  ]
})

export default router
