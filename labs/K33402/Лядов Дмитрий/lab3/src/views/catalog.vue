<script setup>
import productCardList from '../components/productCardList.vue'
import { onMounted, watch } from 'vue'
import useApi from '@/composable/useApi'
const { catalogApi, SearchQuery, filters, items } = useApi()

const onChangeSearchInput = (event) => {
  SearchQuery.value = event.target.value
}
onMounted(() => {
  catalogApi(false)
})
watch(SearchQuery, () => {
  catalogApi(false)
})
watch(filters, () => {
  catalogApi(false)
})
</script>

<template>
  <div>
    <div
      class="d-flex searchbar flex-row justify-content-evenly border-bottom border-start border-end border-2 border-secondary"
      style="padding: 2%"
    >
      <div>
        <input
          type="checkbox"
          id="checkbox1"
          style="accent-color: #4a4a4a"
          checked="checked"
          value="1"
          v-model="filters"
        />
        <label for="checkbox1">outerwear</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="checkbox2"
          style="accent-color: #4a4a4a"
          checked="checked"
          value="2"
          v-model="filters"
        />
        <label for="checkbox2">Light clothing</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="checkbox3"
          style="accent-color: #4a4a4a"
          checked="checked"
          value="3"
          v-model="filters"
        />
        <label for="checkbox3">Jeans, pants</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="checkbox4"
          style="accent-color: #4a4a4a"
          checked="checked"
          value="4"
          v-model="filters"
        />
        <label for="checkbox4">shirts</label>
      </div>
      <div class="search-item">
        <input
          @input="onChangeSearchInput"
          class="rounded-pill"
          type="search"
          id="searchbox"
          style="color: #4a4a4a; width: 70%"
        />
        <button class="rounded-pill" style="background-color: #4a4a4a; color: white; width: 25%">
          search
        </button>
      </div>
    </div>
    <productCardList :items="items" />
  </div>
</template>

<style scoped></style>
