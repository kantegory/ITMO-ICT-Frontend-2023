import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
import { createRouter, createWebHistory } from 'vue-router'
import catalog from './views/catalog.vue'
import sales from './views/sales.vue'
import certificates from './views/certificates.vue'
import registration from './views/registration.vue'
import profile from './views/profile.vue'

const routes = [
  { path: '/catalog', name: 'catalog', component: catalog },
  { path: '/sales', name: 'sales', component: sales },
  { path: '/certificates', name: 'certificates', component: certificates },
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
