import {createRouter, createWebHistory} from 'vue-router'
import HomeView from '../views/HomeView.vue'

const routes = [
    {
        path: '/',
        component: HomeView
    },
    {
        path: '/home',
        redirect: '/',
        component: HomeView
    },
    {
        path: '/account',
        name: 'account',
        component: () => import('../views/AccountView.vue')
    },
    {
        path: '/services',
        component: () => import('../views/ServicesView.vue'),
    },
    {
        path: '/services/:service',
        component: () => import('../views/ServiceView.vue'),
        children: [
            {
                path: '',
                component: () => import('../views/ServiceView.vue')
            }
        ]
    },
    {
        path: '/auth',
        component: () => import('../views/AuthView.vue') //lazy-loading
    }
]

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})

export default router
