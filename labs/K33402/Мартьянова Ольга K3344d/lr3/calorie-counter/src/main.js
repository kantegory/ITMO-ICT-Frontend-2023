import { createApp } from 'vue'

import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'
import { useThemeStore } from '@/stores/theme'
import Notifications from '@kyvg/vue3-notification'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/main.css'

const app = createApp(App);

app.use(store)
app.use(router)
app.use(Notifications)

app.mount('#app')
const themeStore = useThemeStore();

themeStore.setupSystemThemeListener()

