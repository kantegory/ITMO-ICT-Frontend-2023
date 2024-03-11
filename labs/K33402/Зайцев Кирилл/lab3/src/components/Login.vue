<template>
  <transition name="fade">
    <div class="wrapper">
      <div :class="{ 'login': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
        <div class="content-container">
          <h1 :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">Login</h1>
          <form @submit.prevent="login" class="form">
            <input type="email" v-model="email" placeholder="Email" required :class="{ 'input-light': isDarkTheme, 'input-dark': !isDarkTheme }">
            <input type="password" v-model="password" placeholder="Password" required :class="{ 'input-light': isDarkTheme, 'input-dark': !isDarkTheme }">
            <button type="submit" class="button" :class="{ 'button-light': isDarkTheme, 'button-dark': !isDarkTheme }">Login</button>
          </form>
          <router-link to="/register" class="link" :class="{ 'link-light': isDarkTheme, 'link-dark': !isDarkTheme }">Register</router-link>
        </div>
      </div>
    </div>
  </transition>
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
  name: 'Login',
  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  components: {},
  setup() {
    const { login } = useAuth();
    const email = ref('');
    const password = ref('');
    const { isDarkTheme } = useTheme();

    return { email, password, login, isDarkTheme };
  }
}
</script>

<style scoped>
/* Styles for Login.vue */
.wrapper {
  display: flex;
  justify-content: center;
  background-color: #f2f2f2;
}

.content-container {
  width: 100%;
  background-color: #fff;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 10px;
  min-height: 100vh;
}

.login {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
}

.form {
  width: 300px;
  margin-top: 20px;
}

.input-light,
.input-dark {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 5px;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.1);
}

.button-light,
.button-dark {
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

.link-light,
.link-dark {
  margin-top: 10px;
  color: #1DB954;
  text-decoration: none;
  transition: color 0.3s;
}

.link-light:hover,
.link-dark:hover {
  color: #168f3f;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>