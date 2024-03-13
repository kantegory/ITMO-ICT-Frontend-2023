<template>
  <header class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container d-flex justify-content-between">
      <a href="https://vk.com/kazankovilya" class="navbar-brand">Портфолио Ильи Казанкова</a>

      <!-- Правая часть с кнопками -->
      <div>
        <router-link to="/profile" class="nav-link mr-2">Профиль</router-link>

        <button class="nav-link mr-2" @click="toggleTheme">Сменить тему</button>
        
        <router-link to="/" class="nav-link">Главная</router-link>
        <router-link to="/login" class="nav-link">Вход</router-link>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'AppHeader',
  methods: {
    toggleTheme() {
      console.log('Тема изменена');
    }
  }
};
</script>

