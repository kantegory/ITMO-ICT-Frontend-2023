import {checkAuth} from "@/composable/checkAuth.js";

export function updateNav() {
    const account = document.getElementById('accountLink');
    const auth = document.getElementById('authLink');
    const exit = document.getElementById('exitLink');

    if (checkAuth()) {
        account.style.display = 'block';
        auth.style.display = 'none';
        exit.style.display = 'block';
    } else {
        account.style.display = 'none';
        auth.style.display = 'block';
        exit.style.display = 'none';
    }
}