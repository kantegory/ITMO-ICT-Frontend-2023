<script setup>
import NotAvailableCard from "@/components/NotAvailableCard.vue";
</script>

<template>
  <span> {{ this.$route.params.service }} </span>
  <not-available-card/>
</template>

<script>
export default {
  name: 'ServiceComponent'
}
</script>