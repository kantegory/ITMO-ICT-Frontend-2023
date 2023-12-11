import './assets/main.css'

import App from '@/App.vue'
import router from '@/router'
import store from '@/stores'

import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap'
import '@/assets/main.css'
import { createApp } from 'vue'

const app = createApp(App);

app.use(store);
app.use(router);

app.mount('#app')
