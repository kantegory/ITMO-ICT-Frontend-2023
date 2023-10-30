
const registrationForm = document.querySelector('form');
const nameInput = document.getElementById('nameInput');
const emailInput = document.getElementById('emailInput');
const passwordInput = document.getElementById('passwordInput');

registrationForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = nameInput.value;
    const email = emailInput.value;
    const password = passwordInput.value;
    // Отправьте запрос на сервер для создания нового аккаунта
    // Перенаправьте пользователя на личный кабинет после успешной регистрации
});
