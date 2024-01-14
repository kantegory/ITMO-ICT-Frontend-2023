<script setup>
import Logined from './Logined.vue'
import NotLogined from './NotLogined.vue'
import useLogin from '@/composable/useLogin'
const { username } = useLogin()
</script>
<template>
  <header>
    <div class="d-flex align-items-center">
      <div class="nav-item">
        <img src="/logo.png" style="margin-left: 10px" />
      </div>

      <div class="nav-item">
        <router-link to="/about" class="nav-links">
          <h3 class="nav-text">ABOUT</h3>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/portfolio" href="" class="nav-links">
          <h3 class="nav-text">PORTFOLIO</h3>
        </router-link>
      </div>
      <div class="nav-item">
        <router-link to="/services" href="" class="nav-links">
          <h3 class="nav-text">SERVICES</h3>
        </router-link>
      </div>
      <div class="nav-item">
        <a href="#footer" class="nav-links">
          <h3 class="nav-text">CONTACTS</h3>
        </a>
      </div>
      <div v-if="username" class="ms-auto">
        <Logined />
      </div>
      <div v-else class="ms-auto">
        <NotLogined />
      </div>
    </div>
  </header>
</template>

<style scoped>
.nav-item {
  box-sizing: border-box;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
}
.nav-links {
  text-decoration: none;
}

.nav-signin {
  box-sizing: border-box;
  margin: auto;
  padding-right: 30px;
  padding-left: 30px;
  font-style: inherit;
  padding-left: 550px;
}

.nav-text {
  color: #8738f8;
}
.modal-text {
  align-items: flex-start;
}

.loginicon {
  margin: auto;
  padding-left: 25px;
}
.passwordicon {
  margin: auto;
  padding-left: 35px;
}
.btn-login {
  margin: auto;
  display: block;
  background-color: #02011e;
  color: #8738f8;
  width: 300px;
}
</style>
