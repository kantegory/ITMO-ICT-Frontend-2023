let mainAudio = document.getElementById("audio");    // Берём элемент audio // Берём аудио дорожку
let playPauseBtn = document.querySelector(".play-pause");   // Берём кнопку проигрывания // Берём кнопку паузы
let prevBtn = document.getElementById("prev");   // Берём кнопку переключения предыдущего трека
let nextBtn = document.getElementById("next");   // Берём кнопку переключение следующего трека
let musicName = document.getElementById("current-song-name");
let musicArtist = document.getElementById("current-autor");
let wrapper = document.querySelector(".wrapper");
let progressArea = document.querySelector(".progress-area");
let progressBar = document.querySelector(".progress-bar");
let volumeScale = document.getElementById("volume");
const songContainerAll = document.getElementById('songContainerAll');
const songContainerMyMusic = document.getElementById('songContainerMyMusic');
const songContainerMyPlaylists = document.getElementById('songContainerMyPlaylists');
const searchInput = document.querySelector('.form-control');
const selectSort = document.querySelector('.form-select');
const SERVER_URL = 'http://localhost:3000'

async function getDataAllMusic() {
    try {
        const response = await fetch(`${SERVER_URL}/all_music`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        return [];
    }
}
async function getDataMyMusic() {
    try {
        const response = await fetch(`${SERVER_URL}/my_music`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        return [];
    }
}
async function getDataMyPlaylists() {
    try {
        const response = await fetch(`${SERVER_URL}/playlists`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Произошла ошибка при получении данных:', error);
        return [];
    }
}

window.addEventListener("load", () => {
    getDataAllMusic().then(data => {
        let allMusic = data;
        let musicIndex = Math.floor((Math.random() * allMusic.length) + 1);
        createHtmlSongList(allMusic,songContainerAll);
        loadMusic(musicIndex,allMusic);
        prevBtn.addEventListener("click", () => {
            musicIndex = prevMusic(musicIndex, allMusic);
        });
        nextBtn.addEventListener("click", () => {
            musicIndex = nextMusic(musicIndex, allMusic);
        });

    }).catch(err => {
        console.error('Произошла ошибка:', err);
    });
    getDataMyMusic().then(data => {
        createHtmlSongList(data,songContainerMyMusic);
    }).catch(err => {
        console.error('Произошла ошибка:', err);
    });
    getDataMyPlaylists().then(data => {
        createHtmlPlayList(data,songContainerMyPlaylists);
    }).catch(err => {
        console.error('Произошла ошибка:', err);
    });
});


function loadMusic(indexNumb,allMusic) {
    musicName.innerText = allMusic[indexNumb - 1].name;
    musicArtist.innerText = allMusic[indexNumb - 1].artist;
    mainAudio.src = `../../src/music/${allMusic[indexNumb - 1].filename}`;
}


function playMusic() {
    wrapper.classList.add("paused");
    playPauseBtn.innerText = "pause";
    mainAudio.play();
}

function pauseMusic() {
    wrapper.classList.remove("paused");
    playPauseBtn.innerText = "play_arrow";
    mainAudio.pause();
}

function prevMusic(musicIndex, allMusic) {
    musicIndex--;
    musicIndex < 1 ? musicIndex = allMusic.length : musicIndex = musicIndex;
    loadMusic(musicIndex,allMusic);
    playMusic();
    return musicIndex;
}

function nextMusic(musicIndex, allMusic) {
    musicIndex++;
    musicIndex > allMusic.length ? musicIndex = 1 : musicIndex = musicIndex;
    loadMusic(musicIndex,allMusic);
    playMusic();
    return musicIndex;
}

playPauseBtn.addEventListener("click", () => {
    const isMusicPlay = wrapper.classList.contains("paused");
    isMusicPlay ? pauseMusic() : playMusic();
});


mainAudio.addEventListener("timeupdate", (e) => {
    const currentTime = e.target.currentTime;
    const duration = e.target.duration;
    let progressWidth = (currentTime / duration) * 100;
    progressBar.style.width = `${progressWidth}%`;
    let musicCurrentTime = wrapper.querySelector(".current-time"),
        musicDuartion = wrapper.querySelector(".max-duration");
    mainAudio.addEventListener("loadeddata", () => {

        let mainAdDuration = mainAudio.duration;
        let totalMin = Math.floor(mainAdDuration / 60);
        let totalSec = Math.floor(mainAdDuration % 60);
        if (totalSec < 10) {
            totalSec = `0${totalSec}`;
        }
        musicDuartion.innerText = `${totalMin}:${totalSec}`;
    });

    let currentMin = Math.floor(currentTime / 60);
    let currentSec = Math.floor(currentTime % 60);
    if (currentSec < 10) {
        currentSec = `0${currentSec}`;
    }
    musicCurrentTime.innerText = `${currentMin}:${currentSec}`;
});

progressArea.addEventListener("click", (e) => {
    let progressWidth = progressArea.clientWidth;
    let clickedOffsetX = e.offsetX;
    let songDuration = mainAudio.duration;
    mainAudio.currentTime = (clickedOffsetX / progressWidth) * songDuration;
    playMusic();
});

function ChangeVolume() {
    var volume = volumeScale.value / 100;
    mainAudio.volume = parseFloat(volume.toString());
}

function createHtmlSongList(allMusic, parent) {
    allMusic.forEach((song) => {
        const songDiv = document.createElement('div');
        songDiv.classList.add('song-container-main');
        const songPhotoDiv = document.createElement('div');
        songPhotoDiv.classList.add('container-song-photo');
        const songInfoDiv = document.createElement('div');
        songInfoDiv.classList.add('song-container');
        const songImage = document.createElement('img');
        songImage.classList.add('img-thumbnail', 'resize')
        songImage.src = `../../src/img/1.png`;
        songImage.setAttribute('alt', 'изображение песни');
        const songName = document.createElement('div');
        songName.classList.add('nav-link', 'black');
        songName.textContent = song.name;
        const songArtist = document.createElement('div');
        songArtist.classList.add('nav-link', 'grey');
        songArtist.textContent = song.artist;

        songInfoDiv.appendChild(songName);
        songInfoDiv.appendChild(songArtist);
        songPhotoDiv.appendChild(songImage);
        songPhotoDiv.appendChild(songInfoDiv);
        songDiv.appendChild(songPhotoDiv);
        parent.appendChild(songDiv);

        songDiv.addEventListener('click', function() {
            const songId = song.id;
            loadMusic(songId, allMusic);
        });
    });
}


function createHtmlPlayList(playlists, parent) {
    playlists.forEach(playlist => {
        const playlistDiv = document.createElement('div');
        playlistDiv.classList.add('accordion-item');
        const playlistH2 = document.createElement('h2');
        playlistH2.classList.add('accordion-header');
        const playlistDivcollapse = document.createElement('div');
        playlistDivcollapse.id = `playlist_${playlist.id}`;
        playlistDivcollapse.classList.add('accordion-collapse', 'collapse');
        const PlaylistButton = document.createElement('button');
        PlaylistButton.classList.add('accordion-button', 'collapsed');
        PlaylistButton.setAttribute('type', 'button');
        PlaylistButton.setAttribute('data-bs-toggle', 'collapse');
        PlaylistButton.setAttribute('data-bs-target', `#playlist_${playlist.id}`);
        PlaylistButton.setAttribute('aria-expanded', 'false');
        PlaylistButton.setAttribute('aria-controls', `playlist_${playlist.id}`);
        const musiclist = document.createElement('div');
        musiclist.classList.add('accordion-body');

        const songDivi = document.createElement('div');
        songDivi.classList.add('song-container-main');
        const songPhotoDivi = document.createElement('div');
        songPhotoDivi.classList.add('container-song-photo');
        const songInfoDivi = document.createElement('div');
        songInfoDivi.classList.add('song-container');
        const songImagei = document.createElement('img');
        songImagei.classList.add('img-thumbnail', 'resize');
        songImagei.src = `../../src/img/1.png`;
        songImagei.setAttribute('alt', 'изображение песни');
        const songNamei = document.createElement('div');
        songNamei.classList.add('nav-link', 'black');
        songNamei.textContent = playlist.name;
        createHtmlSongList(playlist.list, musiclist);

        songInfoDivi.appendChild(songNamei);
        songPhotoDivi.appendChild(songImagei);
        songPhotoDivi.appendChild(songInfoDivi);
        songDivi.appendChild(songPhotoDivi);
        PlaylistButton.appendChild(songDivi);
        playlistH2.appendChild(PlaylistButton);
        playlistDiv.appendChild(playlistH2);
        playlistDiv.appendChild(playlistDivcollapse);
        playlistDivcollapse.appendChild(musiclist)
        parent.appendChild(playlistDiv);
    });
}


volumeScale.addEventListener('change', ChangeVolume);


async function searchSongs(query) {
    try {
        const response = await fetch(`${SERVER_URL}/all_music?q=${encodeURIComponent(query)}`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return Array.isArray(data) ? data : [];
    } catch (error) {
        console.error('Произошла ошибка при поиске песен:', error);
        return [];
    }
}
searchInput.addEventListener('input', async () => {
    const query = searchInput.value.trim();
    const parentContainer = songContainerAll;
    if (query === '') {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        const allMusic = await getDataAllMusic();
        createHtmlSongList(allMusic, parentContainer);
    } else {
        while (parentContainer.firstChild) {
            parentContainer.removeChild(parentContainer.firstChild);
        }
        const searchResults = await searchSongs(query);
        createHtmlSongList(searchResults, parentContainer);
    }
});



