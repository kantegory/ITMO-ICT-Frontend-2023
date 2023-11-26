const logoutButton = document.getElementById("button-logout");

logoutButton.addEventListener("click", () => {
    window.localStorage.clear();
    window.location.href = "/pages/login.html";
});

if (window.localStorage.accessToken === undefined) {
    window.location.href = "/pages/login.html";
}