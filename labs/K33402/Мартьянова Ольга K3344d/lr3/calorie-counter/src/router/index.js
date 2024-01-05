import { createRouter, createWebHistory } from 'vue-router'

import HomePage from '@/views/HomePage.vue'
import LoginPage from '@/views/LoginPage.vue'
import RegistrationPage from '@/views/RegistrationPage.vue'
import CalorieTable from '@/views/CalorieTable.vue'
import AccountPage from '@/views/AccountPage.vue'
import EditProfilePage from '@/views/EditProfilePage.vue'
import CreateRationPage from '@/views/CreateRationPage.vue'

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage
  },

  {
    path: '/auth',
    name: 'LoginPage',
    component: LoginPage
  },

  {
    path: '/registration',
    name: 'RegistrationPage',
    component: RegistrationPage
  },

  {
    path: '/account',
    name: 'Account',
    children: [
      {
        path: '',
        name: 'AccountInfo',
        component: AccountPage
      },
      {
        path: 'ration',
        name: 'CreateRation',
        component: CreateRationPage
      },
      {
        path: 'edit',
        name: 'AccountEdit',
        component: EditProfilePage
      }
    ]
  },

  {
    path: '/calorie_table',
    name: 'CalorieTable',
    component: CalorieTable
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
