<template>
  <svg width={{width}} height={{height}}>
    <use xlink:href="/src/assets/svg/sprites.svg#{{id}}"/>
  </svg>
</template>

<script>
  import Sprites from '/src/assets/svg/sprites.svg'
  export default {
    name: 'icon',
    props: {
      id: {
        type: String,
        default: "close"
      },
      width: {
        type: String,
        default: "2px"
      },
      height: {
        type: String,
        default: "2px"
      },
    },
  }
</script>

<style scoped>
</style>