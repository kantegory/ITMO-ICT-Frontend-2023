import { route } from 'quasar/wrappers'
import { createRouter, createWebHistory, } from 'vue-router'
import routes from '@/router/routes'
import { authStore } from '@/stores/authStore'
/*
 * If not building with SSR mode, you can
 * directly export the Router instantiation;
 *
 * The function below can be async too; either use
 * async/await or return a Promise which resolves
 * with the Router instance.
 */

export default route(function (/* { store, ssrContext } */) {
  const createHistory = createWebHistory;

  const Router = createRouter({
    scrollBehavior: () => ({ left: 0, top: 0 }),
    routes,

    // Leave this as is and make changes in quasar.conf.js instead!
    // quasar.conf.js -> build -> vueRouterMode
    // quasar.conf.js -> build -> publicPath
    history: createHistory(process.env.VUE_ROUTER_BASE)
  });

  Router.beforeEach((to, from, next) => {
    const store = authStore();
    if (to.meta.requiresAuth && store.userIsAnonymous()) {
      next({name: 'Login'});
      store.redirectUrl = to.path;
    }
    else {
      next();
    }
  })

  return Router
})
