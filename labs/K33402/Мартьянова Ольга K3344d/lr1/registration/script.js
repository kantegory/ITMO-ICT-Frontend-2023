const regForm = document.getElementById("registrationForm")

regForm.addEventListener("submit", function (event) {
    event.preventDefault(); 

    setUserLoggedIn(true); 

    window.location.href = "../account/account.html";
});