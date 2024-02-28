<script setup>
import 'bootstrap/dist/css/bootstrap.css'
import bootstrap from 'bootstrap/dist/js/bootstrap.bundle.min.js'
defineProps({
  name: String,
  imgSrc: String,
  price: String
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
    <h4 style="padding-top: 10px; padding-bottom: 10px">{{ name }}</h4>
    <h4 style="color: #077015">
      {{ price }}
    </h4>
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
