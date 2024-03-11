<template>
  <header :class="{ 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
    <h1>Music App</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <!-- Переход в профиль и кнопка выхода из аккаунта -->
      <router-link v-if="!isAuthenticated" to="/profile">Profile</router-link>
      <button v-if="isAuthenticated" @click="logout" class="button">Logout</button>
      <router-link v-if="!isAuthenticated" to="/login">Login</router-link>
      <router-link v-if="!isAuthenticated" to="/register">Register</router-link>
      <button @click="toggleTheme" class="button">Toggle Theme</button>
    </nav>
  </header>
</template>

<script>
import { mapGetters } from 'vuex';
import { useAuth } from '../composables/useAuth';
import { useTheme } from '../composables/useTheme';
import { store } from '../store';
export default {
  props: {
    isDarkTheme: Boolean // объявляем пропс isDarkTheme
  },
  name: 'Header',
  computed: {
    ...mapGetters(['isDarkTheme'])
  },
  components: {},
  setup() {
    const { isAuthenticated, logout } = useAuth();
    const { isDarkTheme } = useTheme();
    const toggleTheme = () => {
      store.commit('toggleTheme');
    };
    return { isAuthenticated, logout, toggleTheme, isDarkTheme };
  }
}
</script>

<style scoped>
/* Стили для Header.vue */
header {
  background-color: #007bff;
  padding: 10px 0;
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-left: 20px; /* Добавляем отступ слева для заголовка */
}

nav {
  /* Не ограничиваем ширину */
}

nav a, button {
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}

nav a:hover, button:hover {
  text-decoration: underline;
}

button.button {
  margin-left: 10px;
  color: #fff;
  text-decoration: none;
  border: none;
  background: none;
  cursor: pointer;
}

.light-theme {
  --header-bg-color: #007bff; /* Задаем переменные для светлой темы */
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #007bff;
}

/* Стили для темной темы */
.dark-theme {
  --header-bg-color: #343a40; /* Задаем переменные для темной темы */
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #343a40;
}
</style>
