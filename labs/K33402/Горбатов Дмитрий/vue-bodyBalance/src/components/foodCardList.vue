<script setup>
import foodCard from './foodCard.vue'
defineProps({
  items: Array
})
</script>
<template>
  <foodCard
    v-for="item in items"
    :key="item.id"
    :img="item.img"
    :name="item.name"
    :calorie="item.calorie"
  />
</template>
<style scoped></style>
