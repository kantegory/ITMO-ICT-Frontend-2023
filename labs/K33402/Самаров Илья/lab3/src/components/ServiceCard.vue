<script setup>
defineProps({
  title: String,
  imgSrc: String,
  text: String
})
</script>
<template>
  <div class="d-flex flex-row border service-item">
    <img class="service-img" :src="imgSrc" />
    <div class="d-flex flex-column service-text">
      <h3>{{ title }}</h3>
      <br />
      {{ text }}
      <button class="orderbutton" data-bs-toggle="modal" data-bs-target="#modal-order">
        Order right now
      </button>
    </div>
  </div>
</template>
<style scoped>
.service-item {
  border-color: #8738f8;
  height: 200px;
  margin-bottom: 2%;
  margin-left: 0%;
}

.service-img {
  width: 300px;
  height: 200px;
}
.service-text {
  padding-left: 2%;
}
.orderbutton {
  display: block;
  background-color: #02011e;
  color: #8738f8;
  width: 10em;
  height: 30px;
  margin-top: auto;
  margin-bottom: 30px;
}
</style>
