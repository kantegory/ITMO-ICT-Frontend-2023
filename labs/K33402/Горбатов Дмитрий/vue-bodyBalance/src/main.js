import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import home from './views/home.vue'
import today from './views/today.vue'
import guide from './views/guide.vue'
import food from './views/food.vue'
import profile from './views/profile.vue'

const routes = [
  { path: '/', name: 'home', component: home },
  { path: '/today', name: 'today', component: today },
  { path: '/guide', name: 'guide', component: guide },
  { path: '/food', name: 'food', component: food },
  { path: '/profile', name: 'profile', component: profile }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})
export { router }
const app = createApp(App)
app.use(router)
app.use(bootstrap)

app.mount('#app')
