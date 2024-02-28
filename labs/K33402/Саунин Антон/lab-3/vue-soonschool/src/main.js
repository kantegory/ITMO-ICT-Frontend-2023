import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import catalog from './views/catalog.vue'
import boys from './views/boys.vue'
import girls from './views/girls.vue'
import accessories from './views/accessories.vue'
import registration from './views/registration.vue'
import profile from './views/profile.vue'

const routes = [
  { path: '/catalog', name: 'catalog', component: catalog },
  { path: '/boys', name: 'boys', component: boys },
  { path: '/girls', name: 'girls', component: girls },
  { path: '/accessories', name: 'accessories', component: accessories },
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
