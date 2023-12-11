// Функция для воспроизведения музыки
function playMusic(song) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = song;
    audioPlayer.play();
}

// Функция для фильтрации музыки
function filterMusic() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value.toLowerCase();
    const musicItems = document.querySelectorAll('.music-item');

    musicItems.forEach(function(item) {
        // Логика фильтрации музыки
        // Здесь можно добавить код для скрытия/отображения песен на основе фильтров
    });
}
// Функция для добавления песни в плейлист профиля
function addToPlaylist(song) {
    // Предположим, что у нас есть текущий пользователь или его идентификатор
    const currentUser = 'user123'; // Замените это на вашего пользователя

    // Добавляем песню в плейлист пользователя (можно использовать localStorage для имитации сохранения данных)
    let userPlaylist = JSON.parse(localStorage.getItem(currentUser)) || [];
    userPlaylist.push(song);
    localStorage.setItem(currentUser, JSON.stringify(userPlaylist));

    alert('Песня добавлена в ваш плейлист!');
}
// Функция для открытия модального окна при клике на трек
function openModal() {
    document.getElementById('playlistModal').style.display = 'block';
}

// Функция для закрытия модального окна
function closeModal() {
    document.getElementById('playlistModal').style.display = 'none';
}

// Функция для добавления трека в выбранный плейлист
function addToSelectedPlaylist() {
    const selectedPlaylist = document.getElementById('modalPlaylistSelect').value;
    // Логика добавления трека в плейлист
    alert('Трек добавлен в плейлист');
    closeModal(); // Закрытие модального окна после добавления
}

// Остальная часть кода (playMusic, filterMusic) остается такой же, как была раньше
