<script setup>
import profileFoodCard from './profileFoodCard.vue'
defineProps({
  profileFood: Array
})
</script>
<template>
  <div class="d-flex flex-wrap justify-content-center" style="padding: 2%" id="productsContainer">
    <profileFoodCard
      v-for="item in profileFood"
      :key="item.id"
      :id="item.id"
      :img="item.img"
      :name="item.name"
      :date="item.date"
      :gram="item.gram"
      :totalCalories="item.totalCalories"
    />
  </div>
</template>
