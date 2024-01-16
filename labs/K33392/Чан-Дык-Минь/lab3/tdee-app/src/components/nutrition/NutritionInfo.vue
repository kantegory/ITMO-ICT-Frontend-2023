<template>
    <div class="container mt-3" id="nutritionInfo">
        <h3 class="text-[#282828] dark:text-[#bbbbbb]">Nutrition Information for {{ foodName }} (per 100g)</h3>
        <p>Calories: {{ nutritionInfo.calories }} kcal</p>
        <p>Protein: {{ nutritionInfo.protein }} g</p>
        <p>Fat: {{ nutritionInfo.fat }} g</p>
        <p>Carbs: {{ nutritionInfo.carbs }} g</p>
    </div>
</template>
  
<script setup>
const { props } = defineProps(['foodName', 'nutritionInfo']);
</script>

<style>
h2 {
    color: hsla(160, 100%, 37%, 1);
}
</style>