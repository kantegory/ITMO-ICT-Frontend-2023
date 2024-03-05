<script setup>
import foodCardList from '../components/foodCardList.vue'
import { onMounted, watch } from 'vue'
import useApi from '@/composable/useApi'

const { food, getFood, subcategoryFilter, categoryFilter, searchFilter } = useApi()
onMounted(getFood)
const searchInput = (event) => {
  searchFilter.value = event.target.value
}
watch(searchFilter, () => getFood())
watch(categoryFilter, () => getFood())
watch(subcategoryFilter, () => getFood())
</script>
<template>
  <div class="d-flex flex-wrap">
    <h1 style="padding-top: 50px; width: 100%">Here you can see your progress</h1>
    <button
      class="btn filters"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#collapseExample"
      aria-expanded="false"
      aria-controls="collapseExample"
      style="margin-left: 2%"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        fill="#00d400"
        class="bi bi-funnel-fill"
        viewBox="0 0 16 16"
      >
        <path
          d="M1.5 1.5A.5.5 0 0 1 2 1h12a.5.5 0 0 1 .5.5v2a.5.5 0 0 1-.128.334L10 8.692V13.5a.5.5 0 0 1-.342.474l-3 1A.5.5 0 0 1 6 14.5V8.692L1.628 3.834A.5.5 0 0 1 1.5 3.5z"
        />
      </svg>
      <span style="color: #00d400; font-size: large">filters</span>
    </button>
    <div class="search-item">
      <input
        @input="searchInput"
        class="searchInp"
        type="search"
        id="searchbox"
        style="color: #141414; width: 70%; height: 100%"
      />
      <button
        class="searchBtn"
        style="background-color: #141414; color: #00d400; width: 25%; height: 100%"
      >
        search
      </button>
    </div>
  </div>
  <div class="d-flex flex-row">
    <div class="collapse" id="collapseExample" style="width: 10%; margin-left: 1%; margin-top: 2%">
      <div class="card card-body">
        <div class="d-flex flex-column">
          <h5>Category</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="meat"
              id="check1"
              checked
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check1"> Meat </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="macaroni"
              id="check2"
              checked
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check2"> Macaroni </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="milk"
              id="check3"
              checked
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check3"> Milk </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="rise"
              id="check4"
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check4"> Rise </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="cheese"
              id="check5"
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check5"> Cheese </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="vegetables"
              id="check6"
              v-model="categoryFilter"
            />
            <label class="form-check-label" for="check6"> Vegetables </label>
          </div>
          <h5 style="margin-top: 10%">Sub-category</h5>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="full"
              id="check7"
              v-model="subcategoryFilter"
            />
            <label class="form-check-label" for="check7"> Full </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="main"
              id="check8"
              v-model="subcategoryFilter"
            />
            <label class="form-check-label" for="check8"> Main </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="supplement"
              id="check9"
              v-model="subcategoryFilter"
            />
            <label class="form-check-label" for="check9"> Supplement </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="garnish"
              id="check10"
              v-model="subcategoryFilter"
            />
            <label class="form-check-label" for="check10"> Garnish </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value="dessert"
              id="check10"
              v-model="subcategoryFilter"
            />
            <label class="form-check-label" for="check11"> Dessert </label>
          </div>
        </div>
      </div>
    </div>
    <div class="d-flex flex-wrap food-container" style="width: 90%">
      <foodCardList :items="food" />
    </div>
  </div>
</template>

<style scoped>
.container-fluid {
  min-height: 100vh;
}

.food-container {
  margin: 2%;
  /* margin-left: 0; */
}
.search-item {
  margin-left: 10%;
  width: 265px;
}
.filters {
  background-color: #141414;
}
.card {
  background-color: #141414;
  color: #00d400;
  margin-right: 10%;
}
.form-check {
  margin-top: 3%;
  margin-bottom: 3%;
}
</style>
