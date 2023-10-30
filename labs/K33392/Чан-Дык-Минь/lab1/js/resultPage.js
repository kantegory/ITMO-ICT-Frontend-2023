const BMR = document.getElementById("BMR");
const BMI = document.getElementById("BMI");
const idealWeight = document.getElementById("idealWeight");
const BMItext = document.getElementById("BMItext");
const maintainCalo = document.getElementById("maintainCalo");
const cuttingCalo = document.getElementById("cuttingCalo");
const bulkingCalo = document.getElementById("bulkingCalo");

BMR.innerHTML = localStorage.getItem("BMR");
BMI.innerHTML = localStorage.getItem("BMI");
idealWeight.innerHTML = localStorage.getItem("idealWeight");
BMItext.innerHTML = BMI.innerHTML;

maintainCalo.innerHTML = BMR.innerHTML;
cuttingCalo.innerHTML = parseInt(BMR.innerHTML) - 500;
bulkingCalo.innerHTML = parseInt(BMR.innerHTML) + 500;
