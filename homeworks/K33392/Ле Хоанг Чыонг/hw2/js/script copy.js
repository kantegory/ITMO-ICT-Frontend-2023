function saveResultToLocalStorage(caloriesNeeded) {

    let history = JSON.parse(localStorage.getItem('calorieHistory')) || [];

    const historyItem = {
        weight: parseFloat(document.getElementById('weight').value),
        height: parseFloat(document.getElementById('height').value),
        age: parseInt(document.getElementById('age').value),
        gender: document.getElementById('gender').value,
        activityLevel: document.getElementById('activity-level').value,
        caloriesNeeded: caloriesNeeded.toFixed(2),
        date: new Date().toLocaleString()
    };


    history.push(historyItem);


    localStorage.setItem('calorieHistory', JSON.stringify(history));
}
var calorieData = [1500, 1600, 1400, 1800, 1700, 1900, 2000];
function displayCalorieChart() {
    var ctx = document.getElementById('calorieChart').getContext('2d');
    var calorieChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['Day 1', 'Day 2', 'Day 3', 'Day 4', 'Day 5', 'Day 6', 'Day 7'],
            datasets: [{
                label: 'Calories Consumed',
                data: calorieData,
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.4,
                pointRadius: 4, // Điểm trên đường đồ thị
                pointHitRadius: 10 // Vùng chọn điểm trên đồ thị
            }]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}
function calculateCalories() {

    const weight = parseFloat(document.getElementById('weight').value);
    const height = parseFloat(document.getElementById('height').value);
    const age = parseInt(document.getElementById('age').value);
    const gender = document.getElementById('gender').value;
    const activityLevel = {
        'sedentary': 1.2,
        'lightly-active': 1.375,
        'moderately-active': 1.55,
        'very-active': 1.725,
        'super-active': 1.9
    }[document.getElementById('activity-level').value];


    console.log(weight)

    let bmr;

    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const caloriesNeeded = bmr * activityLevel;


    // const resultElement = document.getElementById('result');
    // resultElement.innerHTML = `Estimated daily calorie needs: <strong>${caloriesNeeded.toFixed(2)} kcal</strong>`;
    saveResultToLocalStorage(caloriesNeeded);
}

function calculateCaloriesAndRedirect() {
    calculateCalories()
    console.log("ok")
    window.location.href = "test.html";
    const maintainWeightElement = document.getElementById('maintain-weight');
    maintainWeightElement.textContent = 2000; 
}
const searchBtn = document.getElementById('search-btn');
const mealList = document.getElementById('meal');

searchBtn.addEventListener('click', getMealList);

mealList.addEventListener('click', getMealRecipe);
function extractRecipeIdFromUrl(url) {
    const regex = /recipe_([a-fA-F0-9]+)/;
    const match = url.match(regex);
    if (match) {
        return match[1];
    } else {
        return null;
    }
}


function getMealList() {
    let searchInputTxt = document.getElementById('search-input').value.trim();
    fetch(`https://api.edamam.com/api/recipes/v2?type=public&q=${searchInputTxt}&app_id=4937ba86&app_key=fff56f4c2af9b872d247b655b03cbf43`)
        .then(response => response.json())
        .then(data => {
            let html = "";
            if (data.hits) {
                data.hits.forEach((meall, index) => {
                    let meal = meall.recipe
                    if (index % 3 === 0) {
                        html += '<div class="row">';
                    }
                    console.log(extractRecipeIdFromUrl(meal.uri))
                    html += `
                    <div class="col-md-4">
                        <div class="card mb-4" data-id="${extractRecipeIdFromUrl(meal.uri)}">
                            <img src="${meal.image}" class="card-img-top" alt="food">
                            <div class="card-body">
                                <h5 class="card-title">${meal.label}</h5>
                                <a href="#" class="recipe-btn">Get Recipe</a>
                            </div>
                        </div>
                    </div>
                `;

                    if (index % 3 === 2 || index === data.hits.length - 1) {
                        html += '</div>';
                    }
                });
                mealList.classList.remove('notFound');
            } else {
                html = "Sorry, we didn't find any meal!";
                mealList.classList.add('notFound');
            }

            mealList.innerHTML = html;
        });
}

function generateIngredientsList(meal) {
    let ingredientsList = '';
    for (let i = 0; i < meal.length; i++) {

        ingredientsList += `<li>${meal[i]}</li>`;

    }
    return ingredientsList;
}

function getMealRecipe(e) {
    e.preventDefault();
    if (e.target.classList.contains('recipe-btn')) {
        let mealItem = e.target.parentElement.parentElement;
        const mealId = mealItem.getAttribute('data-id');
     
        fetch(`https://api.edamam.com/api/recipes/v2/${mealId}?type=public&app_id=4937ba86&app_key=fff56f4c2af9b872d247b655b03cbf43`)
            .then(response => response.json())
            .then(data => {
               // console.log(data)
                showRecipe(data.recipe);
            });
    }
}

function showRecipe(meal) {
    console.log(meal)
    const modal = new bootstrap.Modal(document.getElementById('recipeModal'));

    const html = `
    <div class="container">
    <div class="row">
        <div class="col-12">
            <h2 class="recipe-title">${meal.label}</h2>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="recipe-instruct bg-light p-3 rounded">
                <p><span class="font-weight-bold">Calories:</span> <span class="text-info">${meal.calories}</span></p>
                <p><span class="font-weight-bold">TotalCO2Emissions:</span> <span class="text-info">${meal.totalCO2Emissions}</span></p>

                <h4>Ingredients:</h4>
                <ul>
                    ${generateIngredientsList(meal.ingredientLines)}
                </ul>
            </div>
        </div>
    </div>
    <div class="row">
        <div class="col-12">
            <div class="recipe-meal-img">
                <img src="${meal.image}" alt="${meal.label}" class="img-fluid rounded">
            </div>
        </div>
    </div>
</div>

        
        `;

    const recipeContent = document.getElementById('recipe-content');
    recipeContent.innerHTML = html;

    modal.show();


}
