<script setup>
defineProps({
  title: String,
  imgSrc: String,
  text: String
})
import useApi from '@/composable/useApi'

const { currentName, currentSrc } = useApi()
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
const openOrderModal = (title, imgSrc) => {
  console.log(title, imgSrc)
  const modal = new bootstrap.Modal(document.getElementById('modal-order'))
  currentName.value = title
  currentSrc.value = imgSrc
  modal.show()
}
</script>
<template>
  <div class="d-flex flex-row border service-item">
    <img class="service-img" :src="imgSrc" />
    <div class="d-flex flex-column service-text">
      <h3>{{ title }}</h3>
      <br />
      {{ text }}
      <button class="orderbutton" @click="openOrderModal(title, imgSrc)">Order right now</button>
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
