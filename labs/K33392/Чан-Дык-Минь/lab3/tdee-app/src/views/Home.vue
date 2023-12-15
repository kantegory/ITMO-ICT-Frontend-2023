<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
import { useBMI } from '@/composables/useBMI';
import { useBMR } from '@/composables/useBMR';
import { useWeightCalculator } from '@/composables/useWeightCalculator';
import ActivityInput from '.././components/home/ActivityInput.vue';
import GenderInput from '.././components/home/GenderInput.vue';
import { isDark } from '@/services/DarkModeService';

const age = ref("");
const height = ref("");
const weight = ref("");
const gender = ref("men");
const activityLevel = ref("0");
const BMI = ref("");
const BMR = ref(0);
const idealWeight = ref("");

const router = useRouter();
const { calculateBMI } = useBMI();
const { calculateBMR } = useBMR();
const { calculateWeight } = useWeightCalculator();


function calcTdee() {
  BMI.value = calculateBMI(height.value, weight.value);
  console.log("activityLevel: ", activityLevel.value)

  // Call BMRCalculator and update BMR value
  BMR.value = calculateBMR(height.value, weight.value, age.value, gender.value, activityLevel.value);

  // Update idealWeight based on the new gender
  idealWeight.value = calculateWeight(height.value, gender.value);

  localStorage.setItem("idealWeight", idealWeight.value);
  localStorage.setItem("BMI", BMI.value);
  localStorage.setItem("BMR", Math.round(BMR.value));

  router.push({ name: 'result' });
}

</script>

<template>

  <!-- TDEE Form -->
  <div class="container w-75 mt-5 pt-4 d-flex flex-column align-items-center border border-1 rounded-2 dark:bg-[#151515] ">
    <h1 class="mb-5 align-items-center">How Many Calories You Burn Every Day</h1>
    <form class="tdeeform">
      <!-- Age input -->
      <div class="d-flex flex-row mb-3">
        <label class="w-25">Age</label>
        <input v-model.number="age" class="form-control w-75" placeholder="year">
      </div>

      <!-- Weight input -->
      <div class="d-flex flex-row mb-3">
        <label class="w-25">Weight</label>
        <input v-model.number="weight" class="form-control w-75" placeholder="kg">
      </div>

      <!-- Height input -->
      <div class="d-flex flex-row mb-3">
        <label class="w-25">Height</label>
        <input v-model.number="height" class="form-control w-75" placeholder="cm">
      </div>

      <ActivityInput />
      <GenderInput />

      <!-- Submit button -->
      <button class="btn btn-lg mb-4" :class="{ 'btn-outline-light': isDark, 'btn-outline-dark': !isDark }" cl type="button" id="calculator" @click="calcTdee()">
        Calculate
      </button>
    </form>
  </div>

  <div class="container mt-11 w-75 px-0 mb-36">
    <h3 class="">What is TDEE?</h3>
    <p>TDEE stands for total daily energy expenditure. It is the total energy that a person uses in a day. TDEE is hard to measure accurately and varies day by day. More often, it is estimated using factors such as a person's basal metabolic rate (BMR), activity level, and the thermic effect of food.</p>
    <h3 class="mt-5">How TDEE Is Calculated</h3>
    <p>TDEE is calculated based on the factors described above. The calculation usually begins with an estimation of basal metabolic rate (BMR), which is based on the use of equations that have been developed for this specific purpose. This includes physical characteristics such as age, gender, height, and weight.</p>
    <p>Some of the more commonly used equations for estimating BMR include the Mifflin St-Jeor Equation, Harris-Benedict equation, and Katch-McArdle Formula. They are generally pretty similar, but the Katch-McArdle Formula, for example, which takes metabolic activity (resulting from differences between lean body mass and body fat) into account, can be more accurate for lean persons.</p>
    <p>Once BMR is calculated, it is typically multiplied by an activity level factor, which is based on factors such as exercise and whether a person has a sedentary or very active job.</p>
    <p>Other factors that can be considered in the calculation include the thermic effect of food, though this is not always factored into the calculation, and has a relatively smaller impact than BMR and activity level.</p>
  </div>
</template>

<style>
.dark body{
  color: rgb(187, 187, 187);
  background-color: var(--color-background-soft-dark);
  transition: background-color 0.3s ease !important;
}

body{
  color: rgb(31, 31, 31);
  background-color: var(--color-background-soft);
  transition: background-color 0.3s ease !important;
}

.border-1 {
    border-color:  var(--color-background-dark) !important;
}

@media (min-width: 1024px) {
  .home {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }

  .form-check-input[type="radio"]:checked {
    background-color: hsla(160, 100%, 37%, 1);
    border-color: hsla(160, 100%, 37%, 0.2);
  }
}
</style>
