<template>
  <svg xmlns="http://www.w3.org/2000/svg"
       :width="width"
       :height="height"
       fill="currentColor"
       class="bi bi-pause"
       viewBox="0 0 16 16"
       color="#FAF0E6"
  >
    <path d="M6 3.5a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm4 0a.5.5 0 0 1 .5.5v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
  </svg>
</template>

<script>
export default {
  name: "PauseIcon",

  props: {
    width: { required: false, type: Number, default: 16 },
    height: { required: false, type: Number, default: 16 },
  },
}
</script>

<style scoped>

</style>