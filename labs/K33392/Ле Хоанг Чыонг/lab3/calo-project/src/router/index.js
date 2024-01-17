import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: () => import("../views/HomePage.vue"),
    },
    {
      path: "/login",
      name: "login",
      component: () => import("../views/LogInPage.vue"),
    },
    {
      path: "/signup",
      name: "signup",
      component: () => import("../views/SignUpPage.vue"),
    },
    {
      path: "/result",
      name: "result",
      component: () => import("../views/ResultPage.vue"),
    },
    {
      path: "/profile",
      name: "profile",
      component: () => import("../views/ProfilePage.vue"),
    },
    {
      path: "/food",
      name: "food",
      component: () => import("../views/FoodPage.vue"),
    },
    {
      path: "/diary",
      name: "diary",
      component: () => import("../views/DiaryPage.vue"),
    },
    // {
    //   path: "/test",
    //   name: "test",
    //   component: () => import("../views/TestChart.vue"),
    // },
  ],
});

export default router;