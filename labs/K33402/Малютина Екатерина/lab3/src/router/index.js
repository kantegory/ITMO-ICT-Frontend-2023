import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: HomeView
    },
    {
      path: '/account',
      component: () => import('../views/AccountView.vue')
    },
    {
      path: '/auth',
      component: () => import('../views/AuthView.vue')
    },
    {
      path: '/create_article',
      component: () => import('../views/CreateArticleView.vue')
    }
  ]
})

export default router
