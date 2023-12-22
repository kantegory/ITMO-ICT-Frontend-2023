import {createRouter, createWebHistory} from 'vue-router'
import AuthPage from '../views/AuthPage.vue'
import RegistrationPage from "@/views/RegistrationPage.vue";
import BodyParametersPage from "@/views/BodyParametersPage.vue";
import MainPage from "@/views/MainPage.vue";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/login',
            name: 'authPage',
            component: AuthPage
        },
        {
            path: '/registration',
            name: 'registrationPage',
            component: RegistrationPage
        },
        {
            path: '/bodyParams',
            name: 'bodyParametersPage',
            component: BodyParametersPage
        },
        {
            path: '/main',
            name: 'mainPage',
            component: MainPage
        }
    ]
})

export default router
