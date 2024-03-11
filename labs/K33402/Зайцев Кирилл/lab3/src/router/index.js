import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import Login from '../components/Login.vue';
import Register from '../components/Register.vue';
import Profile from '../components/Profile.vue';

const routes = [
    { path: '/', component: Home, props: true  },
    { path: '/login', component: Login, props: true  },
    { path: '/register', component: Register, props: true  },
    { path: '/profile', component: Profile, props: true  }
];

export const router = createRouter({
    history: createWebHistory(),
    routes
});
