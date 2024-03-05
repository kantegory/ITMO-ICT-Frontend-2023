<script setup>
import useCalculations from '@/composable/useCalculations'
const { calorie, bmi } = useCalculations()
</script>
<template>
  <div class="d-flex flex-column justify-content-center">
    <h2 style="padding-bottom: 3%; text-align: center">Results:</h2>
    <div class="d-flex">
      <h4 class="border text-center todayResults" style="padding: 15px">Maintain weight</h4>
      <h4 class="border text-center todayResults" style="padding: 15px">
        {{ Math.round(calorie) }} Calories/day
      </h4>
    </div>
    <div class="d-flex">
      <h4 class="border text-center todayResults" style="padding: 15px; color: #046b04">
        Mild weight loss<br />0.25 kg/week
      </h4>
      <h4 class="border text-center todayResults" style="padding: 15px; color: #046b04">
        {{ Math.round(calorie * 0.9) }} Calories/day
      </h4>
    </div>
    <div class="d-flex">
      <h4 class="border text-center todayResults" style="padding: 15px; color: #00d400">
        Weight loss<br />0.5 kg/week
      </h4>
      <h4 class="border text-center todayResults" style="padding: 15px; color: #00d400">
        {{ Math.round(calorie * 0.79) }} Calories/day
      </h4>
    </div>
    <div class="d-flex">
      <h4 class="border text-center todayResults" style="padding: 15px; color: red">
        Extreme weight loss<br />1 kg/week
      </h4>
      <h4 class="border text-center todayResults" style="padding: 15px; color: red">
        {{ Math.round(calorie * 0.59) }} Calories/day
      </h4>
    </div>

    <h2 class="text-center" style="padding-top: 30px">Body mass index:</h2>
    <h1 class="text-center" style="padding-top: 15px">{{ Math.round(bmi) }}</h1>
    <h2 class="text-center" style="padding-top: 15px">Normal: 15-25</h2>
  </div>
</template>
<style scoped>
.todayResults {
  width: 50%;
}
</style>
