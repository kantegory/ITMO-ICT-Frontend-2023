<script setup>
import MyHeader from './components/MyHeader.vue'
import MyFooter from './components/MyFooter.vue'
import { provide, ref } from 'vue'
const IsLogined = ref()
IsLogined.value = true
provide('IsLogined', IsLogined)
</script>

<template>
  <MyHeader :IsLogined="IsLogined" />
  <router-view></router-view>
  <MyFooter />
</template>

<style scoped>
header {
  background-color: #02011e;
}
</style>
