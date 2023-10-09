import HomePage from "../views/HomePage.vue";
import ProfilePage from "../views/ProfilePage.vue";
import LoginPage from "../views/auth/LoginPage.vue";
import RegisterPage from "../views/auth/RegisterPage.vue";
import NotFoundPage from "../views/NotFoundPage.vue";
import SecureComponent from "../components/SecureComponent.vue";
import PublicComponent from "../components/PublicComponent.vue";

export default [
    {
        path: '',
        meta: { requiresAuth: true },
        component: SecureComponent,
        children: [
            {
                path: '',
                name: 'home',
                component: HomePage
            },
            {
                path: '/profile',
                name: 'profile',
                component: ProfilePage
            },
        ],
    },
    {
        path: '',
        meta: { blockedForAuthenticated: true },
        component: PublicComponent,
        children: [
            {
                path: '/login',
                name: 'login',
                component: LoginPage,
            },
            {
                path: '/register',
                name: 'register',
                component: RegisterPage,
            },
        ],
    },
    {
        name: '404',
        path: '/:catchAll(.*)',
        component: NotFoundPage
    }
]