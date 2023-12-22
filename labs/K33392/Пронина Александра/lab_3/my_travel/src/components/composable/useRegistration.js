
import { ref } from 'vue';
import axios from 'axios';

export default function useRegistration() {
    const username = ref('');
    const email = ref('');
    const password = ref('');

    const registerUser = async () => {
        try {
            const userData = {
                username: username.value,
                email: email.value,
                password: password.value
            };

            const response = await axios.post('http://localhost:8000/users', userData);
            console.log('Пользователь успешно зарегистрирован:', response.data);
        } catch (error) {
            console.error('Ошибка при регистрации пользователя:', error.response.data.message);
        }
    };

    return {
        username,
        email,
        password,
        registerUser
    };
}
