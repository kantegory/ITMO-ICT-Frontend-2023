<template>
  <div>
    <Header />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="h3 mb-3 font-weight-normal">Login</h2>
          <div class="form-wrapper">
            <form class="form-signin" @submit.prevent="login" id="loginForm">
              <label for="inputEmail" class="sr-only"></label>
              <input v-model="email" type="email" id="inputEmail" class="form-control mb-3" placeholder="Email адрес" required autofocus>

              <label for="inputPassword" class="sr-only"></label>
              <input v-model="password" type="password" id="inputPassword" class="form-control mb-3" placeholder="Пароль" required>

              <button class="btn btn-lg btn-primary btn-block" type="submit">Войти</button>
            </form>
          </div>
          <p class="mt-3">Нет аккаунта? <router-link to="/register">Зарегистрируйтесь</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; 

export default {
  components: {
    Header, 
  },
  data() {
    return {
      email: '',
      password: '',
    };
  },
  methods: {
    async login() {
      
      console.log('Login functionality not implemented yet');
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}

.form-wrapper {
  margin-bottom: 20px; 
}

.form-signin input {
  margin-bottom: 10px; 
}
</style>
