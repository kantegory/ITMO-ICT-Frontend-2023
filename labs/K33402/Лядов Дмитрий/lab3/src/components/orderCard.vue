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
      <h3>{{ name }}</h3>
      <br />
      price: {{ price }}
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
  /* margin-right: 5%; */
  width: 100%;
}
.service-text {
  padding-left: 5%;
}
</style>
