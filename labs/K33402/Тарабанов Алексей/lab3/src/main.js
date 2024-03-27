import { createApp } from 'vue';
import App from './App.vue';
import { store } from './store';
import { router } from './router';
import './assets/main.css';

const isDarkTheme = localStorage.getItem('isDarkTheme') === 'true';
if (isDarkTheme) {
    document.body.classList.add('dark-theme');
}

createApp(App).use(router).use(store).mount('#app');