import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default function useRegistration() {
  const email = ref('');
  const password = ref('');
  const confirmPassword = ref('');
  const agreed = ref(false);
  const router = useRouter();

  const validatePasswords = () => {
    if (password.value !== confirmPassword.value) {
      console.error('Пароли не совпадают');
      return false;
    }
    return true;
  };

  const validateAgreement = () => {
    if (!agreed.value) {
      console.error('Необходимо согласиться с политикой конфиденциальности');
      return false;
    }
    return true;
  };

  const registerUser = async () => {
    if (!validatePasswords() || !validateAgreement()) {
      return;
    }

    try {
      const response = await fetch('http://localhost:3001/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: email.value,
          password: password.value,
        }),
      });

      const data = await response.json();
      console.log('Пользователь успешно зарегистрирован:', data);

      
      router.push('/cabinet');
    } catch (error) {
      console.error('Ошибка при регистрации пользователя:', error);
    }
  };

  return {
    email,
    password,
    confirmPassword,
    agreed,
    registerUser,
  };
}
