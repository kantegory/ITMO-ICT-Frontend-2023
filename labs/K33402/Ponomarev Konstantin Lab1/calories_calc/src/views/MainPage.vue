<script>

import BaseLayout from "@/layouts/BaseLayout.vue";
import {useCalculatedCaloriesStore} from "@/stores/calculatedCaloriesStore";
import {onMounted} from "vue";
import FoodItem from "@/components/FoodItem.vue";

export default {
  components: {BaseLayout, FoodItem},
  setup() {
    const caloriesStore = useCalculatedCaloriesStore()
    onMounted(() => {
      caloriesStore.loadData();
    });
    return {caloriesStore}
  },

}
</script>

<template>
  <base-layout>
    <div class="card">
      <div class="card-body">
        <h5 class="card-title">Ваш прогресс</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          {{ caloriesStore.getDailyAteFoodCalories + "/" + caloriesStore.calculatedRation.calories + " ккал" }}
        </h6>
        <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="25" aria-valuemin="0"
             aria-valuemax="100">
          <div class="progress-bar" :style="{width: `${caloriesStore.currentCaloriesPercent}%`}"></div>
        </div>
        <div class="row mt-3 justify-content-between">
          <div class="col">
            <div>Белки</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" :style="{width: `${caloriesStore.currentProteinsPercent}%`}"></div>
            </div>
            <div>{{
                caloriesStore.getDailyAteFoodProteins + "/" + caloriesStore.calculatedRation.proteins + " гр"
              }}
            </div>
          </div>
          <div class="col">
            <div>Жиры</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" :style="{width: `${caloriesStore.currentFatsPercent}%`}"></div>
            </div>
            <div>{{ caloriesStore.getDailyAteFoodFats + "/" + caloriesStore.calculatedRation.fats + " гр" }}</div>
          </div>
          <div class="col">
            <div>Углеводы</div>
            <div class="progress" role="progressbar" aria-label="Basic example" aria-valuenow="0" aria-valuemin="0"
                 aria-valuemax="100">
              <div class="progress-bar" :style="{width: `${caloriesStore.currentCarbohydratesPercent}%`}"></div>
            </div>
            <div>{{
                caloriesStore.getDailyAteFoodCarbohydrates + "/" + caloriesStore.calculatedRation.carbohydrates + " гр"
              }}
            </div>
          </div>
        </div>
      </div>
    </div>
    <h5 class="mt-4">Последняя еда</h5>
    <div class="list-container mt-3">
      <div class="col">
        <FoodItem v-for="food of caloriesStore.dailyAteFood" class="mt-1" :key="food" :data="food"/>
      </div>
    </div>
  </base-layout>
</template>

<style scoped>

</style>
