<script setup>
import productCard from './productCard.vue'
defineProps({
  items: Array
})
</script>
<template>
  <div class="d-flex flex-wrap justify-content-evenly" style="padding: 2%" id="productsContainer">
    <productCard
      v-for="item in items"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :name="item.name"
      :text="item.Text"
      :price="item.price"
      :sale="item.sale"
    />
  </div>
</template>
