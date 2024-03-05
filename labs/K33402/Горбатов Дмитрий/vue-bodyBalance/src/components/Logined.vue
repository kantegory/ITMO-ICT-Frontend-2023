<script setup>
import useAuth from '@/composable/useAuth'

const { logout, OpenProfile } = useAuth()
// console.log(typeof name)
</script>
<template>
  <div class="d-flex align-items-center">
    <div class="nav-item">
      <router-link to="/profile" class="link">
        <h1>profile</h1>
      </router-link>
    </div>
    <div class="nav-item" style="padding-right: 5vw">
      <button class="link logout" @click="logout">
        <h1>logout</h1>
      </button>
    </div>
  </div>
</template>
<style scoped>
.link {
  text-decoration: none;
  color: #00d400;
}
.link:hover {
  color: #046b04;
  text-decoration: none;
}
.nav-item {
  color: #00d400;
  font-size: 40px;
  margin-left: 3vw;
}
.logout {
  color: rgb(194, 7, 7);
  border-color: red;
  background-color: #141414;
}
.logout:hover {
  color: rgb(255, 0, 0);
}
</style>
