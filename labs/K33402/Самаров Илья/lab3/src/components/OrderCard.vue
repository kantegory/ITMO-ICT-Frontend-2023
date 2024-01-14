<script setup>
defineProps({
  Head: String,
  imgSrc: String,
  Date: String,
  type: String
})
</script>
<template>
  <div class="d-flex flex-row border service-item">
    <img class="service-img" :src="imgSrc" />
    <div class="d-flex flex-column service-text">
      <h3>{{ Head }}</h3>
      <br />
      I will contacy you {{ Date }}
      <br />
      via {{ type }}
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
</style>
