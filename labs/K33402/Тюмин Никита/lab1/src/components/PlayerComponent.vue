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
      <button>
        <volume-up-icon
          :width="30"
          :height="30"
        />
      </button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    isPlaying: false,
  }),

  methods: {
    playPause() {
      this.isPlaying = !this.isPlaying
    }
  },
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
</style>