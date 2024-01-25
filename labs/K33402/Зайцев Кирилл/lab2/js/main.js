

    // Функция для воспроизведения музыки
function playMusic(song) {
    const audioPlayer = document.getElementById('audioPlayer');
    audioPlayer.src = song;
    audioPlayer.play();
}

function clearSearchInput() {
        document.getElementById('searchInput').value = '';
    }


// Функция для фильтрации музыки
function filterMusic() {
    const searchInput = document.getElementById('searchInput').value.toLowerCase();
    const genreFilter = document.getElementById('genreFilter').value.toLowerCase();
    const musicItems = document.querySelectorAll('.music-item');

    musicItems.forEach(function(item) {
        const songInfo = item.textContent.toLowerCase();
        const songGenre = songInfo.includes(genreFilter) || genreFilter === 'all';
        const songMatch = songInfo.includes(searchInput) || searchInput === '';
        if (songGenre && songMatch) {
            item.style.display = 'flex';
        } else {
            item.style.display = 'none';
        }
    });
}

// Функция для добавления песни в плейлист профиля
function addToPlaylist(song) {
    const currentUser = 'user123'; // Замените это на вашего пользователя

    let userPlaylist = JSON.parse(localStorage.getItem(currentUser)) || [];
    userPlaylist.push(song);
    localStorage.setItem(currentUser, JSON.stringify(userPlaylist));

    alert('Песня добавлена в ваш плейлист!');
}

// Функция для открытия модального окна при клике на трек
function openModal() {
    const myModal = new bootstrap.Modal(document.getElementById('playlistModal'));
    myModal.show();
}

function closeModal() {
    const myModal = new bootstrap.Modal(document.getElementById('playlistModal'));
    myModal.hide();
}


// Функция для добавления трека в выбранный плейлист
function addToSelectedPlaylist() {
    const selectedPlaylist = document.getElementById('modalPlaylistSelect').value;
    // Логика добавления трека в плейлист
    alert('Трек добавлен в плейлист');
    closeModal(); // Закрытие модального окна после добавления
}

// Функция для переключения темы
    // Функция для переключения темы
    function toggleTheme() {
        const body = document.body;
        const currentTheme = body.classList.contains('dark-mode') ? 'dark' : 'light';

        if (currentTheme === 'dark') {
            body.classList.remove('dark-mode');
            body.classList.add('light-mode');
            localStorage.setItem('theme', 'light');
        } else {
            body.classList.remove('light-mode');
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        }
    }


// Проверка сохраненной темы в localStorage при загрузке страницы
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        document.body.classList.add(savedTheme + '-mode');
    } else {
        // По умолчанию используется тема, установленная в браузере
        const userPrefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        if (userPrefersDark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.add('light-mode');
        }
    }
});


