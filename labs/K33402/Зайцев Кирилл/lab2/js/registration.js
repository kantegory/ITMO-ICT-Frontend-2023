
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

function applyAccessibilitySettings() {
    const fontSize = document.getElementById('fontSize').value;
    const textColor = document.getElementById('textColor').value;
    const backgroundColor = document.getElementById('backgroundColor').value;
    const fontFamily = document.getElementById('fontFamily').value;

    document.body.style.fontSize = fontSize;
    document.body.style.color = textColor;
    document.body.style.backgroundColor = backgroundColor;
    document.body.style.fontFamily = fontFamily;

    // Close the modal
    $('#accessibilityModal').modal('hide');
}

// Add an event listener to open the accessibility modal
document.addEventListener('DOMContentLoaded', function () {
    const accessibilityBtn = document.getElementById('accessibilityBtn');
    accessibilityBtn.addEventListener('click', function () {
        const modal = new bootstrap.Modal(document.getElementById('accessibilityModal'));
        modal.show();
    });

    // Add an event listener to apply accessibility settings on modal apply button click
    const applyBtn = document.getElementById('applyBtn');
    applyBtn.addEventListener('click', applyAccessibilitySettings);

    // Close modal on close button click
    const closeButton = document.querySelector('.modal .btn-close');
    closeButton.addEventListener('click', function () {
        const modal = bootstrap.Modal.getInstance(document.getElementById('accessibilityModal'));
        modal.hide();
    });
});
