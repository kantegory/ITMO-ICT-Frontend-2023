<template>
  <div class="wrapper">
    <div :class="{ 'profile': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
      <div class="content-container" style="width: 150%;">
        <h1 :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">Профиль</h1>
        <div :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">
          <p>Имя: {{ user.name }}</p>
          <p>Почта: {{ user.email }}</p>
        </div>
        <h2 :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">Плейлисты</h2>
        <div class="playlists">
          <div v-for="(playlist, index) in playlists" :key="index" class="playlist-item" :class="{ 'playlist-item-light': !isDarkTheme, 'playlist-item-dark': isDarkTheme }">
            <p :class="{ 'text-light': isDarkTheme, 'text-dark': !isDarkTheme }">{{ playlist.name }}</p>
            <button @click="deletePlaylist(index)" class="button" :class="{ 'button-light': isDarkTheme, 'button-dark': !isDarkTheme }">Удалить</button>
          </div>
          <button @click="addPlaylist" class="add-button" :class="{ 'button-light': isDarkTheme, 'button-dark': !isDarkTheme }">Добавить плейлист</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { useTheme } from "@/composables/useTheme.js";

export default {
  name: 'Профиль',
  setup() {
    const { isDarkTheme } = useTheme();
    return { isDarkTheme };
  },
  data() {
    return {
      user: { name: 'Алексей;', email: 'tarabanov@mail.ru' },
      playlists: [
          { id: 1, name: 'Избранное'},
      ]
    };
  },
  methods: {
    addPlaylist() {
      const newPlaylist = { id: this.playlists.length + 1, name: `Плейлист ${this.playlists.length + 1}` };
      this.playlists.push(newPlaylist);
    },
    deletePlaylist(index) {
      this.playlists.splice(index, 1);
    }
  }
};
</script>

<style scoped>
/* Styles for Profile.vue */

.wrapper {
  display: flex;
  justify-content: center;
}

.content-container {
  width: 87.7%;
  background-color: var(--content-bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  min-height: 100vh;
}

.profile {
  display: flex;
  width: 60%;
  flex-direction: revert;
  align-items: center;
  margin-top: 50px;
}

.profile h1 {
  font-size: 24px;
  margin-bottom: 20px;
}

.profile p {
  margin-bottom: 10px;
}

.playlists {
  margin-top: 20px;
}

.playlist-item {
  display: grid;
  align-items: flex-start;
  justify-content: flex-start;
  margin-bottom: 10px;
  background-color: rgba(255, 255, 255, 0); /* Прозрачный цвет фона */
  border-radius: 5px;
  padding: 10px;
}

.playlist-item-light {
  background-color: #f9f9f9;
}

.playlist-item-dark {
  background-color: #333;
}

.add-button, .button {
  padding: 8px 16px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
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

.text-light {
  color: white;
}

.text-dark {
  color: black;
}

.light-theme {
  background-color: #f2f2f2;
}

.dark-theme {
  background-color: #343a40;
}
</style>