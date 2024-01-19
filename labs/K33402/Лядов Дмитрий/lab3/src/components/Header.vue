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
      <img src="/logo.png" height="150px" />

      <div class="nav-item">
        <router-link to="/catalog" class="nav-links">catalog</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/sales" class="nav-links">sales</router-link>
      </div>
      <div class="nav-item">
        <router-link to="/certificates" class="nav-links">certificates</router-link>
      </div>
      <div class="nav-item ms-auto">
        <button
          class="nav-links"
          style="background-color: #4a4a4a; border: none"
          data-bs-toggle="modal"
          data-bs-target="#modal-cart"
        >
          <img src="/cart1.png" height="75px" />
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
  background-color: #4a4a4a;
}
.nav-item {
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
}
.nav-links {
  text-decoration: none;
  color: white;
  font-size: xx-large;
  white-space: nowrap;
}
.nav-links:hover {
  color: #82898f;
}
.btn-login {
  margin: auto;
  height: 40px;
  display: block;
  background-color: #4a4a4a;
  color: white;
  width: 50%;
  margin-bottom: 15px;
}
</style>
