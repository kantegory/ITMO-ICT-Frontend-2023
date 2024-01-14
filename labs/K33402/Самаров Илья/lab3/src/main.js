import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import services from './pages/services.vue'
import about from './pages/about.vue'
import portfolio from './pages/portfolio.vue'
import registration from './pages/registration.vue'
import profile from './pages/profile.vue'

const routes = [
  { path: '/services', name: 'services', component: services },
  { path: '/about', name: 'about', component: about },
  { path: '/portfolio', name: 'portfolio', component: portfolio },
  { path: '/registration', name: 'registration', component: registration },
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
