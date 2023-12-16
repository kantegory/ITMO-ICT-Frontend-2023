const signinForm = document.getElementById("signinForm");
if (signinForm){
    signinForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (signinUser()) {
            window.location.href = "account.html";
        }
    })
}


const signupForm = document.getElementById("signupForm");
if (signupForm) {
    signupForm.addEventListener("submit", function (event) {
        event.preventDefault();
        if (registerUser()) {
            window.location.href = "account.html";
        }
    })
}