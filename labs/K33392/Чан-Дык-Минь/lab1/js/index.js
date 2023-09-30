const age = document.getElementById("inputAge");
const height = document.getElementById("inputHeight");
const weight = document.getElementById("inputWeight");
const selection = document.getElementById("selectInput")
const tdee  = document.getElementById("tdee");
const msgtdee = document.getElementById("msgtdee");

function BMICalculator(h, w){
    parseInt(h, 10);
    parseInt(w, 10);

    return (w/((h/100)*(h/100))).toFixed(2);
}

function BMRCalculator(h, w, a, sex, activity){
    parseInt(h, 10);
    parseInt(w, 10);
    parseInt(a, 10);
    console.log(activity);
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
    console.log(R);

    if (sex == "men")
        return ((88.362 + (13.397*w) + (4.799*h) - (5.677*a))*R).toFixed(2);
    else
        return ((447.593 + (9.247*w) + (3.098*h) - (4.330*a))*R).toFixed(2);
}

function calcTdee() {
    const gender = document.querySelector('input[name="flexRadio"]:checked')
    const BMI = BMICalculator(height.value, weight.value);
    const BMR = BMRCalculator(height.value, weight.value, age.value, gender.value, selection.value);
    tdee.innerHTML = BMR;
    msgtdee.innerHTML = "calories per day";


    console.log("Your BMI: ", BMI);
    console.log("Your BMR: ",BMR)

}