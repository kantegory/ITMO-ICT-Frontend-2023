<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
</script>

<template>
  <MyHeader />
  <router-view></router-view>
  <MyFooter />
</template>

<style scoped>
header {
  background-color: #02011e;
}
</style>
