<!-- RecipeDetails.vue -->
<template>
    <div class="container">
        <div class="row">
            <div class="col-12">
                <h2 class="recipe-title">{{ meal.label }}</h2>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="recipe-instruct bg-light p-3 rounded">
                    <p><span class="font-weight-bold">Calories:</span> <span class="text-info">{{ meal.recipe.calories }}</span>
                    </p>
                    <p><span class="font-weight-bold">TotalCO2Emissions:</span> <span class="text-info">{{
                        meal.recipe.totalCO2Emissions }}</span></p>
                    <h4>Ingredients:</h4>
                    <ul>
                        <li v-for="(ingredient, index) in meal.recipe.ingredientLines" :key="index">{{ ingredient }}</li>
                    </ul>
                </div>
            </div>
        </div>
        <div class="row">
            <div class="col-12">
                <div class="recipe-meal-img">
                    <img :src="meal.image" :alt="meal.label" class="img-fluid rounded">
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        meal: Object,
    },
};
</script>
  
<style scoped></style>
  