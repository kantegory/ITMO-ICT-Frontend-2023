<script setup>
import Logined from './Logined.vue'
import NotLogined from './NotLogined.vue'
import modalLogin from './modalLogin.vue'
import modalQuestion from './modalQuestion.vue'
import useAuth from '@/composable/useAuth'

const { username } = useAuth()
</script>
<template>
  <header>
    <div class="d-flex align-items-center">
      <div class="nav-item" style="padding-left: 100px">
        <router-link to="/boys" class="nav-links">boys</router-link>
      </div>

      <div class="nav-item">
        <router-link to="/girls" class="nav-links">girls</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/accessories" class="nav-links">accessories</router-link>
      </div>

      <div class="nav-item">
        <router-link to="/catalog" class="nav-links">catalog</router-link>
      </div>
      <img src="/logo.png" height="125px" style="margin-left: 80px" />
      <div class="nav-item ms-auto" style="margin-left: 100px">
        <button
          class="nav-links"
          style="background-color: #077015; border: none"
          data-bs-toggle="modal"
          data-bs-target="#modal-cart"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="50"
            height="50"
            fill="currentColor"
            class="bi bi-basket"
            viewBox="0 0 16 16"
          >
            <path
              d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9zM1 7v1h14V7zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5m2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5"
            />
          </svg>
        </button>
      </div>
      <div v-if="username" class="ms-auto">
        <Logined />
      </div>
      <div v-else class="ms-auto">
        <NotLogined />
      </div>
    </div>
    <modalLogin />
    <modalQuestion />
  </header>
</template>

<style scoped>
header,
footer {
  background-color: #077015;
}
.nav-item {
  box-sizing: border-box;
  padding-right: 40px;
  padding-left: 40px;
}
.nav-links {
  text-decoration: none;
  color: #ffd700;
  font-size: xx-large;
  white-space: nowrap;
}
.nav-links:hover {
  color: #ccb325;
}
</style>
