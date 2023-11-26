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


    const resultElement = document.getElementById('result');
    resultElement.innerHTML = `Estimated daily calorie needs: <strong>${caloriesNeeded.toFixed(2)} kcal</strong>`;
    saveResultToLocalStorage(caloriesNeeded);
}