<template>
  <div class="container __container">
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
        <span v-if="errors.name" class="__form_error_message">{{ errors.name }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          type="email"
          name="email"
          v-model="user.email"
          class="form-control __input"
        >
        <span v-if="errors.name" class="__form_error_message">{{ errors.email }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          type="password"
          name="password"
          v-model="user.password"
          class="form-control __input"
        >
        <span v-if="errors.password" class="__form_error_message">{{ errors.password }}</span>
      </div>
      <div class="mb-3">
        <label class="form-label">Repeat password</label>
        <input
          type="password"
          name="password_confirm"
          v-model="user.password_confirm"
          class="form-control __input"
        >
        <span v-if="errors.password_confirm" class="__form_error_message">{{ errors.password_confirm }}</span>
      </div>
      <div class="__buttons">
        <button @click.prevent="register" class="btn __submit_button">Register</button>
        <a href="/login">Already registered?</a>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '@/firebase/firebase'
import DB from '@/services/db'
import { createUserWithEmailAndPassword } from "firebase/auth";
import { mapMutations } from 'vuex'
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

  methods: {
    ...mapMutations({
      setUser: 'auth/setUser'
    }),
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
            this.setUser(userData)
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
.__form_error_message {
  color: #B9B4C7;
}
</style>