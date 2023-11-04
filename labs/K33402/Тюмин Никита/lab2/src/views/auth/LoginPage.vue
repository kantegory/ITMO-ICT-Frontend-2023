<template>
  <div class="container form-container">
    <h2>Log in</h2>

    <form>
      <div class="mb-3">
        <label class="form-label">Email address</label>
        <input
          name="email"
          v-model="user.email"
          type="email"
          class="form-control __input"
        >
      </div>
      <div class="mb-3">
        <label class="form-label">Password</label>
        <input
          name="password"
          v-model="user.password"
          type="password"
          class="form-control __input"
        >
      </div>
      <div class="form-container__buttons">
        <button @click.prevent="login" class="btn form-container__buttons__submit_button">Log in</button>
        <a href="/register">New here?</a>
      </div>
    </form>
  </div>
</template>

<script>
import { auth } from '@/firebase/firebase'
import { setPersistence, signInWithEmailAndPassword, browserSessionPersistence  } from "firebase/auth";

export default {
  data: () => ({
    user: {
      email: '',
      password: '',
    }
  }),

  methods: {
    login() {
      setPersistence(auth, browserSessionPersistence)
        .then(() => {
          signInWithEmailAndPassword(auth, this.user.email, this.user.password).then(res => {
            this.$router.push({name: 'home'})
          }).catch(err => {
          })
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    }
  }
}
</script>

<style scoped>
</style>