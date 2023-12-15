import { ref } from 'vue';

export function useRegister() {
  const user = ref({
    email: '',
    password: ''
  });
  const userRegistered = ref(false);

  const registerUser = () => {
    fetch('http://localhost:8090/api/collections/users/records', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(user.value)
    })
    .then(() => fetch('http://localhost:8090/api/collections/users/records'))
    .then(response => response.json())
    .then(data => {
      const users = data.items;
      const existingUser = users.find(u => u.email === user.value.email);
      if (existingUser) {
        alert("Вы уже зарегистрированы");
      } else {
        userRegistered.value = true;
      }
    })
    .catch(error => console.error(error));
  };

  return { user, userRegistered, registerUser };
}