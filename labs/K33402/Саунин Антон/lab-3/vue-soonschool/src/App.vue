<script setup>
import Header from './components/Header.vue'
import modalCart from './components/modalCart.vue'
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <modalCart />
  </div>
</template>

<style scoped></style>
