import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm';
import { alert, checkAuth } from './auth.js';

const login = async (event) => {
    await event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll("input"));

    const loginData = {};

    for (const input of inputs) {
        loginData[input.name] = input.value;
    }

    axios.post("http://localhost:3000/login", loginData)
        .then((response) => {
            window.localStorage.user = JSON.stringify(response.data.user);
            window.localStorage.accessToken = response.data.accessToken;
            checkAuth();
        })
        .catch((reason) => {
            alert("Invalid email or password. Please, try again", "alert-placeholder");
        });
}

document.querySelector("form").addEventListener("submit", login);
document.addEventListener("DOMContentLoaded", checkAuth);
