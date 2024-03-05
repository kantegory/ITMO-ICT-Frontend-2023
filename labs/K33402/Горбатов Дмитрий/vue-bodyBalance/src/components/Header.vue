<script setup>
import Logined from './Logined.vue'
import NotLogined from './NotLogined.vue'
import modalAuth from './modalAuth.vue'
import useAuth from '@/composable/useAuth'

const { username } = useAuth()
</script>
<template>
  <header>
    <div class="d-flex align-items-center">
      <div class="nav-item">
        <router-link to="/"><img src="/logo.png" class="logo" /></router-link>
      </div>

      <div class="nav-item">
        <router-link to="/guide" class="link">
          <h1>guide</h1>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/today" class="link">
          <h1>today</h1>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/food" class="link">
          <h1>food</h1>
        </router-link>
      </div>
      <div v-if="username" class="ms-auto">
        <Logined />
      </div>
      <div v-else class="ms-auto">
        <NotLogined />
      </div>
    </div>
    <modalAuth />
  </header>
</template>

<style scoped>
.logo {
  height: 150px;
}
header {
  background-color: #141414;
  height: 150px;
}
.link {
  text-decoration: none;
  color: #00d400;
}
.nav-item {
  color: #00d400;
  font-size: 40px;
  margin-left: 3vw;
}
/* header {
  background-color: #00d400;
  height: 150px;
}
.link {
  text-decoration: none;
  color: #141414;
}
.nav-item {
  color: #141414;
  font-size: 40px;
  margin-left: 3vw;
} */
.link:hover {
  color: #046b04;
  text-decoration: none;
}
</style>
