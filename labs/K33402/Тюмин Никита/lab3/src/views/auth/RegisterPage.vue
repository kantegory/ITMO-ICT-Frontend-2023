<template>
  <div class="container form-container">
    <h2>Register</h2>

    <form>
      <div class="mb-3">
        <label class="form-label">Name</label>
        <input
          type="text"
          name="name"
          v-model="user.name"
          class="form-control __input"
        >
        <span v-if="errors.name" class="form-container__error-message">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          name="email"
          v-model="user.email"
          class="form-control __input"
        >
        <span v-if="errors.name" class="form-container__error-message">{{ errors.email }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          name="password"
          v-model="user.password"
          class="form-control __input"
        >
        <span v-if="errors.password" class="form-container__error-message">{{ errors.password }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Repeat password</label>
        <input
          type="password"
          name="password_confirm"
          v-model="user.password_confirm"
          class="form-control __input"
        >
        <span v-if="errors.password_confirm" class="form-container__error-message">{{ errors.password_confirm }}</span>
      </div>
      <div class="form-container__buttons">
        <button @click.prevent="register" class="btn form-container__submit_button">Register</button>
        <a href="/login">Already registered?</a>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '@/firebase/firebase'
import DB from '@/services/db'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { mapStores } from 'pinia'
import useAuthStore from "../../pinia/auth";

export default {
  data: () => ({
    user: {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
    },
    errors: {
      name: '',
      email: '',
      password: '',
      password_confirm: '',
    },
  }),

  computed: {
    ...mapStores(useAuthStore),
  },

  methods: {
    register() {
      this.clearErrors()
      let valid = true

      if (this.user.password !== this.user.password_confirm) {
        this.errors.password_confirm = 'Passwords do not match'
        valid = false
      }
      if (!this.user.name) {
        this.errors.name = 'Name field is required'
        valid = false
      }
      if (!this.user.email) {
        this.errors.email = 'Email field is required'
        valid = false
      }

      if (!valid) return

      createUserWithEmailAndPassword(auth, this.user.email, this.user.password)
        .then((userCredential) => {
          const user = userCredential.user

          let userData = {
            uid: user.uid,
            name: this.user.name,
            email: this.user.email,
          }

          DB.store('users', userData, userData.uid).then(res => {
            this.authStore.setUser(userData)
            this.$router.push({name: 'home'})
          })
        })
        .catch((error) => {
          const errorCode = error.code
          const errorMessage = error.message
        });
    },

    clearErrors() {
      for (let el in this.errors) {
        this.errors[el] = ''
      }
    }
  },
}
</script>

<style scoped>
.form-container__error-message {
  color: var(--text-color);
}
</style>