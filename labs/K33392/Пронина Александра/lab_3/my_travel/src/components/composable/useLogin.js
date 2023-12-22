
import { ref } from 'vue';
import axios from 'axios';

export default function useLogin() {
    const email = ref('');
    const password = ref('');

    const login = async () => {
        try {
            const userData = {
                email: email.value,
                password: password.value
            };

            const response = await axios.post('http://localhost:8000/users', userData);
            console.log('Успешная авторизация', response.data);
        } catch (error) {
            console.error('Ошибка при входе:', error.response.data.message);
        }
    };

    return {
        email,
        password,
        login
    };
}
