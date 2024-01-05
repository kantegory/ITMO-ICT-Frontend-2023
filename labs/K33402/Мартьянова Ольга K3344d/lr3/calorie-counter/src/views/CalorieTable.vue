<script setup>
import { computed, onBeforeMount } from 'vue'
import NavigationBar from '@/components/NavigationBar.vue'
import SearchBar from '@/components/SearchBar.vue'
import FilterButton from '@/components/FilterButton.vue'
import { useThemeStore } from '@/stores/theme'
import { useNutritionStore } from '@/stores/nutrition'
import ProductCard from '@/components/ProductCard.vue'
import { useUserStore } from '@/stores/user'
import { useRouter } from 'vue-router'

const nutritionStore = useNutritionStore()

const userStore = useUserStore()
const router = useRouter()
const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)

onBeforeMount(async () => {
  try {
    await userStore.fetch()
    nutritionStore.data = null
    if (!userStore.user) {
      router.replace('/auth')
    }
  } catch (e) {
    router.replace('/auth')
  }
})
</script>

<template>
  <div
    class="light-background"
    :style="{
      '--background-image': `url(${theme.backgroundImage})`,
      '--text-color': `${theme.textColor}`,
      '--border-color': `${theme.borderColor}`,
      '--text-filter': `${theme.textFilter}`
    }"
  >
    <NavigationBar />
    <main class="table-container">
      <div class="table_title">
        <h3 class="title">Calorie table</h3>
      </div>
      <div class="search-container">
        <div class="col-lg-8">
          <SearchBar />

          <div class="btn-group mt-2">
            <FilterButton
              title="Calorie content"
              v-model:from="nutritionStore.fromCalorie"
              v-model:to="nutritionStore.toCalorie"
            />
            <FilterButton
              title="Proteins"
              v-model:from="nutritionStore.fromProteins"
              v-model:to="nutritionStore.toProteins"
            />
            <FilterButton
              title="Fats"
              v-model:from="nutritionStore.fromFats"
              v-model:to="nutritionStore.toFats"
            />
            <FilterButton
              title="Carbohydrates"
              v-model:from="nutritionStore.fromCarbohydrates"
              v-model:to="nutritionStore.toCarbohydrates"
            />
          </div>
        </div>
      </div>
      <div class="list-container mt-4">
        <div class="col-lg-8">
          <ProductCard v-for="p of nutritionStore.data" :key="p" :product="p" />
          <ProductCard v-if="!nutritionStore.data" v-for="p of userStore.favorites" :key="p" :product="p" />
        </div>
      </div>
    </main>
  </div>
</template>

<style scoped>
.light-background {
  min-height: 100vh;
}

.table_title {
  padding: 50px 16px;
}

.search-container,
.list-container {
  margin: 5px 0;
}

.table-container {
  margin: 0 5%;
}

.title {
  color: var(--text-color);
}

.btn-group {
  display: flex !important;
  flex-wrap: wrap;
  justify-content: space-between;
  margin-right: -10px;
}

@media (max-width: 425px) {
  .table-container {
    margin: 0 0.5%;
  }
}
</style>
