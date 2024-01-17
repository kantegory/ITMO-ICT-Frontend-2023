const age = document.getElementById("inputAge");
const height = document.getElementById("inputHeight");
const weight = document.getElementById("inputWeight");
const selection = document.getElementById("selectInput");
let gender = "";
let idealWeight = 0;

function BMICalculator(h, w) {
    parseInt(h, 10);
    parseInt(w, 10);

    return (w / ((h / 100) * (h / 100))).toFixed(2);
}

function BMRCalculator(h, w, a, sex, activity) {
    parseInt(h, 10);
    parseInt(w, 10);
    parseInt(a, 10);
    let R = 0
    switch (activity) {
        case '0':
            R = 1.2;
            break;
        case '1':
            R = 1.375;
            break;
        case '2':
            R = 1.55;
            break;
        case '3':
            R = 1.725;
            break;
        case '4':
            R = 1.9;
            break;
    }

    if (sex == "men")
        return ((88.362 + (13.397 * w) + (4.799 * h) - (5.677 * a)) * R).toFixed(2);
    else
        return ((447.593 + (9.247 * w) + (3.098 * h) - (4.330 * a)) * R).toFixed(2);
}

function calcTdee() {
    gender = document.querySelector('input[name="flexRadio"]:checked');
    const BMI = BMICalculator(height.value, weight.value);
    const BMR = BMRCalculator(height.value, weight.value, age.value, gender.value, selection.value);
    idealWeight = calcWeight(height.value, gender.value);
    console.log(idealWeight);

    localStorage.setItem("idealWeight", idealWeight);
    localStorage.setItem("BMI", BMI);
    localStorage.setItem("BMR", Math.round(BMR));
    window.location.href = "resultPage.html";
}

function calcWeight(h, sex) {
    parseInt(h, 10);
    h = h*0.39370;
    if (sex == "men")
        return Math.round(50+2.3*(h-60));
    else
        return Math.round(45.5+2.3*(h-60));
}
