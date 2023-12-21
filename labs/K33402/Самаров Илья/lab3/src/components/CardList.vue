<script setup>
import ServiceCard from './ServiceCard.vue'
defineProps({
  items: Array
})
</script>
<template>
  <div class="container-fluid">
    <ServiceCard
      v-for="item in items"
      :key="item.id"
      :imgSrc="item.imgSrc"
      :title="item.Head"
      :text="item.Text"
    />
  </div>
</template>
