<script setup>
import NotAvailableCard from "@/components/NotAvailableCard.vue";
</script>

<template>
  <span>{{ msg }}</span>
  <not-available-card/>
</template>
<script>
export default {
  name: 'AccountComponent',
  props: {
    msg: String
  }
}
</script>