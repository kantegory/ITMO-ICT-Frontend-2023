const REGEXP_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
window.addEventListener("DOMContentLoaded", updateNavigationButtons, false);

function signinUser() {
    const passwordField = document.getElementById("password-in");
    const emailField = document.getElementById("email-in");

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect");
        return false;
    }

    if (localStorage.getItem(emailField.value)) {
        if (localStorage.getItem(emailField.value) === passwordField.value) {
            setUserLoggedIn(true);
            updateNavigationButtons();
            return true;
        } else {
            alert("Passwords does not match");
            return false;
        }
    } else {
        alert("There is no user with this email");
        return false;
    }
}

function registerUser() {
    const passwordField = document.getElementById("password-up");
    const passwordConfirmationField = document.getElementById("confirmation-password-up");
    const emailField = document.getElementById("email-up");

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect");
        return false;
    }

    if (passwordField.value === passwordConfirmationField.value) {
        localStorage.setItem(emailField.value, passwordField.value);
        setUserLoggedIn(true);
        updateNavigationButtons();
        return true
    } else {
        alert("Passwords does not match");
        return false;
    }
}

function exit() {
    localStorage.setItem("loggedIn", "false");
    updateNavigationButtons();
}

function isUserLoggedIn() {
    return localStorage.getItem("loggedIn") === "true";
}

function updateNavigationButtons() {
    const auth = document.getElementById("auth");
    const account = document.getElementById("account");
    const exit = document.getElementById("exit");

    if (isUserLoggedIn()) {
        if (auth) auth.style.display = "none";
        if (account) account.style.display = "block";
        if (exit) exit.style.display = "block";
        if (window.location.href.includes("account.html")) {
            const readySoonCard = document.getElementById("ready-soon-card");
            const forbiddenCard = document.getElementById("forbidden-card");
            if (readySoonCard) readySoonCard.style.display = "block";
            if (forbiddenCard) forbiddenCard.style.display = "none";
        } else if (window.location.href.includes("auth.html")) {
            console.log("redirected from auth to account for logged in user");
            window.location.href = "../html/account.html";
        }
    } else {
        if (auth) auth.style.display = "block";
        if (account) account.style.display = "none";
        if (exit) exit.style.display = "none";
        if (window.location.href.includes("account.html")) {
            const readySoonCard = document.getElementById("ready-soon-card");
            const forbiddenCard = document.getElementById("forbidden-card");
            if (readySoonCard) readySoonCard.style.display = "none";
            if (forbiddenCard) forbiddenCard.style.display = "block";
        } else if (window.location.href.includes("auth.html")) {
            const toastRedirected = document.getElementById('liveToast');
            if (toastRedirected) toastRedirected.style.display = "none";
        }
    }
}

function setUserLoggedIn(status) {
    localStorage.setItem("loggedIn", status);
    updateNavigationButtons();
}