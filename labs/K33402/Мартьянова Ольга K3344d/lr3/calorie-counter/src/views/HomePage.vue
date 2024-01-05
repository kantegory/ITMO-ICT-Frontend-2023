<script setup>
import NavigationBar from '@/components/NavigationBar.vue'
</script>

<template>
  <div class="background-image">
    <NavigationBar />

    <main class="main-container">
      <h2 class="display-4 text-center">Welcome!</h2>
      <p class="lead">Check out our calorie calculator and start tracking your nutrition.</p>
      <router-link to="/auth" class="btn btn-custom">Let's start</router-link>
    </main>
  </div>
</template>

<style scoped>
.main-container {
  color: white;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  height: 85vh;
  margin: 0 5%;
}

.lead {
  text-align: center;
  margin: 20px;
}

@media (max-width: 425px) {
  .display-4 {
    font-size: 36px;
  }

  .lead {
    font-size: 18px;
  }
}
</style>
