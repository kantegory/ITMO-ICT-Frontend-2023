<template>
  <div>
    <Header />
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-md-6">
          <h2 class="h3 mb-3 font-weight-normal">Register</h2>
          <form class="form-signin" @submit.prevent="register" id="registerForm">
            <input v-model="name" type="text" id="inputName" class="form-control mb-3" placeholder="Имя" required autofocus>
            <input v-model="email" type="email" id="inputEmail" class="form-control mb-3" placeholder="Email адрес" required>
            <input v-model="password" type="password" id="inputPassword" class="form-control mb-3" placeholder="Пароль" required>
            <input type="password" id="inputConfirmPassword" class="form-control mb-3" placeholder="Подтвердите пароль" required>
            <button class="btn btn-lg btn-primary btn-block" type="submit">Зарегистрироваться</button>
          </form>
          <p class="mt-3">Уже есть аккаунт? <router-link to="/login">Войдите</router-link></p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '@/components/Header.vue'; // Импортируем компонент Header

export default {
  components: {
    Header, 
  },
  data() {
    return {
      name: '',
      email: '',
      password: '',
    };
  },
  methods: {
    async register() {
      // const userData = {
      //   name: this.name,
      //   email: this.email,
      //   password: this.password,
      // };
      // await fetch('http://example.com/api/register', {
      //   method: 'POST',
      //   headers: {
      //     'Content-Type': 'application/json',
      //   },
      //   body: JSON.stringify(userData),
      // });
    },
  },
};
</script>

<style scoped>
.container {
  max-width: 600px;
}
</style>
