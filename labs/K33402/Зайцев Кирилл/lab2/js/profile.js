// profile.js

// Функция для загрузки информации о пользователе и плейлистах с сервера
function loadUserProfile() {
    // Здесь можно отправить запрос на сервер, чтобы получить данные о пользователе и плейлистах
    // Замените этот блок на реальный код

    const userData = {
        username: 'John Doe',
        email: 'johndoe@example.com',
        // Добавьте другие данные о пользователе
    };

    const playlists = [
        { name: 'Плейлист 1', tracks: ['Песня 1', 'Песня 2'] },
        { name: 'Плейлист 2', tracks: ['Песня 3', 'Песня 4'] },
        // Добавьте другие плейлисты и их треки
    ];

    // Вызов функций для отображения информации о пользователе и плейлистах
    displayUserInfo(userData);
    displayPlaylists(playlists);
}

// Функция для отображения информации о пользователе
function displayUserInfo(userData) {
    const usernameElement = document.getElementById('username');
    const emailElement = document.getElementById('userEmail');
    // Добавьте другие элементы для отображения данных о пользователе

    usernameElement.textContent = userData.username;
    emailElement.textContent = userData.email;
    // Обновите другие элементы с данными о пользователе
}

// Функция для отображения плейлистов
function displayPlaylists(playlists) {
    const playlistContainer = document.getElementById('playlist');

    // Очистка содержимого контейнера перед отображением плейлистов
    playlistContainer.innerHTML = '';

    // Перебор плейлистов и создание элементов списка
    playlists.forEach((playlist) => {
        const playlistItem = document.createElement('li');
        playlistItem.textContent = playlist.name;
        // Можно также добавить обработчик клика для перехода к плейлисту или другие действия

        playlistContainer.appendChild(playlistItem);
    });
}

// Вызываем функцию загрузки профиля при загрузке страницы
window.addEventListener('load', loadUserProfile);
