<template>
  <header :class="{ 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
    <h1>Музыкальный плеер</h1>
    <nav>
      <router-link to="/">Главная</router-link>
      <router-link v-if="!isAuthenticated" to="/profile">Профиль</router-link>
      <button v-if="isAuthenticated" @click="logout" class="button">Выход</button>
      <router-link v-if="!isAuthenticated" to="/login">Вход</router-link>
      <router-link v-if="!isAuthenticated" to="/register">Регистрация</router-link>
      <button @click="toggleTheme" class="button">Тема</button>
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
    isDarkTheme: Boolean
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
header {
  background-color: #ff0000;
  padding: 10px 0;
  color: #949393;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

h1 {
  margin-left: 20px;
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
  --header-bg-color: #007bff;
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #007bff;
}

.dark-theme {
  --header-bg-color: #343a40;
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #343a40;
}
</style>
