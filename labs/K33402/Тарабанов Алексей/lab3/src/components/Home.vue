<template>
  <transition name="fade">
    <div class="wrapper"  :style="{ backgroundColor: bgColor }">
      <div :class="{ 'home': true, 'light-theme': !isDarkTheme, 'dark-theme': isDarkTheme }">


        <div class="content-container">

          <h1 class="title-center">Топ 3 песни</h1>

          <div class="top-songs">
            <router-link v-if="isAuthenticated" to="/profile" class="profile-link">Profile</router-link>
            <transition-group name="fade" tag="div">
              <div v-for="(song, index) in topSongs" :key="index" class="song-card">
                <img src="/music/Nota.jpg" alt="Default Image" class="song-thumbnail">
                <h2 class="song-title">{{ song.replace("AC-DC - ", "") }}</h2>
                <audio :src="`/music/${encodeURIComponent(song)}.mp3`" controls></audio>
              </div>
            </transition-group>
          </div>

          <h2 class="title-center">Все песни</h2>
          <div class="all-songs">
            <div v-for="(song, index) in songs" :key="index" class="song-card">
              <img src="/music/Nota.jpg" alt="Default Image" class="song-thumbnail">
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
        { id: 1, title: 'Moneytalks ', artist: 'AC-DC', audio: '/music/AC-DC - Moneytalks.mp3' },
        { id: 2, title: 'Back In Black ', artist: 'AC-DC', audio: '/music/AC-DC - Back In Black.mp3' },
        { id: 3, title: 'House Of Jazz', artist: 'AC-DC', audio: '/music/AC-DC - House Of Jazz.mp3' },
        { id: 4, title: 'Mistress For Christmas', artist: 'AC-DC', audio: '/music/AC-DC - Mistress For Christmas.mp3' }
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
  --bg-color: #f2f2f2;
  --content-bg-color: #fff;
  --header-bg-color: #007bff;
  --header-text-color: #fff;
  --link-text-color: #fff;
  --button-text-color: #fff;
  --button-bg-color: #007bff;
  --song-title-color: #333;
}

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
  background-image: url('Fon.jpg');
  background-size: cover;
}

.dark-theme .wrapper {
  background-image: url('Fon.jpg');
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
  width: 850px;
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
  background-color: #007bff;
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
  width: 70%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 10px;
}


.song-thumbnail {
  width: 50px;
  height: 50px;
  margin-right: 10px;
  border-radius: 5px;
}

.song-title {
  display: inline-block;
  width: 100%;
  white-space: nowrap;
  text-overflow: ellipsis;
  transition: transform 1s ease-in-out;
}

.song-title:hover {
  overflow: auto;
  animation-play-state: paused;
}

@keyframes marquee {
  from { transform: translateX(100%); }
  to { transform: translateX(-100%); }
}
</style>