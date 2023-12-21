<script setup>
import CardList from '../components/CardList.vue'
import modalOrder from '../components/modalOrder.vue'
import axios from 'axios'
const checkedNames = ref([])
const items = ref([])
const SearchQuery = ref('')
import { onMounted, ref, watch } from 'vue'
const onChangeSearchInput = (event) => {
  SearchQuery.value = event.target.value
}
const loadItems = async () => {
  try {
    let checks = []
    let url = `http://localhost:3000/services?q=${SearchQuery.value}`
    for (let check of checkedNames.value) {
      checks.push(check)
    }

    if (checks.length == 1) {
      url = url + `&Group=${checks[0]}`
    }
    if (checks.length == 2) {
      console.log(checks)
      if (checks.includes('1') && checks.includes('2')) {
        url = url + `&Group_ne=3`
      }
      if (checks.includes('1') && checks.includes('3')) {
        url = url + `&Group_ne=2`
      }
      if (checks.includes('2') && checks.includes('3')) {
        url = url + `&Group_ne=1`
      }
    }

    const { data } = await axios.get(url)
    items.value = data
  } catch (err) {
    console.log(err)
  }
}
onMounted(loadItems)
watch(SearchQuery, loadItems)
watch(checkedNames, loadItems)
</script>

<template>
  <div class="d-flex flex-row justify-content-evenly" style="height: auto; min-height: 1000px">
    <div class="d-flex flex-column flex-fill search-bar border-bottom border-top border-dark">
      <div class="search-item">
        <div class="input-group">
          <div class="input-group-prepend">
            <span class="input-group-text" id="inputGroup-sizing-lg"
              ><img src="/searchicon.png" style="width: 21px"
            /></span>
          </div>
          <input
            @input="onChangeSearchInput"
            type="text"
            class="form-control"
            style="height: 35px"
          />
        </div>
      </div>

      <div class="search-item">
        <input type="checkbox" id="checkbox1" value="1" checked="checked" v-model="checkedNames" />
        <label for="checkbox1" style="padding-left: 10px">
          <h5 style="font: inherit; font-size: medium">web-development</h5>
        </label>
      </div>
      <div class="search-item">
        <input
          type="checkbox"
          id="checkbox2"
          value="2"
          checked="checked"
          v-model="checkedNames"
          @change="onChangeChecks"
        />
        <label for="checkbox2" style="padding-left: 10px">
          <h5 style="font: inherit; font-size: medium">design</h5>
        </label>
      </div>
      <div class="search-item">
        <input type="checkbox" id="checkbox3" value="3" checked="checked" v-model="checkedNames" />
        <label for="checkbox3" style="padding-left: 10px">
          <h5 style="font: inherit; font-size: medium">seo services</h5>
        </label>
      </div>
    </div>
    <CardList :items="items" style="padding: 30px" />
    <modalOrder />
  </div>
</template>
<style scoped>
.search-bar {
  max-width: 25%;
  min-width: 15%;
  background-color: #02011e;
  padding-left: 2%;
}
.search-item {
  padding-top: 5%;
  color: #8738f8;
}
.input-group {
  width: 90%;
  height: 50px;
}
.btn-login {
  margin: auto;
  display: block;
  background-color: #02011e;
  color: #8738f8;
  width: 300px;
}
</style>
