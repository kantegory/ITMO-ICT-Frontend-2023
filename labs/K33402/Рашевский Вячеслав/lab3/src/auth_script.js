
const REGEXP_EMAIL = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
// window.addEventListener("DOMContentLoaded", updateNavigationButtons, false);
document.addEventListener('DOMContentLoaded', () => checkAuth())

export function checkAuth() {
    return !!localStorage.accessToken;

}

function getAuthToken() {
    return localStorage.accessToken;
}

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
    } else {
        alert("Something went wrong");
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

export function exit() {
    delete localStorage.accessToken;
    delete localStorage.user;
}

