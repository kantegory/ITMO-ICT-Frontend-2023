<!-- NutritionTracker.vue -->
<template>
  <div class="flex row items-start">
    <h1 class="nutrition-header ml-16 mb-4">Nutrition Tracker</h1>
    <div class="container col-3 ">
      <div class="form-group">
        <label for="foodInput">Enter Food:</label>
        <input class="form-control" v-model="food" id="foodInput" />
      </div>
      <div class="form-group">
        <label for="foodAmount">Amount (g):</label>
        <input class="form-control" v-model.number="foodAmount" type="number" id="foodAmount" />
      </div>
      <div>
        <button class="btn btn-sm py-2 px-3 add-food-btn mt-2"
          :class="{ 'btn-outline-light': isDark, 'btn-outline-dark': !isDark }" type="button" @click="addFood"><strong>
            ADD FOOD</strong></button>
      </div>
    </div>

    <div class="col-4">
      <h3 class=" text-[#282828] dark:text-[#bbbbbb]">Eaten Food List</h3>
      <ul class="eaten-list">
        <li v-for="(eatenFood, index) in eatenFoods" :key="index" class="eaten-item flex">
          <div class="eaten-info ">
            {{ eatenFood.name }}: {{ eatenFood.amount }} g - {{ eatenFood.calories }} kcal - {{ eatenFood.date }}
          </div>
          <button @click="deleteFood(index)" class="btn btn-sm btn-outline-danger ml-auto">Delete</button>
        </li>
      </ul>
    </div>


    <div class="col-4">
      <h3 class="text-[#282828] dark:text-[#bbbbbb]">Daily Calorie Total</h3>
      <div class="daily-total" v-for="(total, date) in dailyCalorieTotal" :key="date">
        <p>{{ date }}: {{ total }} kcal</p>
      </div>
    </div>

  </div>
</template>
  
<script>
import { ref } from 'vue';
import { useNutritionInfo } from '@/composables/useNutritionInfo';
import { isDark } from '@/services/DarkModeService';

export default {
  setup() {
    const { food, nutritionInfo, getNutritionInfo } = useNutritionInfo();
    const dailyCalorieTotal = ref({});
    const eatenFoods = ref([]);
    const foodAmount = ref(100);

    async function addFood() {
      await getNutritionInfo(food.value);
      console.log(nutritionInfo.value)
      if (nutritionInfo.value.calories == 0) {
        alert("Please type the name of food first!");
      }
      else if (nutritionInfo.value.calories !== undefined) {
        alert("Food has been added successfully!");
        const calories = calculateCalories(nutritionInfo.value.calories, foodAmount.value);
        updateDailyCalorieTotal(calories);
        eatenFoods.value.push({
          name: food.value,
          amount: foodAmount.value,
          calories: calories,
          date: getCurrentDate(),
        });

      }
    }

    function calculateCalories(caloriesPer100g, amount) {
      return (caloriesPer100g * amount) / 100;
    }

    function updateDailyCalorieTotal(calories) {
      const currentDate = getCurrentDate();
      if (!dailyCalorieTotal.value[currentDate]) {
        dailyCalorieTotal.value[currentDate] = 0;
      }
      dailyCalorieTotal.value[currentDate] += calories;
    }

    function getCurrentDate() {
      const now = new Date();
      const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
      return formattedDate;
    }

    function deleteFood(index) {
      const foodToDelete = eatenFoods.value[index];
      const caloriesToDelete = calculateCalories(
        nutritionInfo.value.calories,
        foodToDelete.amount
      );
      updateDailyCalorieTotal(-caloriesToDelete, foodToDelete.date);
      eatenFoods.value.splice(index, 1);
    }

    return { food, nutritionInfo, addFood, deleteFood, dailyCalorieTotal, eatenFoods, foodAmount, isDark };
  },
};
</script>
  
<style scoped>
.input-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
}

.form-group {
  margin-right: 10px;
}

.add-food-btn {
  cursor: pointer;
}

.eaten-list {
  list-style: none;
  padding: 0;
}

.eaten-item {
  margin-bottom: 5px;
  padding: 5px;
  border: 1px solid #ccc;
  border-radius: 5px;
}

.daily-total {
  margin-bottom: 10px;
}
</style>
  