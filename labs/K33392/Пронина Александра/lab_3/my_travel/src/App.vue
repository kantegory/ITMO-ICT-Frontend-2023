<template>
  <div>
    <router-link to="/account">Аккаунт</router-link>
    <router-link to="/register">Регистрация</router-link>
    <router-link to="/filter">Фильтр</router-link>

    <router-view></router-view>
  </div>
</template>

<script>
import { createRouter, createWebHistory } from 'vue-router';
import ReGistration from "@/components/ReGistration.vue";
import FiLter from "@/components/FiLter.vue";
import AccoUnt from "@/components/AccoUnt.vue";

const routes = [
  { path: '/account', component: AccoUnt },
  { path: '/register', component: ReGistration },
  { path: '/filter', component: FiLter }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default {
  name: 'App',
  router
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
