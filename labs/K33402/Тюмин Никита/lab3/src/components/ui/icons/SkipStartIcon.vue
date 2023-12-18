<template>
  <svg
    class="bi bi-play-fill svg-icon"
    :width="width"
    :height="height"
    fill="currentColor"
  >
    <use xlink:href="@/svg/sprite.svg#skipStart"></use>
  </svg>
</template>

<script>
export default {
  name: "SkipStartIcon",

  props: {
    width: { required: false, type: Number, default: 16 },
    height: { required: false, type: Number, default: 16 },
  },
}
</script>

<style scoped>

.svg-icon {
  color: var(--header-color)
}
</style>