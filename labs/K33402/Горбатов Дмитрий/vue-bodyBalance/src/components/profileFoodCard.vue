<script setup>
defineProps({
  name: String,
  img: String,
  price: String,
  date: String,
  gram: String,
  totalCalories: String,
  id: Number
})
import useCalculations from '@/composable/useCalculations'
const { deleteFood } = useCalculations()
</script>
<template>
  <div class="d-flex flex-row border profile-item border">
    <img class="cart-img" :src="img" />
    <div class="d-flex flex-column text">
      <h3>{{ name }}</h3>

      <h5 class="text1">
        Gram: {{ gram }} <br />
        Calories: {{ totalCalories }} <br />
      </h5>
      <button class="addBtn" @click="deleteFood(id)">delete</button>
    </div>
  </div>
</template>
<style scoped>
.cart-img {
  width: 267px;
  height: 200px;
}
.profile-item {
  margin: 3%;
  width: 500px;
  height: 200px;
  background-color: #141414;
}
.addBtn {
  width: 150px;
  background-color: #252525;
  color: rgb(255, 0, 0);
  height: 50px;
  border-radius: 10px;
  border-color: rgb(136, 0, 0);
  border-width: 3px;
}
.addBtn:hover {
  background-color: #252525;
  color: rgb(255, 31, 31);
  border-color: rgb(255, 31, 31);
}
.text {
  padding-left: 5%;
  margin-left: 3%;
  color: #00d400;
}
.text1 {
  margin-bottom: 20px;
}
</style>
