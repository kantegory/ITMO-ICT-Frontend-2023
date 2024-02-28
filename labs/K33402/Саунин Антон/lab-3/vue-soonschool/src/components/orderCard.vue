<script setup>
defineProps({
  name: String,
  imgSrc: String,
  price: String,
  date: String
})
</script>
<template>
  <div class="d-flex flex-row border order-item border">
    <img class="cart-img" :src="imgSrc" />
    <div class="d-flex flex-column service-text">
      <h2>{{ name }}</h2>
      <br />
      <h3>price: {{ price }}</h3>
      <br />
      Date of order: {{ date }}
    </div>
  </div>
</template>
<style scoped>
.cart-img {
  width: 200px;
  height: 300px;
}
.order-item {
  margin-bottom: 3%;
  width: 100%;
}
.service-text {
  padding-left: 5%;
}
</style>
