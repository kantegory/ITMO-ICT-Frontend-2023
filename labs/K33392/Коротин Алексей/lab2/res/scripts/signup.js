import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm';
import { alert, checkAuth } from './auth.js';




const signUp = async (event) => {    
    await event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll("input"));

    const signUpData = {};

    for (const input of inputs) {
        signUpData[input.name] = input.value;
    }
    
    if (signUpData.password !== signUpData.passwordRepeat) {
        alert("Passwords does not match", "alert-placeholder");
        return;
    }
    delete signUpData.passwordRepeat;

    if (signUpData.password.length < 5) {
        alert("Password is too short. Try again", "alert-placeholder");
        return;
    }

    axios.post("http://localhost:3000/register", signUpData)
        .then((response) => {
            window.localStorage.user = JSON.stringify(response.data.user);
            window.localStorage.accessToken = response.data.accessToken;
            checkAuth();
        })
        .catch((reason) => {
            alert("Email is already taken. Try another", "alert-placeholder");
        });

};

document.querySelector("form").addEventListener("submit", signUp);
document.addEventListener("DOMContentLoaded", checkAuth);