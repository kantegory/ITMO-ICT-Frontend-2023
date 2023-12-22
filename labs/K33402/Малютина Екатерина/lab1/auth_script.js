const REGEXP_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
window.addEventListener("DOMContentLoaded", updateNavigationButtons, false);

function signinUser() {
    const passwordField = document.getElementById("password-in")
    const emailField = document.getElementById("email-in")

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect")
        return false
    }

    if (localStorage.getItem(emailField.value)) {
        if (localStorage.getItem(emailField.value) === passwordField.value) {
            setUserLoggedIn(true)
            updateNavigationButtons();
            return true
        } else {
            alert("Passwords does not match")
            return false
        }
    } else {
        alert("There is no user with this email")
        return false
    }
}

function 1registerUser() {
    const passwordField = document.getElementById("password-up")
    const passwordConfirmationField = document.getElementById("confirmation-password-up")
    const emailField = document.getElementById("email-up")

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect")
        return false
    }

    if (passwordField.value === passwordConfirmationField.value) {
        localStorage.setItem(emailField.value, passwordField.value)
        setUserLoggedIn(true)
        updateNavigationButtons();
        return true
    } else {
        alert("Passwords does not match")
        return false
    }
}

function exit1() {
    localStorage.setItem("loggedIn", "false");
    updateNavigationButtons();
}

function isUserLoggedIn1() {
    return localStorage.getItem("loggedIn") === "true";
}

function updateNavigationButtons1() {
    const auth = document.getElementById("authBtn")
    const account = document.getElementById("accountBtn")
    const exit = document.getElementById("exitBtn")

    if (isUserLoggedIn()) {
        if (auth) auth.style.display = "none";
        if (account) account.style.display = "block";
        if (exit) exit.style.display = "block";
    } else {
        if (auth) auth.style.display = "block";
        if (account) account.style.display = "none";
        if (exit) exit.style.display = "none";
    }
}

function setUserLoggedIn1(status) {
    localStorage.setItem("loggedIn", status);
    updateNavigationButtons();
}