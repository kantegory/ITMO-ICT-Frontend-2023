import axios from 'https://cdn.jsdelivr.net/npm/axios@1.5.1/+esm';

const alertPlaceholder = document.getElementById("alert-placeholder");

const alert = (message) => {
    const wrapper = document.createElement('div');
    wrapper.innerHTML = [
        `<div class="alert alert-warning alert-dismissible" role="alert">`,
        `   <div>${message}</div>`,
        '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
        '</div>'
    ].join('');
    
    alertPlaceholder.append(wrapper);
}

const checkAuth = () => {
    if (window.localStorage.accessToken) {
        window.location.href = "/pages/collection.html";
    }
}

const signUp = async (event) => {    
    await event.preventDefault();

    const inputs = Array.from(event.target.querySelectorAll("input"));

    const signUpData = {};

    for (const input of inputs) {
        signUpData[input.name] = input.value;
    }
    
    if (signUpData.password !== signUpData.passwordRepeat) {
        alert("Passwords does not match");
        return;
    }
    delete signUpData.passwordRepeat;

    if (signUpData.password.length < 5) {
        alert("Password is too short. Try again");
        return;
    }

    axios.post("http://localhost:3000/register", signUpData)
        .then((response) => {
            window.localStorage.user = JSON.stringify(response.data.user);
            window.localStorage.accessToken = response.data.accessToken;
            checkAuth();
        })
        .catch((reason) => {
            alert("Email is already taken. Try another");
        });

};

document.querySelector("form").addEventListener("submit", signUp);
document.addEventListener("DOMContentLoaded", checkAuth);