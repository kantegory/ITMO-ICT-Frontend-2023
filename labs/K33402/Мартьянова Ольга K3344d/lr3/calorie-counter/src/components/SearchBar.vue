<script setup>
import { computed, ref } from 'vue'
import { useThemeStore } from '@/stores/theme'
import { useNutritionStore } from '@/stores/nutrition'
const nutritionStore = useNutritionStore()
const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
const query = ref('')
const search = async () => {
  nutritionStore.fetch(query.value)
  console.log(query.value);
}
</script>

<template>
  <div class="form-inline d-flex">
    <input
      class="form-control flex-grow-1 mt-2"
      type="text"
      placeholder="Enter product"
      aria-label="Search"
      v-model="query"
      :style="{
        '--background-color': `${theme.backgroundColor}`,
        '--border-color': `${theme.borderColor}`,
        '--text-color': `${theme.textColor}`
      }"
    />
    <button class="btn btn-custom" @click="search">
      <svg class="icon">
        <use xlink:href="../svg/sprite.svg#searchIcon"></use>
      </svg>
    </button>
  </div>
</template>

<style scoped>
.form-control {
  background-color: var(--bs-body-bg) !important;
  border-color: var(--border-color) !important;
  /* color: var(--text-color) !important; */
}

.icon {
  stroke: #ffffff;
  width: 17px;
  height: 17px;
  fill: #ffffff;
  margin: 3px;
}
</style>
