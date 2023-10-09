
const loginForm = document.querySelector('form');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

loginForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;
    // Отправьте запрос на сервер для проверки логина и пароля
    // Перенаправьте пользователя на личный кабинет после успешного входа
});
