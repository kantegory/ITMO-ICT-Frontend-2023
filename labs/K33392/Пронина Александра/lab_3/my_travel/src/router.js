import { createRouter, createWebHistory } from 'vue-router';
import HelloWorld from './components/HelloWorld.vue';
import AccoUnt from './components/AccoUnt.vue';
import ReGistration from './components/ReGistration.vue';
import FiLter from './components/FiLter.vue';

const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/account',
        name: 'AccoUnt',
        component: AccoUnt
    },
    {
        path: '/register',
        name: 'ReGistration',
        component: ReGistration
    },
    {
        path: '/filter',
        name: 'FiLter',
        component: FiLter
    }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;
