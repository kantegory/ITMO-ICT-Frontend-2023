import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import EnterView from '../views/EnterView.vue'
import RegistrationView from '../views/RegistrationView.vue'
import CatalogView from '../views/CatalogView.vue'
import CartView from '../views/CartView.vue'


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/home',
      name: 'home',
      component: HomeView
    },
    {
      path: '/enter',
      name: 'enter',
      component: EnterView
    },
    {
      path: '/registration',
      name: 'registration',
      component: RegistrationView
    },
    {
      path: '/catalog',
      name: 'catalog',
      component: CatalogView
    },
    {
      path: '/cart',
      name: 'cart',
      component: CartView
    },

  ]
})

export default router
