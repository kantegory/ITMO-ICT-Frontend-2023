<script setup>
import OrderList from '../components/OrderList.vue'
import useApi from '@/composable/useApi'
import { onMounted } from 'vue'
const { ordersApi, orders } = useApi()
const username = JSON.parse(localStorage.getItem('user')).id
onMounted(ordersApi)
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh; padding: 30px">
    <h3>Welcome, {{ username }}!</h3>
    <h4>Here you can see your orders</h4>
    <OrderList :orders="orders" />
  </div>
</template>
