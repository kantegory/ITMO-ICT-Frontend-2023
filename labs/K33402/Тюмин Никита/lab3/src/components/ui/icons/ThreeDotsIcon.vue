<template>
  <svg
    class="bi bi-play-fill svg-icon"
    :width="width"
    :height="height"
    fill="currentColor"
  >
    <use xlink:href="@/svg/sprite.svg#threeDots"></use>
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