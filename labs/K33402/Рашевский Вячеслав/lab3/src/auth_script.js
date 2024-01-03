import {useFetchRequests} from "@/composables/useFetchRequests";
import {useCheckAuth} from "@/composables/useCheckAuth";

const REGEXP_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// window.addEventListener("DOMContentLoaded", updateNavigationButtons, false);
document.addEventListener('DOMContentLoaded', () => useCheckAuth())

export async function signinUser() {
    const passwordField = document.getElementById("password-in");
    const emailField = document.getElementById("email-in");

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect");
        return false;
    }

    const body = {};
    body['email'] = emailField.value;
    body['password'] = passwordField.value;
    const {response, error} = useFetchRequests('http://localhost:3000/signin', "POST", JSON.stringify(body));
    if (error.value !== null) {
        return false;
    }
    const {accessToken, user} = await response;
    localStorage.accessToken = accessToken;
    localStorage.user = JSON.stringify(user);
    return true;
}

export async function registerUser() {
    const passwordField = document.getElementById("password-up");
    const passwordConfirmationField = document.getElementById("confirmation-password-up");
    const emailField = document.getElementById("email-up");

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect");
        return false;
    }

    if (passwordField.value !== passwordConfirmationField.value) {
        alert("Passwords does not match");
        return false;
    }

    const body = {};
    body['email'] = emailField.value;
    body['password'] = passwordField.value;

    const {response, error} = useFetchRequests('http://localhost:3000/signup', "POST", JSON.stringify(body));
    if (error.value !== null) {
        return false;
    }
    const {accessToken, user} = await response;
    localStorage.accessToken = accessToken;
    localStorage.user = JSON.stringify(user);
    return true;
}
