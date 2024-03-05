<script setup>
import stats from '@/components/stats.vue'
import useCalculations from '@/composable/useCalculations'
const { calculated, calculate } = useCalculations()
</script>

<template>
  <div class="d-flex justify-content-center">
    <div class="d-flex flex-column">
      <h1 style="margin-top: 10%">Here you can see your today's stats</h1>
      <div v-if="calculated">
        <div class="d-flex flex-column justify-content-center" style="padding-top: 10%">
          <h3 style="padding-bottom: 3%; text-align: center">But first enter your weight:</h3>
          <input
            type="text"
            name="weight"
            id="weight"
            autocomplete="off"
            required
            style="width: 50%; margin: auto"
          />

          <button type="submit" class="btnPostWeight" @click="calculate" style="margin-top: 3%">
            add
          </button>
        </div>
      </div>
      <div v-else>
        <stats />
      </div>
    </div>
  </div>
</template>

<style scoped>
.btnPostWeight {
  background-color: #141414;
  color: #00d400;
  font-size: 20px;
  margin: auto;
  width: 50%;
}
</style>
