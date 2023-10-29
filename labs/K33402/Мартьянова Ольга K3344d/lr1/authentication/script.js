const enterForm = document.getElementById("entranceForm")

enterForm.addEventListener("submit", function (event) {
    event.preventDefault();

    setUserLoggedIn(true);

    window.location.href = "../account/account.html";
});