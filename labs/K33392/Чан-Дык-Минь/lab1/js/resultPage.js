const BMR = document.getElementById("BMR");
const BMI = document.getElementById("BMI");
const idealWeight = document.getElementById("idealWeight");
const BMItext = document.getElementById("BMItext");
const maintainCalo = document.getElementById("maintainCalo");
const cuttingCalo = document.getElementById("cuttingCalo");
const bulkingCalo = document.getElementById("bulkingCalo");
const BMIClass = document.getElementById("BMIClass");

BMR.innerHTML = localStorage.getItem("BMR");
BMI.innerHTML = localStorage.getItem("BMI");
idealWeight.innerHTML = localStorage.getItem("idealWeight");
BMItext.innerHTML = BMI.innerHTML;

maintainCalo.innerHTML = BMR.innerHTML;
cuttingCalo.innerHTML = parseInt(BMR.innerHTML) - 500;
bulkingCalo.innerHTML = parseInt(BMR.innerHTML) + 500;

let intBMI = parseInt(BMI.innerHTML);
if(intBMI <= 18.5){
    BMIClass.innerHTML = "Underweight";
}
else if (intBMI >= 18.5 && intBMI  <= 24.9){
    BMIClass.innerHTML = "Normal Weight";
}
else if (intBMI >= 25 && intBMI  <= 29.9){
    BMIClass.innerHTML = "Overweight";
}
else if (intBMI >= 30){
    BMIClass.innerHTML = "Obesity";
}


