import {getAuthToken} from "@/composable/getAuthToken.js";
import {checkAuth} from "@/composable/checkAuth.js";

const REGEXP_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
document.addEventListener('DOMContentLoaded', () => checkAuth());

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

    const response = await fetch('http://localhost:3000/signin', {
        method: "POST",
        body: JSON.stringify(body),
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${getAuthToken()}`
        }
    });
    const responseJson = await response.json();
    const responseStatus = response.status;

    console.log(responseStatus);
    console.log(responseJson);
    if (responseStatus === 200 || responseStatus === 201) {
        const {accessToken, user} = responseJson
        localStorage.accessToken = accessToken
        localStorage.user = JSON.stringify(user)
        return true;
    } else if (responseStatus === 400) {
        alert("нет такого пользователя или неправильный пароль")
    } else {
        alert("что-то пошло не так");
        return false;
    }
}

export async function registerUser() {
    const passwordField = document.getElementById("password-up");
    const passwordConfirmationField = document.getElementById("confirmation-password-up");
    const emailField = document.getElementById("email-up");

    if (!REGEXP_EMAIL.test(emailField.value)) {
        alert("Email is incorrect");
        return false;
    }

    if (passwordField.value === passwordConfirmationField.value) {
        const body = {};
        body['email'] = emailField.value;
        body['password'] = passwordField.value;

        const response = await fetch('http://localhost:3000/signup', {
            method: "POST",
            body: JSON.stringify(body),
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${getAuthToken()}`
            }
        });
        const responseJson = await response.json();
        const responseStatus = response.status;

        console.log(responseStatus);
        console.log(responseJson);
        if (responseStatus === 200 || responseStatus === 201) {
            const {accessToken, user} = responseJson
            localStorage.accessToken = accessToken
            localStorage.user = JSON.stringify(user)
            return true;
        } else {
            alert("Something went wrong");
            return false;
        }
    } else {
        alert("Passwords does not match");
        return false;
    }
}
