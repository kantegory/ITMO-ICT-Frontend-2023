import { createRouter, createWebHistory } from 'vue-router'
import routes from './routes.js'
import store from '@/store/index';
import { auth } from '@/firebase/firebase'
import db from "../services/db";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: routes,
})

router.beforeEach(async (to, from) => {
  let user = await new Promise((resolve, reject) =>
    auth.onAuthStateChanged(
      user => {
        if (user) {
          resolve(user)
        } else {
          resolve(null)
        }
      },
      error => reject(error)
    )
  )
  if (user) {
    let userData = await db.find('users', user.uid)
    store.dispatch('auth/setUser', userData)
  }

  if(to.meta.requiresAuth && !user) {
    return {
      name: 'login'
    }
  }
  if(to.meta.blockedForAuthenticated && user) {
    return {
      name: 'home'
    }
  }
})

export default router
