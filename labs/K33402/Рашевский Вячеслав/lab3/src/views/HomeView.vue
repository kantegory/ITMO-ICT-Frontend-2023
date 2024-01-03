<script setup>

</script>

<template>
  <main class="container-fluid align-content-center row vh-100">
    <div class="justify-content-center row home">
      <HomeUseCases/>
      <HomeServices/>
      <HomeAboutUs/>
    </div>
    <img src="@/assets/home.jpg" class="img-fluid position-absolute z-n1 vh-100 vw-100 d-grid mx-auto"
         alt="Smart house outside the city on a green, well-kept area">
  </main>
</template>

<script>
// @ is an alias to /src
import HomeUseCases from "@/components/HomeUseCases.vue";
import HomeServices from '@/components/HomeServices.vue'
import HomeAboutUs from "@/components/HomeAboutUs.vue";

export default {
  name: 'HomeView',
  components: {
    HomeUseCases,
    HomeServices,
    HomeAboutUs
  }
}
</script>
