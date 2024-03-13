const SERVER_URL = 'http://localhost:3000';

async function login(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        const response = await fetch(`${SERVER_URL}/users`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const users = await response.json();
        const user = users.find(user => user.email === email && user.password === password);
        if (user) {
            window.location.href = 'music.html';
            console.log('Аутентификация успешна');
        } else {
            console.error('Ошибка аутентификации');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}

async function register(event) {
    try {
        event.preventDefault();
        const formData = new FormData(event.target);
        const email = formData.get('email');
        const password = formData.get('password');

        if (!email || !password) {
            throw new Error('Email и пароль обязательны для регистрации');
        }

        const response = await fetch(`${SERVER_URL}/users`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        });

        if (response.ok) {
            window.location.href = 'sign_in.html';
            console.log('Регистрация успешна');
        } else {
            console.error('Ошибка регистрации');
        }
    } catch (error) {
        console.error('Произошла ошибка:', error);
    }
}
