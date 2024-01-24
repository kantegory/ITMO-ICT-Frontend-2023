<script setup>
import orderCard from './orderCard.vue'
defineProps({
  orders: Array
})
</script>
<template>
  <div class="d-flex flex-wrap justify-content-center" style="padding: 2%" id="productsContainer">
    <orderCard
      v-for="item in orders"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :name="item.name"
      :price="item.price"
      :date="item.date"
    />
  </div>
</template>
