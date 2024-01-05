<script setup>
import { computed } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import { useRouter } from 'vue-router'

const themeStore = useThemeStore()
const authStore = useAuthStore()
const router = useRouter()

const logout = async () => {
  authStore.logoutUser()
  router.push('/')
}

const theme = computed(themeStore.getThemeData)
</script>

<template>
  <header
    class="bg-custom-dark text-white text-center"
    :style="{ '--nav-color': `${theme.navColor}` }"
  >
    <nav class="navbar navbar-expand-lg navbar-dark">
      <div class="container-fluid">
        <router-link to="/" class="navbar-brand text-white">Calorie calculator</router-link>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Open dropdown menu"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <router-link to="/calorie_table" class="nav-link-custom nav-link"
            >Calorie table</router-link
          >
          <ul class="navbar-nav ml-auto">
            <li class="nav-item" v-if="authStore.isAuth">
              <router-link to="/account" class="btn btn-custom">Account</router-link>
            </li>
            <li class="nav-item" v-if="authStore.isAuth">
              <button class="btn btn-custom" @click="logout">Log out</button>
            </li>
            <li class="nav-item" v-if="!authStore.isAuth">
              <router-link to="/auth" class="btn btn-custom">Log in</router-link>
            </li>
            <li class="nav-item" v-if="!authStore.isAuth">
              <router-link to="/registration" class="btn btn-custom">Registration</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
</template>

<style scoped>
.nav-item {
  margin: 0 10px;
}

.navbar {
  margin: 0 5%;
}

.bg-custom-dark {
  background-color: var(--nav-color) !important;
}

.nav-link-custom {
  color: #ffffffc2 !important;
}

.nav-link-custom:hover {
  color: white;
}

.ml-auto {
  margin-left: auto !important;
}

@media (max-width: 425px) {
  .navbar {
    margin: 0 0.5%;
  }
}
</style>
