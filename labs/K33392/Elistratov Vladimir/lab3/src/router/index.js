import { createRouter, createWebHistory } from "vue-router";

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: "/vaulttec",
            name: "main",
            component: () => import("../views/TimeVault.vue"),
        },
        {
            path: "/vaulttec/profile",
            name: "profile",
            component: () => import("../views/TimeVaultProfile.vue"),
        },
    ],
});

// экспортируем сконфигурированный роутер
export default router;