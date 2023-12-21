<script setup>
import router from "@/router";
import {checkAuth, exit} from "@/auth_script.js";
import {fetchArticles} from "@/components/HomeComp.vue";

function updateNav() {
  const account = document.getElementById('accountLink');
  const auth = document.getElementById('authLink');
  const exit = document.getElementById('exitLink');

  if (checkAuth()) {
    account.style.display = 'block';
    auth.style.display = 'none';
    exit.style.display = 'block';
  } else {
    account.style.display = 'none';
    auth.style.display = 'block';
    exit.style.display = 'none';
  }
}

router.beforeEach(updateNav);

async function search() {
  const search = document.getElementById('search');
  localStorage.setItem('searchString', search.value);
  await router.push('/');
}

import {useDark, useToggle} from "@vueuse/core";
const isDark = useDark();
const toggleDark = useToggle(isDark);
</script>

<template>
  <nav class="navbar container-fluid navbar-expand-md navbar-dark bg-dark m-0" data-bs-theme="dark">
      <RouterLink to="/" class="navbar-brand">
        <img src="@/assets/вход_фото.jpg" alt="Logo" width="30" height="24" class="d-inline-block align-text-top">
        MyBlOGGg
      </RouterLink>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-md-0">
          <li id="authBtn" class="nav-item">
            <RouterLink id="authLink" to="/auth" class="nav-link active" aria-current="page">Авторизация</RouterLink>
          </li>
          <li id="accountBtn" class="nav-item">
            <RouterLink id="accountLink" to="/account" class="nav-link active" aria-current="page">Аккаунт</RouterLink>
          </li>
          <li id="exitBtn" class="nav-item">
            <RouterLink id="exitLink" to="/" @click="exit" class="nav-link active" aria-current="page">Выход</RouterLink>
          </li>
        </ul>
        <form class="d-flex" role="search" @submit="search">
          <input id="search" class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
          <button class="btn btn-outline-success me-2" type="submit">Search</button>
        </form>
        <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" display="none">
        <symbol id="theme"
             viewBox="0 0 32 32" xml:space="preserve" >
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <line class="st0" x1="16" y1="3" x2="16" y2="29"></line>
            <path class="st0" d="M16,23c-3.87,0-7-3.13-7-7s3.13-7,7-7"></path>
            <line class="st0" x1="6.81" y1="6.81" x2="8.93" y2="8.93"></line>
            <line class="st0" x1="3" y1="16" x2="6" y2="16"></line>
            <line class="st0" x1="6.81" y1="25.19" x2="8.93" y2="23.07"></line>
            <path class="st0" d="M16,12.55C17.2,10.43,19.48,9,22.09,9c0.16,0,0.31,0.01,0.47,0.02c-1.67,0.88-2.8,2.63-2.8,4.64 c0,2.9,2.35,5.25,5.25,5.25c1.6,0,3.03-0.72,3.99-1.85C28.48,20.43,25.59,23,22.09,23c-2.61,0-4.89-1.43-6.09-3.55"></path> </g>
        </symbol>
        </svg>
        <button class="btn btn-outline-secondary ms-auto" @click="toggleDark()">
          <svg class="icon">
            <use xlink:href="#theme"></use>
          </svg>
        </button>
      </div>
  </nav>
</template>

<style scoped>
.icon {
  stroke: currentColor;
  width: 24px;
  height: 24px;
  fill: none;
}
</style>