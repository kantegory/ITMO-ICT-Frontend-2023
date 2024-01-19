<script setup>
import { onMounted } from 'vue'
import orderList from '../components/orderList.vue'
import useApi from '@/composable/useApi'
const { ordersApi, orders } = useApi()
onMounted(ordersApi)
</script>

<template>
  <div class="container-fluid" style="min-height: 1000px">
    <h2>Welcome!</h2>
    <h3>Here you can see your orders!</h3>
    <div class="d-flex flex-row flex-fill justify-content-start" id="Orders">
      <orderList :orders="orders" />
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  margin: 3%;
}
</style>
