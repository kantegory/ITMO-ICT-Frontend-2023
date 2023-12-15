<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";

</script>

<template>
  <header>

      <nav>
        <RouterLink to="/"></RouterLink>
      </nav>
    <Header />
  </header>
  <RouterView />
  <Footer />
</template>

<style scoped>

</style>
