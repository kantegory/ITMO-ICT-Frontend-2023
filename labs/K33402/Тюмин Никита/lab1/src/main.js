import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import defaultComponents from './components/index.js'

const app = createApp(App)

app.use(router)

for (let component of defaultComponents) {
    app.component(component.name, component)
}

app.mount('#app')
