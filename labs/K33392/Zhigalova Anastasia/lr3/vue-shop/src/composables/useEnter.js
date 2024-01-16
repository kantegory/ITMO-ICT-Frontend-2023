import { ref } from 'vue';

export function useEnter() {
  const user = ref({
    email: '',
    password: ''
  });
  const userLoggedIn = ref(false);

  const loginUser = () => {
    fetch('http://localhost:8090/api/collections/users/records')
      .then(response => response.json())
      .then(data => {
        const users = data.items;
        const foundUser = users.find(u => u.email === user.value.email && u.password === user.value.password);

        if (foundUser) {
          userLoggedIn.value = true;
        } else if (users.some(u => u.email === user.value.email)) {
          alert('Неверный пароль');
        } else {
          alert('Сначала пройдите регистрацию');
        }
      })
      .catch(error => {
        console.error('Ошибка:', error);
      });
  };

  return { user, userLoggedIn, loginUser };
}