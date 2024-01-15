<script setup>
import { computed } from 'vue'
import { useUserStore } from '@/stores/user'
import { useThemeStore } from '@/stores/theme'
import { useNutritionStore } from '@/stores/nutrition'

const userStore = useUserStore()
const themeStore = useThemeStore()
const theme = computed(themeStore.getThemeData)
const nutritionStore = useNutritionStore()

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})
const isFavorite = computed(() => !!userStore.user.favorites.find((e) => e === props.product.name))
const add = async () => {
  userStore.addToFavorites(props.product.name)
  nutritionStore.data = null
}
const remove = async () => {
  userStore.removeFromFavorites(props.product.name)
}
</script>

<template>
  <div class="my-card card"
      :style="{
      '--background-color': `${theme.backgroundColor}`,
      '--text-color': `${theme.textColor}`,
      '--border-color': `${theme.borderColor}`,
      }">
    <h4 class="my-card-header card-header">{{ product.name }}</h4>
    <div class=" card-body my-card-body">
      <div class="my-card-body-text">
        <p class="my-card-text">Calorie content(for 100gr): {{ product.calories }}</p>
        <p class="my-card-text">Proteins: {{ product.protein_g }}</p>
        <p class="my-card-text">Fats: {{ product.fat_total_g }}</p>
        <p class="my-card-text">Carbohydrates: {{ product.carbohydrates_total_g }}</p>
      </div>
      <div>
        <button v-if="isFavorite" class="btn btn-custom remove-btn" @click="remove">
          <svg class="icon">
            <use xlink:href="../svg/sprite.svg#deleteIcon"></use>
          </svg>
          Remove from favorites
        </button>
        <button v-else class="btn btn-custom add-btn" @click="add">
          <svg class="icon">
            <use xlink:href="../svg/sprite.svg#addIcon"></use>
          </svg>          
          Add to favorites</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.my-card {
  background-color: var(--background-color);
  margin-bottom: 10px;
  color: var(--text-color);
  border-color: var(--border-color);
}

.my-card-header {
  border-color: var(--border-color);
}

.my-card-body {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: flex-start;
}

.my-card-text {
  margin-right: 10px;
}

.my-card-body-text {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
}

.icon {
    stroke: #FFFFFF;
    width: 17px;
    height: 17px;
    fill: #FFFFFF;
    margin: 3px;
}

@media (max-width: 425px) {
  .my-card-text {
    margin: 7px 0;
  }

  .my-card-header {
    padding: 12px;
  }

  .my-card-body {
    padding: 12px;
  }
}
</style>
