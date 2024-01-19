<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
defineProps({
  name: String,
  imgSrc: String,
  price: String,
  sale: String
})

function OpenModal(name, price) {
  document.getElementById('addName').innerHTML = name
  document.getElementById('addPrice').innerHTML = price
  var myModal = new bootstrap.Modal(document.getElementById('modal-question'))
  myModal.show()
}
</script>
<template>
  <div class="d-flex flex-column align-items-center cat-item">
    <button @click="OpenModal(name, price)" style="border: none">
      <img :src="imgSrc" class="cat-img" />
    </button>
    <h4>{{ name }}</h4>
    <div class="">
      {{ price }}
      <div style="text-decoration: line-through">{{ sale }}</div>
    </div>
  </div>
</template>
<style scoped>
.cat-item {
  padding-right: 3%;
  padding-bottom: 3%;
}
.cat-img {
  width: 300px;
  height: 400px;
}
</style>
