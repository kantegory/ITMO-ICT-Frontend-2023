<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import modalCart from './components/modalCart.vue'
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
    <Footer />
    <modalCart />
  </div>
</template>

<style scoped></style>
