<script setup>
import useProfile from '@/composable/useProfile'
import useApi from '@/composable/useApi'
import profileFoodList from '@/components/profileFoodList.vue'
import { onMounted, watch } from 'vue'
const { getProfileFood, profileFood } = useApi()
onMounted(getProfileFood)
const { postChar, change, sex, age, activity, height, getChars } = useProfile()
const makeFalse = () => {
  change.value = false
}
watch(sex, () => {
  change.value = true
})
watch(age, () => {
  change.value = true
})
watch(activity, () => {
  change.value = true
})
watch(height, () => {
  change.value = true
})
onMounted(() => {
  getChars
})
</script>

<template>
  <div class="container-fluid" style="padding-top: 100px">
    <h1 class="text-center" style="margin-bottom: 40px">Hello, user!</h1>
    <h2 class="text-center" style="margin-bottom: 50px">
      Here you can change your сharacteristics
    </h2>
    <div v-if="change">
      <table class="table">
        <thead class="firstThead">
          <tr>
            <th scope="col">сharacteristic</th>
            <th scope="col">value</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th scope="row">Sex</th>
            <td>{{ sex }}</td>
          </tr>
          <tr>
            <th scope="row">Height</th>
            <td>{{ height }}</td>
          </tr>
          <tr>
            <th scope="row">Age</th>
            <td>{{ age }}</td>
          </tr>
          <tr>
            <th scope="row">activity level</th>
            <td>{{ activity }}</td>
          </tr>
        </tbody>
      </table>
      <button class="btnStart" @click="makeFalse">change</button>
    </div>
    <div v-else>
      <form @submit="postChar">
        <table class="table">
          <thead class="firstThead">
            <tr>
              <th scope="col"></th>
              <th scope="col">value</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th scope="row">Sex</th>
              <td>
                <input
                  type="text"
                  name="sex"
                  id="sex"
                  autocomplete="off"
                  required
                  placeholder="male/female"
                />
              </td>
            </tr>
            <tr>
              <th scope="row">Height</th>
              <td><input type="text" name="height" id="height" autocomplete="off" required /></td>
            </tr>
            <tr>
              <th scope="row">Age</th>
              <td><input type="text" name="age" id="age" autocomplete="off" required /></td>
            </tr>
            <tr>
              <th scope="row">activity level</th>
              <td>
                <input
                  type="text"
                  name="activity"
                  id="activity"
                  autocomplete="off"
                  required
                  placeholder="low/normal/high"
                />
              </td>
            </tr>
          </tbody>
        </table>
        <button class="btnStart" type="submit">change</button>
      </form>
    </div>
    <!-- <div id="profileContent"></div> -->
    <profileFoodList :profileFood="profileFood" />
  </div>
</template>

<style scoped>
.firstThead {
  background-color: #141414;
  color: #00d400;
}
.table {
  width: 30%;
  margin-left: 35%;
}
.btnStart {
  margin-left: 40%;
  margin-top: 5%;
  width: 20%;
  background-color: #141414;
  color: #00d400;
  height: 5vh;
  font-size: 20px;
}
.btnStart:hover {
  border-color: #00d400;
  border-width: 3px;
}
</style>
