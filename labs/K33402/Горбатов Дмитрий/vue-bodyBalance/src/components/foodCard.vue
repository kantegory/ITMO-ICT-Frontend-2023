<script setup>
defineProps({
  name: String,
  img: String,
  calorie: String
})
import useCalculations from '@/composable/useCalculations'
const { addFood } = useCalculations()
</script>
<template>
  <div class="d-flex flex-column align-items-center food-item border">
    <img :src="img" />
    <h2 class="foodName">{{ name }}</h2>
    <div class="input-group flex-nowrap">
      <input
        type="text"
        class="form-control foodInput"
        aria-label="Имя пользователя"
        aria-describedby="addon-wrapping"
        :id="name"
      />
      <span class="input-group-text" id="addon-wrapping">gram</span>
    </div>
    <button class="addBtn" @click="addFood(name)">add</button>
  </div>
</template>
<style scoped>
.input-group {
  width: 150px;
  margin-top: 10px;
}
.foodInput {
  color: #00d400;
  background-color: #252525;
}
.foodInput:focus {
  border-color: #00d400;
  outline: none;
}
.foodName {
  color: #00d400;
}
.input-group-text {
  background-color: #141414;
  color: #00d400;
}
.food-item {
  background-color: #141414;
  width: 250px;
  min-width: 150px;
  /* margin: auto; */
  margin-right: 3%;
  margin-bottom: 3%;
  /* border-radius: 50px; */
}
img {
  width: 200px;
  height: 150px;
  margin-top: 20px;
  margin-bottom: 10px;
}
.addBtn {
  width: 150px;
  margin-top: 20px;
  margin-bottom: 20px;
  background-color: #252525;
  color: #00d400;
  height: 50px;
  border-radius: 10px;
}
.addBtn:hover {
  background-color: #141414;
}
</style>
