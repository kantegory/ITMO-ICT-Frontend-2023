// main.js
import { createApp } from 'vue';
import App from './App.vue';
import router from './router'; // Импортируйте роутер

createApp(App)
    .use(router)
    .mount('#app');
