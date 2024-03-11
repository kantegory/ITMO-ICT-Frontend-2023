<template>
  <div class="wrapper">
    <div :class="{ 'register': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
      <div class="content-container">
        <h1 :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">Register</h1>
        <form @submit.prevent="register" class="form">
          <input type="text" v-model="name" placeholder="Name" required :class="{ 'input-light': isDarkTheme, 'input-dark': !isDarkTheme }">
          <input type="email" v-model="email" placeholder="Email" required :class="{ 'input-light': isDarkTheme, 'input-dark': !isDarkTheme }">
          <input type="password" v-model="password" placeholder="Password" required :class="{ 'input-light': isDarkTheme, 'input-dark': !isDarkTheme }">
          <button type="submit" class="button" :class="{ 'button-light': isDarkTheme, 'button-dark': !isDarkTheme }">Register</button>
        </form>
        <router-link to="/login" class="link" :class="{ 'link-light': isDarkTheme, 'link-dark': !isDarkTheme }">Login</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useAuth } from '../composables/useAuth';
import { useTheme } from '@/composables/useTheme';
import {mapGetters} from "vuex";

export default {
  props: {
    isDarkTheme: Boolean // объявляем пропс isDarkTheme
  },
  name: 'Register',
  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  setup() {
    const { register } = useAuth();
    const name = ref('');
    const email = ref('');
    const password = ref('');
    const { isDarkTheme } = useTheme();

    return { name, email, password, register, isDarkTheme };
  }
}
</script>

<style scoped>
/* Styles for Register.vue */
.wrapper {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2; /* Цвет фона блока */
}

.content-container {
  width: 100%; /* Ширина блока с контентом */
  background-color: #fff; /* Цвет фона блока с контентом */
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1); /* Тень для выделения краев блока */
  padding: 10px; /* Внутренний отступ для контента */
  min-height: 100vh; /* Блок тянется до самого низа страницы */
}

.register {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
}

.form {
  width: 300px;
  margin-top: 20px;
}

.input-light, .input-dark {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.button-light, .button-dark {
  width: 100%;
  padding: 10px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;
}

.button-light {
  background-color: #1DB954;
  color: white;
}

.button-dark {
  background-color: #333;
  color: white;
}

.button-light:hover {
  background-color: #168f3f;
}

.button-dark:hover {
  background-color: #555;
}

.link-light, .link-dark {
  margin-top: 10px;
  color: #1DB954;
  text-decoration: none;
  transition: color 0.3s;
}

.link-light:hover, .link-dark:hover {
  color: #168f3f;
}
</style>