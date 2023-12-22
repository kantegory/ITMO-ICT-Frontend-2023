<script setup>
import OrderList from '../components/OrderList.vue'
import axios from 'axios'
const orders = ref([])
import { onMounted, ref } from 'vue'

const loadOrders = async () => {
  try {
    var user = localStorage.getItem('user')
    console.log(user)
    const profileUsername = JSON.parse(user).id
    let url = `http://localhost:3000/orders?username=${profileUsername}`

    const { data } = await axios.get(url)
    for (let obj of data) {
      console.log()
      switch (obj.Head) {
        case 'Website development':
          obj.imgSrc = '/webdev.jpg'
          break
        case 'Corporate website':
          obj.imgSrc = '/corpdev.png'
          break
        case 'Fixed price website':
          obj.imgSrc = '/fixprice.png'
          break
        case 'Web Design':
          data.imgSrc = '/design.jpg'
          break
        case 'Mobile app design':
          obj.imgSrc = '/mobiledev.png'
          break
        case 'Brand Identity':
          obj.imgSrc = '/brandident.jpg'
          break
        case 'Tech SEO':
          obj.imgSrc = '/seo1.png'
          break
        case 'On-page SEO':
          obj.imgSrc = '/seo0.jpg'
          break
        case 'Off-page SEO':
          obj.imgSrc = '/seo2.jpg'
          break
      }
    }

    orders.value = data
  } catch (err) {
    console.log(err)
  }
}
onMounted(loadOrders)
</script>

<template>
  <div class="container-fluid" style="min-height: 100vh; padding: 30px">
    <OrderList :orders="orders" />
  </div>
</template>
<style scoped>
.search-bar {
  max-width: 25%;
  min-width: 15%;
  background-color: #02011e;
  padding-left: 2%;
}
.search-item {
  padding-top: 5%;
  color: #8738f8;
}
.input-group {
  width: 90%;
  height: 50px;
}
</style>
