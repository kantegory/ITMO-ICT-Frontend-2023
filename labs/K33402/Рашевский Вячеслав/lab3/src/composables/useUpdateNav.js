import {useCheckAuth} from "@/composables/useCheckAuth";

export function useUpdateNav() {
    const account = document.getElementById('accountLink');
    const auth = document.getElementById('authLink');
    const exit = document.getElementById('exitLink');

    if (useCheckAuth()) {
        account.style.display = 'block';
        auth.style.display = 'none';
        exit.style.display = 'block';
    } else {
        account.style.display = 'none';
        auth.style.display = 'block';
        exit.style.display = 'none';
    }
}