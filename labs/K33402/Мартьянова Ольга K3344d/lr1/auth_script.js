function isUserLoggedIn() {
    return localStorage.getItem('loggedIn') === 'true';
}

function updateNavigationButtons() {
    const profileButton = document.getElementById('profileButton');
    const loginButton = document.getElementById('loginButton');
    const registerButton = document.getElementById('registerButton');

    if (isUserLoggedIn()) {
        if (profileButton) profileButton.style.display = 'block';
        if (loginButton) loginButton.style.display = 'none';
        if (registerButton) registerButton.style.display = 'none';
    } else {
        if (profileButton) profileButton.style.display = 'none';
        if (loginButton) loginButton.style.display = 'block';
        if (registerButton) registerButton.style.display = 'block';
    }
}

window.addEventListener('load', updateNavigationButtons);

function setUserLoggedIn(status) {
    localStorage.setItem('loggedIn', status);
    updateNavigationButtons();
}    
