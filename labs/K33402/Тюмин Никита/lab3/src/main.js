import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import defaultComponents from './components/index.js'
import {createPinia} from "pinia";

const app = createApp(App)
const pinia = createPinia()

app.use(router)
app.use(pinia)

for (let component of defaultComponents) {
    app.component(component.name, component)
}

app.mount('#app')