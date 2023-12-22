import {createRouter, createWebHistory} from 'vue-router'

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),

    //routers list
    routes: [
        { //home page
            path: '/timeCapsules',
            name: 'homePage',
            component: () => import('../views/homePage.vue')
        },
        { // profile page
            path: '/timeCapsules/profile',
            name: 'profilePage',
            component: () => import('../views/profilePage.vue')
        }
    ]
})

export default router