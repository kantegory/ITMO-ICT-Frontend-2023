<script setup>
import OrderCard from './OrderCard.vue'
defineProps({
  orders: Array
})
</script>
<template>
  <div class="container-fluid">
    <OrderCard
      v-for="item in orders"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :Head="item.Head"
      :Date="item.date"
      :type="item.type"
    />
  </div>
</template>
