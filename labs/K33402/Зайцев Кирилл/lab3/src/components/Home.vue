<template>
  <transition name="fade">
    <div class="wrapper"  :style="{ backgroundColor: bgColor }">
      <div :class="{ 'home': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">
        <div class="content-container">
          <!-- Заголовок "Top 3 Songs" с выравниванием по центру -->
          <h1 class="title-center">Top 3 Songs</h1>
          <div class="top-songs">
            <!-- Кнопка перехода в профиль -->
            <router-link v-if="isAuthenticated" to="/profile" class="profile-link">Profile</router-link>
            <transition-group name="fade" tag="div">
              <div v-for="(song, index) in topSongs" :key="index" class="song-card" @mouseenter="startMarquee" @mouseleave="stopMarquee">
                <img src="/music/image-placeholder-0-7d62c49c92067321d8f2004ed1b05fea.jpg" alt="Default Image" class="song-thumbnail">
                <h2 class="song-title">{{ song }}</h2>
                <audio :src="`/music/${encodeURIComponent(song.replace(/\s/g, '_'))}.mp3`" controls></audio>
              </div>
            </transition-group>
          </div>

          <!-- Заголовок "All Songs" с выравниванием по центру -->
          <h2 class="title-center">All Songs</h2>
          <div class="all-songs">
            <div v-for="(song, index) in songs" :key="index" class="song-card" @mouseenter="startMarquee" @mouseleave="stopMarquee">
              <img src="/music/image-placeholder-0-7d62c49c92067321d8f2004ed1b05fea.jpg" alt="Default Image" class="song-thumbnail">
              <h2 class="song-title">{{ song.title }}</h2>
              <audio :src="song.audio" controls></audio>
            </div>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: 'Home',
  data() {
    return {
      topSongs: [],
      songs: [
        { id: 1, title: 'OST The Witcher 3', artist: 'Unknown', audio: '/music/the_witcher_3_wild_hunt_16_Kaer_Morhen.mp3' },
        { id: 2, title: 'Natural', artist: 'Imagine Dragons', audio: '/music/Imagine_Dragons_-_Natural_57429538.mp3' },
        { id: 3, title: 'Let Me Love You', artist: 'DJSnake & Justin_Bieber', audio: '/music/DJ_Snake_Justin_Bieber_-_Let_Me_Love_You_47962926.mp3' },
        { id: 4, title: 'Yota Brazilian', artist: 'Brunito', audio: '/music/Brunito Yota Brazilian.mp3' }
      ]
    };
  },
  methods: {
    async fetchTopSongs() {
      try {
        const response = await fetch('http://localhost:3000/api/topSongs');
        if (!response.ok) {
          throw new Error('Error fetching top songs');
        }
        this.topSongs = (await response.text()).split('#').map(song => song.trim()).filter(Boolean);
      } catch (error) {
        console.error(error);
      }
    },
    startMarquee(event) {
      const element = event.target.querySelector('.song-title');
      element.classList.add('marquee');
    },
    stopMarquee(event) {
      const element = event.target.querySelector('.song-title');
      element.classList.remove('marquee');
    }
  },
  computed: {
    ...mapGetters(['isDarkTheme', 'isAuthenticated']),
    bgColor() {
      return this.isDarkTheme ? "var(--dark-bg-color)" : "var(--light-bg-color)";
    }
  },
  async mounted() {
    await this.fetchTopSongs();
  }
};
</script>

<style scoped>

.light-theme {
  --light-bg-color: #f2f2f2;
  --bg-color: #f2f2f2; /* Цвет фона блока */
  --content-bg-color: #fff; /* Цвет фона блока с контентом */
  --header-bg-color: #007bff; /* Цвет фона шапки */
  --header-text-color: #fff; /* Цвет текста в шапке */
  --link-text-color: #fff; /* Цвет ссылок */
  --button-text-color: #fff; /* Цвет текста кнопок */
  --button-bg-color: #007bff; /* Цвет фона кнопок */
  --song-title-color: #333; /* Цвет текста песен */
}

/* Стили для темной темы */
.dark-theme {
  --dark-bg-color: #343a40;
  --bg-color: #343a40;
  --content-bg-color: #333;
  --header-bg-color: #343a40;
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #333;
  --song-title-color: #fff;
}

.wrapper {
  display: flex;
  justify-content: center;
  background-image: url('BUkJ.gif'); /* Путь к бесконечной гифке для светлой темы */
  background-size: cover;
}

.dark-theme .wrapper {
  background-image: url('3uvT.gif'); /* Путь к бесконечной гифке для темной темы */
}

.content-container {
  width: 87.7%;
  background-color: var(--content-bg-color);
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 20px;
  min-height: 100vh;
}

.home {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.title-center {
  text-align: center;
}

.profile-link {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.profile-link:hover {
  background-color: #0056b3;
}

.song-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
}

.song-info {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.song-info h2 {
  margin: 0;
  font-size: 18px;
  font-weight: bold;
  color: #333;
}

audio {
  margin-top: 10px;
  width: 550px;
}

audio {
  margin-top: 10px;
  width: 550px; /* Ширина проигрывателя */
}

.audio-player {
  margin-top: 10px;
  width: 300px; /* Ширина проигрывателя */
}

.audio-player-controls {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f0f0f0;
  border-radius: 10px;
  padding: 10px;
  overflow: hidden;
}

.audio-player-play-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.audio-player-timeline {
  flex: 1;
  margin: 0 10px;
}

.audio-player-timeline input[type="range"] {
  width: 150%;
  height: 5px;
  background-color: #ccc;
  border: none;
  border-radius: 5px;
  appearance: none;
  outline: none;
}

.audio-player-volume-slider {
  width: 50px;
}

.audio-player-volume-slider input[type="range"] {
  appearance: none;
  background-color: #ccc;
  width: 150%;
  height: 5px;
  border-radius: 5px;
}

.audio-player-volume-slider input[type="range"]::-webkit-slider-thumb {
  appearance: none;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: #007bff; /* Цвет ползунка */
}

.audio-player-mute-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

.profile-link {
  margin-top: 20px;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: #fff;
  font-weight: bold;
  text-decoration: none;
  cursor: pointer;
}

.profile-link:hover {
  background-color: #0056b3;
}
.song-card {
  width: 75%; /* Устанавливаем ширину карточки песни */
  margin: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
  transition: transform 0.3s ease-in-out; /* Анимация при наведении */
  overflow: hidden;
}

.song-card:hover .song-title {
  transform: translateX(-50%);
}

.song-thumbnail {
  width: 50px; /* Ширина изображения */
  height: 50px; /* Высота изображения */
  margin-right: 10px; /* Отступ справа */
  border-radius: 5px; /* Скругляем углы */
}

.song-title {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: transform 1s ease-in-out; /* Добавляем плавный переход */
}

.song-title:hover {
  overflow: auto;
  animation-play-state: paused;
}

/* Анимация прокрутки текста */
.marquee {
  animation: marquee 5s linear infinite;
}

@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}

.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>