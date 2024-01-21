import "../../index.scss";
import "./Main.scss";
import { useState, useEffect } from "react";
import { FoodItem } from "../../components/FoodItem/FoodItem";
import axios from "axios";
import { Header } from "../../components/Header/Header";

type Food = {
  title: string;
  foodImg: string;
  calories: number;
};

export const Main = () => {
  const [gender, setGender] = useState("male");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [age, setAge] = useState("");
  const [bmr, setBmr] = useState(0);
  const [foods, setFoods] = useState<Food[]>([]);
  const [remainingCalories, setRemainingCalories] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");

  const handleEatClick = (calories: number, foodTitle: string) => {
    const updatedRemainingCalories = remainingCalories - calories;
    setRemainingCalories(updatedRemainingCalories);

    addFoodToEatenList(foodTitle);
  };

  const addFoodToEatenList = (foodTitle: string) => {
    axios
      .post("http://localhost:3000/foodsEaten", { title: foodTitle })
      .then(() => {
        alert(
          `Продукт "${foodTitle}" успешно добавлен в список съеденных продуктов.`
        );
      })
      .catch((error) => {
        console.error("Ошибка при добавлении продукта:", error);
      });
  };

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  const filteredFoods = foods.filter((food) =>
    food.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  useEffect(() => {
    axios
      .get<Food[]>("http://localhost:3000/foods")
      .then((response) => {
        setFoods(response.data);
      })
      .catch((error) => {
        console.error("Ошибка получения данных о продуктах:", error);
      });
  }, []);

  const handleCalculateCalories = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!gender) {
      alert("Выберите пол");
      return;
    }

    const weightFloat = parseFloat(weight);
    const heightFloat = parseFloat(height);
    const ageFloat = parseFloat(age);

    if (isNaN(weightFloat) || isNaN(heightFloat) || isNaN(ageFloat)) {
      alert("Пожалуйста, введите корректные данные");
      return;
    }

    let bmr = 0;
    if (gender === "female") {
      bmr = 655 + 9.6 * weightFloat + 1.8 * heightFloat - 4.7 * ageFloat;
    } else if (gender === "male") {
      bmr = 66 + 13.7 * weightFloat + 5 * heightFloat - 6.8 * ageFloat;
    }

    setBmr(bmr);
    setRemainingCalories(bmr);

    addCaloriesLeft(bmr);
  };

  const addCaloriesLeft = (caloriesLeftValue: number) => {
    axios
      .post("http://localhost:3000/caloriesLeft", { value: caloriesLeftValue })
      .then(() => {
        alert(`Информация о количестве оставшихся калорий успешно добавлена.`);
      })
      .catch((error) => {
        console.error("Ошибка при добавлении информации о калориях:", error);
      });
  };

  return (
    <div className="mainWrapper">
      <Header onSearch={handleSearch} />
      <main>
        <h1 className="text">
          Какая твоя норма калорий в день? Давай посчитаем!
        </h1>
        <form onSubmit={handleCalculateCalories} className="mainForm">
          <form className="formGroup">
            <label>Пол:</label>
            <select
              id="gender"
              aria-label="gender select"
              className="formOption"
              value={gender}
              onChange={(e) => setGender(e.target.value)}
            >
              <option value="male">Мужской</option>
              <option value="female">Женский</option>
            </select>
          </form>
          <form className="formGroup">
            <label>Рост (в см):</label>
            <input
              aria-label="height input"
              className="formOption"
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </form>
          <form className="formGroup">
            <label>Вес (в кг):</label>
            <input
              aria-label="weight input"
              className="formOption"
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </form>
          <form className="formGroup">
            <label>Возраст:</label>
            <input
              aria-label="age input"
              className="formOption"
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
            />
          </form>
          <section className="buttons">
            <button className="button" type="submit">
              Рассчитать
            </button>
          </section>
        </form>

        {bmr > 0 && (
          <h2 className="text">
            Ваша суточная норма калорий: {bmr.toFixed(2)} кКал
          </h2>
        )}

        {remainingCalories > 0 && (
          <h3 className="text">
            Остаток суточной нормы калорий: {remainingCalories} кКал
          </h3>
        )}
        <section className="foodSelection">
          {filteredFoods.map((food, index) => (
            <div key={index}>
              <FoodItem
                title={food.title}
                foodImg={food.foodImg}
                calories={food.calories}
                onEatClick={() => handleEatClick(food.calories, food.title)}
              />
            </div>
          ))}
        </section>
      </main>
    </div>
  );
};
