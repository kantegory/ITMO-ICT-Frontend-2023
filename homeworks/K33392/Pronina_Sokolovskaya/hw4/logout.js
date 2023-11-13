const btn = document.getElementById("logout_btn")

btn.onclick = function() {
    sessionStorage.clear();
    window.location.href = "main.html";
}