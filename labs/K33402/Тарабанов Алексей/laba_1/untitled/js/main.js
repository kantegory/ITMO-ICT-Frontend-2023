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
    const currentUser = 'user123';

    let userPlaylist = JSON.parse(localStorage.getItem(currentUser)) || [];
    userPlaylist.push(song);
    localStorage.setItem(currentUser, JSON.stringify(userPlaylist));

    alert('Песня добавлена в ваш плейлист!');
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
    closeModal();
}




