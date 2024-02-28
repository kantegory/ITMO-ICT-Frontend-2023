<script setup>
defineProps({
  name: String,
  imgSrc: String,
  price: String
})
</script>
<template>
  <div class="d-flex flex-row justify-content-start align-items-center cart-item">
    <img :src="imgSrc" class="cart-img" />
    <div class="d-flex flex-column content">
      <h4 style="color: #077015">{{ name }}</h4>
      {{ price }}
    </div>
  </div>
</template>
<style scoped>
.cart-img {
  width: 150px;
  height: 200px;
}
.cart-item {
  width: 500px;
  padding-right: 3%;
  padding-bottom: 3%;
}
.content {
  padding: 50px;
}
</style>
