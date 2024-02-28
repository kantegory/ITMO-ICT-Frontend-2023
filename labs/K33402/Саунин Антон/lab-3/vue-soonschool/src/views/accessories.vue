<script setup>
import productCardList from '../components/productCardList.vue'
import { onMounted, watch } from 'vue'
import useApi from '@/composable/useApi'
const { catalogApi, SearchQuery, filters, items } = useApi()

const onChangeSearchInput = (event) => {
  SearchQuery.value = event.target.value
}
onMounted(() => {
  catalogApi('acs')
})
watch(SearchQuery, () => {
  catalogApi('acs')
})
watch(filters, () => {
  catalogApi('acs')
})
</script>

<template>
  <div>
    <div
      class="d-flex searchbar flex-row justify-content-evenly border border-success"
      style="padding: 2%"
    >
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          style="accent-color: #077015"
          checked="checked"
          value="1"
          v-model="filters"
        />
        <label for="checkbox1">Pants</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          style="accent-color: #077015"
          checked="checked"
          value="2"
          v-model="filters"
        />
        <label for="checkbox2">Costume</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="checkbox3"
          style="accent-color: #077015"
          checked="checked"
          value="3"
          v-model="filters"
        />
        <label for="checkbox3">Topwear</label>
      </div>
      <div class="search-item">
        <input
          @input="onChangeSearchInput"
          type="search"
          id="searchbox"
          style="color: #4a4a4a; width: 70%; border-radius: 10px 0px 0px 10px"
        />
        <button
          style="
            background-color: #077015;
            color: #ffd700;
            width: 25%;
            border-radius: 0px 10px 10px 0px;
          "
        >
          search
        </button>
      </div>
    </div>
    <productCardList :items="items" />
  </div>
</template>

<style scoped></style>
