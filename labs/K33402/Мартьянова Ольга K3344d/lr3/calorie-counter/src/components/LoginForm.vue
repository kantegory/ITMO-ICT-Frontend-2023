<script setup>
import { useRouter } from 'vue-router'
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useAuthStore } from '@/stores/auth'
import { toast } from 'vue3-toastify'
import 'vue3-toastify/dist/index.css'

const email = ref('')
const password = ref('')
const router = useRouter()
const authStore = useAuthStore()
const login = async () => {
  try {
    await authStore.login({ email: email.value, password: password.value })
    if (authStore.isAuth) {
      router.push('/account')
    } else {
      toast('Login failed')
    }
  } catch (error) {
    toast('Login failed')
    console.error('Error to login', error)
  }
}

const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
</script>

<template>
  <div class="auth-container">
    <div
      class="col-md-6"
      :style="{
        '--background-color': `${theme.backgroundColor}`,
        '--border-color': `${theme.borderColor}`
      }"
    >
      <form class="auth-form" id="entranceForm" @submit.prevent="login">
        <h2>Login to your personal account</h2>
        <div class="mb-3">
          <label for="email" class="form-label">Email</label>
          <input
            type="email"
            id="email"
            class="form-control"
            aria-describedby="emailHelp"
            required
            v-model="email"
          />
        </div>
        <div class="mb-3">
          <label for="password" class="form-label">Password</label>
          <input type="password" class="form-control" id="password" required v-model="password" />
        </div>
        <button type="submit" class="btn btn-custom">Log in</button>
      </form>
      <div class="link-container">
        Don't have an account? <router-link to="/registration">Create</router-link>
      </div>
    </div>
  </div>
</template>

<style scoped>
.form-control {
  margin-bottom: 7px;
  margin-right: 8px;
  background-color: var(--bs-body-bg);
  border-color: var(--border-color);
}

.auth-container {
  margin: 3% 5%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.auth-form,
.link-container {
  border: 1px solid #8f241341;
  padding: 20px;
  background-color: var(--background-color);
  border-radius: 10px;
  margin: 15px 0px;
  color: var(--text-color);
}
</style>
