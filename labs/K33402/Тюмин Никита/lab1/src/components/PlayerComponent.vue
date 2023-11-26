<template>
  <div class="row __player_container">
    <div class="col-2 __player_section">
      <button>
        <skip-start-icon
          :width="25"
          :height="25"
        />
      </button>

      <button
        @click="playPause"
        v-if="isPlaying"
      >
        <pause-icon
          :width="40"
          :height="40"
        />
      </button>

      <button
        @click="playPause"
        v-else
      >
        <play-icon
          :width="40"
          :height="40"
        />
      </button>

      <button>
        <skip-end-icon
          :width="25"
          :height="25"
        />
      </button>
    </div>
    <div class="col-8">
      <h5>song name</h5>
      <p>artist name</p>
    </div>
    <div class="col-2 __player_section">
      <div class="__volume_section">
        <button>
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
          <input v-model="volume" type="range" :min="0" :max="100">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isPlaying: false,
      volume: 100,
      prevVolume: 100,
    }
  },

  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying
    },
    muteUnmute() {
      if (this.volume !== 0) {
        this.prevVolume = this.volume
        this.volume = 0
      } else {
        this.volume = this.prevVolume
      }
    }
  },

  computed: {
    isMuted() {
      return this.volume === 0
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