import { ref } from 'vue';
import axios from 'axios';

const apiKey = 'e5FpDu9gY6PdfuHUlvHyrHKvPfnKr0U4DkaFlYrX';

export function useNutritionInfo() {
  const food = ref("");
  const nutritionInfo = ref({});

  async function getNutritionInfo(foodName) {
    const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodName}&api_key=${apiKey}`;
    try {
      const response = await axios.get(apiUrl);
      const data = response.data;

      if (data.foods && data.foods.length > 0) {
        const food = data.foods[0];
        const nutrients = food.foodNutrients;
        nutritionInfo.value = {
          calories: nutrients.find(n => n.nutrientName === "Energy")?.value || 0,
          protein: nutrients.find(n => n.nutrientName === "Protein")?.value || 0,
          fat: nutrients.find(n => n.nutrientName === "Total lipid (fat)")?.value || 0,
          carbs: nutrients.find(n => n.nutrientName === "Carbohydrate, by difference")?.value || 0,
        };
      } else {
        console.log("No nutrition information found for", foodName);
      }
    } catch (error) {
      console.error('Error sending API request: ', error);
    }
  }

  return { food, nutritionInfo, getNutritionInfo };
}
