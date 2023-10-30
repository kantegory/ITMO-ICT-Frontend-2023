
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
    if(searchInputTxt=="") searchInputTxt = "chicken";
    
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
                   // console.log(extractRecipeIdFromUrl(meal.uri))
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
