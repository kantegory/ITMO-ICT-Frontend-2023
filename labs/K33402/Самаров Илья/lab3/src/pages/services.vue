<script setup>
import CardList from '../components/CardList.vue'
import modalOrder from '../components/modalOrder.vue'
import useApi from '@/composable/useApi'
import { onMounted, watch } from 'vue'

const { servicesApi, SearchQuery, filters, items } = useApi()

const onChangeSearchInput = (event) => {
  SearchQuery.value = event.target.value
}

onMounted(servicesApi)
watch(SearchQuery, servicesApi)
watch(filters, servicesApi)
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
        <input type="checkbox" id="checkbox1" value="1" v-model="filters" />
        <label for="checkbox1" style="padding-left: 10px">
          <h5 style="font: inherit; font-size: medium">web-development</h5>
        </label>
      </div>
      <div class="search-item">
        <input
          type="checkbox"
          id="checkbox2"
          value="2"
          v-model="filters"
          @change="onChangeChecks"
        />
        <label for="checkbox2" style="padding-left: 10px">
          <h5 style="font: inherit; font-size: medium">design</h5>
        </label>
      </div>
      <div class="search-item">
        <input type="checkbox" id="checkbox3" value="3" v-model="filters" />
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
