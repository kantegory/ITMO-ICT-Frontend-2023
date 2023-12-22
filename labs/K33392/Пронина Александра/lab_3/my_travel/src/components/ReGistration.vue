<template>
  <div class="container mt-5">
    <h2>Регистрация</h2>
    <form @submit.prevent="registerUser">
      <div class="mb-3">
        <input type="text" class="form-control" v-model="username" placeholder="Введите имя пользователя" autocomplete="off">
      </div>
      <div class="mb-3">
        <input type="email" class="form-control" v-model="email" placeholder="Введите email" autocomplete="off">
      </div>
      <div class="mb-3">
        <input type="password" class="form-control" v-model="password" placeholder="Введите пароль" autocomplete="off">
      </div>
      <button type="submit" class="btn btn-primary">Зарегистрироваться</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ReGistration',
  data() {
    return {
      username: '',
      email: '',
      password: ''
    };
  },
  methods: {
    async registerUser() {
      try {
        const userData = {
          username: this.username,
          email: this.email,
          password: this.password
        };

        // сервер
        const response = await axios.post('http://localhost:8000/api/register', userData);

        // Обработка
        console.log('Пользователь успешно зарегистрирован:', response.data);

        // переброс в случае ошибки
      } catch (error) {
        console.error('Ошибка при регистрации пользователя:', error.response.data.message);
      }
    }
  }
};
</script>

<style>

</style>
