<template>
  <div class="row __player_container">
    <div class="col-2 __player_section">
      <button
        aria-label="Previous"
      >
        <skip-start-icon
          @click="playPrevious"
          :width="25"
          :height="25"
        />
      </button>

      <button
        @click="playPause"
        v-if="isPlaying"
        aria-label="Pause"
      >
        <pause-icon
          :width="40"
          :height="40"
        />
      </button>

      <button
        @click="playPause"
        v-else
        aria-label="Play"
      >
        <play-icon
          :width="40"
          :height="40"
        />
      </button>

      <button
        aria-label="Next"
      >
        <skip-end-icon
          @click="playNext"
          :width="25"
          :height="25"
        />
      </button>
    </div>
    <div class="col-8">
      <h5 v-if="currentSong">{{ currentSong.name }}</h5>
      <p v-if="currentSong">{{ currentSong.artist.name }}</p>
    </div>
    <div class="col-2 __player_section">
      <div class="__volume_section">
        <button aria-label="Mute">
          <volume-up-icon
            @click="muteUnmute"
            v-if="!isMuted"
            class="__volume_icon"
            :width="30"
            :height="30"
          />
          <volume-mute-icon
            @click="muteUnmute"
            v-else
            class="__volume_icon"
            :width="30"
            :height="30"
          />
        </button>
        <div class="__volume_drag">
          <input aria-label="Volume" v-model="volume" type="range" :min="0" :max="1" step="0.01">
        </div>
      </div>
    </div>

    <audio style="display: none" ref="player" controls @ended="playNext"><source :src="currentSong ? currentSong.audio_url : null" type="audio/mpeg"></audio>
  </div>
</template>

<script>
import { mapStores } from 'pinia'
import usePlayerStore from "../pinia/player";

export default {
  data() {
    return {
      isPlaying: false,
      volume: 1,
      prevVolume: 1,
    }
  },

  methods: {
    playPause() {
      if (!this.currentSong) {
        return
      }

      if (this.isPlaying) {
        this.isPlaying = false
        this.$refs.player.pause()
      } else {
        this.isPlaying = true
        this.$refs.player.play()
      }
    },
    muteUnmute() {
      if (this.volume !== 0) {
        this.prevVolume = this.volume
        this.volume = 0
      } else {
        this.volume = this.prevVolume
      }
    },
    playNext() {
      this.playerStore.playNextSong()
    },
    playPrevious() {
      this.playerStore.playPreviousSong()
    }
  },

  computed: {
    ...mapStores(usePlayerStore),
    currentSong() {
      return this.playerStore.getCurrentSong
    },
    isMuted() {
      return this.volume === 0
    },
  },

  watch: {
    volume() {
      if (!this.$refs.player){
        return
      }
      this.$refs.player.volume = this.volume
    },
    currentSong() {
      this.$nextTick(() => {
        this.$refs.player.load()
        this.$refs.player.play()
        this.isPlaying = true
      })
    }
  }
}
</script>

<style scoped>
.__player_container {
  height: 100%
}
.__player_section {
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 100%
}
.__volume_section {
  display: flex;
  position: relative;
}
.__volume_drag {
  position: absolute;
  bottom: 50px;
  right: 30px;
  width: 25px;
  height: 20px;
  border-radius: 15px;
  display: flex;
}
.__volume_drag input {
  direction: rtl;
  width: 160px;
  border-radius: 15px;
  -webkit-appearance: none;
  transform: rotate(90deg);
  transition: 0.3s;
  opacity: 0;
}
.__volume_drag input::-webkit-slider-runnable-track {
  background: #FAF0E6;
  border-radius: 15px;
  border: none;
}
.__volume_drag input::-webkit-slider-thumb {
  -webkit-appearance: none;
  background: #2a2536;
  height: 16px;
  width: 16px;
  border-radius: 50%;
}
.__volume_section:hover .__volume_drag input {
  opacity: 100%;
}
</style>