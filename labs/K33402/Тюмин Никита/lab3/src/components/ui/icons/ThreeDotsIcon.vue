<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :width="width"
    :height="height"
    fill="white"
    class="bi bi-three-dots-vertical"
    viewBox="0 0 16 16"
  >
    <path d="M9.5 13a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm0-5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
  </svg>
</template>

<script>
export default {
  name: "ThreeDotsIcon",

  props: {
    width: { required: false, type: Number, default: 16 },
    height: { required: false, type: Number, default: 16 },
  },
}
</script>

<style scoped>

</style>