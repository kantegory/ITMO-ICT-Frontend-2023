import { ref } from 'vue';
import { useRouter } from 'vue-router';

export function useAuth() {
    const isAuthenticated = ref(false);
    const router = useRouter();

    async function login(email, password) {
        // Implement login logic here
        isAuthenticated.value = true;
        await router.push('/');
    }

    async function register(name, email, password) {
        // Implement registration logic here
        isAuthenticated.value = true;
        await router.push('/');
    }

    async function logout() {
        // Implement logout logic here
        isAuthenticated.value = false;
        await router.push('/login');
    }

    return { isAuthenticated, login, register, logout };
}