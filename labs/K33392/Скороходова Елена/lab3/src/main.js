import { createApp } from 'vue';
import App from './views/App.vue';
import Main from './components/Main.vue';
import Enter from './components/Enter.vue';
import Registration from './components/Registration.vue';
import Order from './components/Order.vue'; 
import Cabinet from './components/Cabinet.vue'; 
import Catalog from './components/Catalog.vue'; 
import { createRouter, createWebHistory } from 'vue-router';
import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

//экземпляр приложения
const app = createApp(App);

// роутер
const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/main',
      name: 'Main',
      component: Main,
    },
    {
      path: '/enter',
      name: 'Enter',
      component: Enter,
    },
    {
      path: '/registration',
      name: 'Registration',
      component: Registration,
    },
    {
      path: '/order',
      name: 'Order',
      component: Order,
      beforeRouteLeave(to, from, next) {
        
        if (typeof this.$data.closeModal === 'function') {
          this.$data.closeModal();
        }
        next();
      },
    },

    {
      path: '/cabinet',
      name: 'Cabinet',
      component: Cabinet,
    },
    {
      path: '/catalog',
      name: 'Catalog',
      component: Catalog,
    },
  ],
});


app.use(router);


app.mount('#app');
