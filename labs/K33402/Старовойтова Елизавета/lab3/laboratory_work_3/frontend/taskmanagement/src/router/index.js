// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Login',
        component: () => import('@/views/account/Login.vue'),
      },
    ],
  },
  {
    path: '/register',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Register',
        component: () => import('@/views/account/Register.vue'),
      },
    ],
  },
  {
    path: '/add_task',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'CreateTask',
        component: () => import('@/views/task/CreateTask.vue'),
      },
    ],
  },
  {
    path: '/tasks',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'TaskList',
        component: () => import('@/views/task/TaskList.vue'),
      },
      {
        path: ':id', // Динамический сегмент для ID задачи
        name: 'TaskDetail',
        component: () => import('@/views/task/TaskDetail.vue'),
      },
      {
        path: 'all/:id', // Динамический сегмент для ID задачи
        name: 'TaskDetailAll',
        component: () => import('@/views/task/TaskDetailAll.vue'),
      },
    ],
  },
  {
    path: '/tasks_all',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'TaskListAll',
        component: () => import('@/views/task/TaskListAll.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
