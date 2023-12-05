
const routes = [
  {
    path: '/auth',
    component: () => import('@/layouts/AuthLayout.vue'),
    children: [
      { path: 'login', name: 'Login', component: () => import('@/pages/LoginPage.vue'), meta: { requiresAuth: false } },
      { path: 'register', name: 'Register', component: () => import('@/pages/SignUpPage.vue'), meta: { requiresAuth: false } }
    ]
  },
  {
    path: '/',
    component: () => import("@/layouts/MainLayout.vue"),
    meta: {
      requiresAuth: true
    },
    children: [
      {path: 'collection', name: 'Collection', component: () => import('@/pages/CollectionPage.vue'), meta: {requiresAuth: true}}
    ]
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue')
  }
]

export default routes
