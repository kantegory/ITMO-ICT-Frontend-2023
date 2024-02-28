<script setup>
import cartProduct from './cartProduct.vue'
defineProps({
  items: Array
})
</script>
<template>
  <div class="d-flex flex-wrap" style="padding: 2%" id="productsContainer">
    <cartProduct
      v-for="item in items"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :name="item.name"
      :price="item.price"
      :date="item.date"
    />
  </div>
</template>
