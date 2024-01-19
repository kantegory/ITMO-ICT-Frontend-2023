import {createApp} from 'vue'

import App from '@/App.vue'
import router from '@/router'
import pinia from '@/stores'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import {useSiteThemeStore} from "@/stores/siteThemeStore";

const app = createApp(App)

app.use(router).use(pinia)

app.mount('#app')
const themeStore = useSiteThemeStore()
themeStore.observeSystemThemeEventListener()
