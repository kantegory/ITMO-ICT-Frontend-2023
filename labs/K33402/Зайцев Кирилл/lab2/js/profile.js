// Функция для добавления нового плейлиста
function createPlaylist() {
    const newPlaylistName = prompt('Введите название плейлиста:');
    if (newPlaylistName) {
        // Логика создания нового плейлиста
        // Здесь можно добавить код для отправки запроса на сервер для создания плейлиста
    }
}

// Функция для выхода из аккаунта
function logout() {
    // Логика выхода из аккаунта
    // Здесь можно добавить код для очистки сессии пользователя или перенаправления на страницу входа
}
// Функция для отображения плейлистов пользователя
function displayUserPlaylists() {
    // Здесь предполагается, что у вас есть текущий пользователь
    const currentUser = 'user123';

    // Получаем плейлисты текущего пользователя из localStorage
    const userPlaylists = JSON.parse(localStorage.getItem(currentUser)) || {};

    // Выводим список плейлистов на странице профиля
    const playlistContainer = document.getElementById('playlistContainer');

    for (let playlist in userPlaylists) {
        const option = document.createElement('option');
        option.value = playlist;
        option.textContent = playlist;
        playlistContainer.appendChild(option);
    }
}
// Функция для создания нового плейлиста
function createPlaylist() {
    const newPlaylistName = prompt('Введите название плейлиста:');
    if (newPlaylistName) {
        const playlistContainer = document.getElementById('playlistContainer');
        const newPlaylist = document.createElement('li');
        newPlaylist.textContent = newPlaylistName;
        newPlaylist.classList.add('playlist-item');
        newPlaylist.onclick = function () {
            // Логика открытия плейлиста
            alert('Открыт плейлист: ' + newPlaylistName);
        };
        playlistContainer.appendChild(newPlaylist);
        savePlaylist(newPlaylistName); // Сохранение плейлиста
    }
}

// Функция для сохранения плейлиста в localStorage
function savePlaylist(playlistName) {
    const currentUser = 'user123'; // Предполагаем, что у вас есть текущий пользователь
    let userPlaylists = JSON.parse(localStorage.getItem(currentUser)) || {};
    userPlaylists[playlistName] = []; // Создаем пустой плейлист
    localStorage.setItem(currentUser, JSON.stringify(userPlaylists));
}

// Функция для удаления плейлиста
function deletePlaylist(playlistName) {
    const currentUser = 'user123'; // Предполагаем, что у вас есть текущий пользователь
    let userPlaylists = JSON.parse(localStorage.getItem(currentUser)) || {};
    delete userPlaylists[playlistName];
    localStorage.setItem(currentUser, JSON.stringify(userPlaylists));

    // Удаляем плейлист из интерфейса
    const playlistItems = document.querySelectorAll('.playlist-item');
    playlistItems.forEach(function (item) {
        if (item.textContent === playlistName) {
            item.remove();
        }
    });
}

// Функция для добавления трека в плейлист
function addTrackToPlaylist(track, playlistName) {
    const currentUser = 'user123'; // Предполагаем, что у вас есть текущий пользователь
    let userPlaylists = JSON.parse(localStorage.getItem(currentUser)) || {};
    userPlaylists[playlistName].push(track);
    localStorage.setItem(currentUser, JSON.stringify(userPlaylists));
}

// Функция для удаления трека из плейлиста
function removeTrackFromPlaylist(track, playlistName) {
    const currentUser = 'user123'; // Предполагаем, что у вас есть текущий пользователь
    let userPlaylists = JSON.parse(localStorage.getItem(currentUser)) || {};
    userPlaylists[playlistName] = userPlaylists[playlistName].filter(function (item) {
        return item !== track;
    });
    localStorage.setItem(currentUser, JSON.stringify(userPlaylists));
}
