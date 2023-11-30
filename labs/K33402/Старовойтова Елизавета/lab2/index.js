var x = document.getElementById("login")
var y = document.getElementById("register")
var z = document.getElementById("btn")

function loginBTN() {
  x.style.left = "50px"
  y.style.left = "450px"
}
function registerBTN() {
  x.style.left = "-450px"
  y.style.left = "50px"
}

async function login(event) {
  event.preventDefault();

  const email = document.getElementById('inputEmail1').value;
  const password = document.getElementById('inputPassword1').value;

  try {
    const response = await fetch('http://localhost:4000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ email, password }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Login successful!', data);

      localStorage.setItem('token', data.token);
      localStorage.setItem('name', data.name);
      localStorage.setItem('email', data.email);

      // После успешного входа перенаправляем на страницу профиля
      window.location.href = `profile.html?name=${data.name}&email=${data.email}`;
    } else {
      const errorData = await response.json();
      console.error('Login failed:', errorData);
      // Обработка ошибок входа
    }
  } catch (error) {
    console.error('Login failed:', error);
  }
}

// Ваш код для регистрации
async function register(event) {
  event.preventDefault();

  const name = document.getElementById('inputName2').value;
  const email = document.getElementById('inputEmail2').value;
  const password = document.getElementById('inputPassword2').value;
  const repeatPassword = document.getElementById('inputPassword3').value;

  if (password !== repeatPassword) {
    console.error('Passwords do not match');
    return;
  }

  try {
    const response = await fetch('http://localhost:4000/register', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, email, password, repeatPassword }),
    });

    if (response.ok) {
      const data = await response.json();
      console.log('Registration successful!', data);

      const user = data.user; // Извлекаем объект пользователя из данных

      localStorage.setItem('token', data.token);
      localStorage.setItem('name', user.name); // Обращаемся к свойству name в объекте user
      localStorage.setItem('email', user.email); // Обращаемся к свойству email в объекте user

      console.log('localStorage name:', localStorage.getItem('name'));
      console.log('localStorage email:', localStorage.getItem('email'));

      // После успешной регистрации перенаправляем на страницу профиля
      window.location.href = `profile.html?name=${user.name}&email=${user.email}`;
    } else {
      const errorData = await response.json();
      console.error('Registration failed:', errorData);
      // Обработка ошибок регистрации
    }
  } catch (error) {
    console.error('Registration failed:', error);
  }
}
