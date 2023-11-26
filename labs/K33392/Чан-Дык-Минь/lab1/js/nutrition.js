const apiKey = 'e5FpDu9gY6PdfuHUlvHyrHKvPfnKr0U4DkaFlYrX';
const food = document.getElementById("inputFoodName");

function getFoodName(){
  getNutritionInfo(food.value);
}

async function getNutritionInfo(foodName) {
  console.log(foodName);
  const apiUrl = `https://api.nal.usda.gov/fdc/v1/foods/search?query=${foodName}&api_key=${apiKey}`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();

    if (data.foods && data.foods.length > 0) {
      const food = data.foods[0]; // Lấy thông tin về thực phẩm đầu tiên trong danh sách kết quả

      // Trích xuất thông tin dinh dưỡng
      const nutrients = food.foodNutrients;
      const nutritionInfo = {
        calories: nutrients.find(n => n.nutrientName === "Energy").value,
        protein: nutrients.find(n => n.nutrientName === "Protein").value,
        fat: nutrients.find(n => n.nutrientName === "Total lipid (fat)").value,
        carbs: nutrients.find(n => n.nutrientName === "Carbohydrate, by difference").value,
      };

      // Hiển thị thông tin dinh dưỡng
      const nutritionInfoDiv = document.getElementById("nutritionInfo");
      nutritionInfoDiv.innerHTML = `
    <h2>Nutrition Information for ${foodName} (per 100g)</h2>
    <p>Calories: ${nutritionInfo.calories} kcal</p>
    <p>Protein: ${nutritionInfo.protein} g</p>
    <p>Fat: ${nutritionInfo.fat} g</p>
    <p>Carbs: ${nutritionInfo.carbs} g</p>
  `;

      console.log("Thông tin dinh dưỡng cho", foodName, "trong 100g");
      console.log("Calories:", nutritionInfo.calories, "kcal");
      console.log("Protein:", nutritionInfo.protein, "g");
      console.log("Fat:", nutritionInfo.fat, "g");
      console.log("Carbs:", nutritionInfo.carbs, "g");
    } else {
      console.log("Không tìm thấy thông tin dinh dưỡng cho", foodName);
    }
  } catch (error) {
    console.error('Lỗi khi gửi yêu cầu API: ', error);
  }
}

// Gọi hàm với tên thực phẩm cần tra cứu
