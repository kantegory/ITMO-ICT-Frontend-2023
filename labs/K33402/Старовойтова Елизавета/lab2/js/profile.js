function updateProfileView() {
    // Извлекаем параметры из URL
    const params = new URLSearchParams(window.location.search);
    const name = params.get('name');
    const email = params.get('email');

    // Получаем элементы DOM, которые нужно обновить
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');

    // Обновляем значения только если они определены (не null)
    if (name !== null && email !== null) {
        nameInput.value = name;
        emailInput.value = email;

        // Сохраняем данные в localStorage
        localStorage.setItem('profileName', name);
        localStorage.setItem('profileEmail', email);
    }
};

document.addEventListener('DOMContentLoaded', updateProfileView);

// При загрузке страницы извлекаем данные из localStorage
document.addEventListener('DOMContentLoaded', function () {
    const storedName = localStorage.getItem('profileName');
    const storedEmail = localStorage.getItem('profileEmail');

    // Получаем элементы DOM
    const nameInput = document.getElementById('nameInput');
    const emailInput = document.getElementById('emailInput');

    // Обновляем значения только если они определены в localStorage (не null)
    if (storedName !== null && storedEmail !== null) {
        nameInput.value = storedName;
        emailInput.value = storedEmail;
    }
});

function logout() {
    // Очистим данные в localStorage
    localStorage.removeItem('profileName');
    localStorage.removeItem('profileEmail');

    // Перенаправьте пользователя на страницу home
    window.location.href = 'index.html';
}