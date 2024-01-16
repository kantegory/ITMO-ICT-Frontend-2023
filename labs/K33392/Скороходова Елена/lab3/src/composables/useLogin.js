import { ref } from 'vue';
import { useRouter } from 'vue-router';
import axios from 'axios';

export default function useLogin() {
  const email = ref('');
  const password = ref('');
  const loginError = ref(false);
  const router = useRouter();

  const loginUser = async () => {
    try {
     
      const response = await axios.get(`http://localhost:3001/users?email=${email.value}&password=${password.value}`);

      
      if (response.data.length > 0) {
        
        loginError.value = false;
        router.push('/cabinet');
      } else {
        
        loginError.value = true;
      }
    } catch (error) {
      console.error('Ошибка при входе:', error);

     
      loginError.value = true;
    }
  };

  return {
    email,
    password,
    loginError,
    loginUser,
  };
}
