export async function login(event) {
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
            // Обработка успешного входа
        } else {
            const errorData = await response.json();
            console.error('Login failed:', errorData);
            // Обработка ошибок входа
        }
    } catch (error) {
        console.error('Login failed:', error);
    }
}

export async function register(event) {
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
            // Обработка успешной регистрации
        } else {
            const errorData = await response.json();
            console.error('Registration failed:', errorData);
            // Обработка ошибок регистрации
        }
    } catch (error) {
        console.error('Registration failed:', error);
    }
}

export { login, register };