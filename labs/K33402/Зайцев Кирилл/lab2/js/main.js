
document.getElementById('playButton').addEventListener('click', function () {
    const audio = document.getElementById('musicPlayer');
    audio.play();
});

document.getElementById('pauseButton').addEventListener('click', function () {
    const audio = document.getElementById('musicPlayer');
    audio.pause();
});

document.getElementById('volumeControl').addEventListener('input', function () {
    const audio = document.getElementById('musicPlayer');
    audio.volume = this.value;
});
async function getCountryCode() {
    try {
        const position = await new Promise((resolve, reject) => {
            navigator.geolocation.getCurrentPosition(resolve, reject);
        });

        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;

        const response = await fetch(`https://geocode.xyz/${latitude},${longitude}?json=1`);
        const data = await response.json();

        if (data.country) {
            return data.country;
        } else {
            return 'RU';
        }
    } catch (error) {
        console.error("Ошибка при определении страны: ", error);
        return 'RU';
    }
}

(async () => {
    const userCountry = await getCountryCode();
    getTopSongsByCountry(userCountry);
})();

// Function to apply accessibility settings
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

// Функция отображения полученных данных о топе песен
function displayTopSongs(topSongs) {
    const topSongsContainer = document.getElementById("top-songs-container");

    topSongsContainer.innerHTML = "";

    topSongs.forEach(song => {
        const card = document.createElement("div");
        card.className = "card mb-3";
        card.style.cursor = "pointer"; // Добавим карточке стиль указывающий на возможность клика

        card.addEventListener("click", () => {
            playSong(song.audio);
        });

        const cardBody = document.createElement("div");
        cardBody.className = "card-body";

        const title = document.createElement("h5");
        title.className = "card-title";
        title.textContent = song.title;
        cardBody.appendChild(title);

        const artist = document.createElement("p");
        artist.className = "card-text";
        artist.textContent = `Исполнитель: ${song.artist}`;
        cardBody.appendChild(artist);

        card.appendChild(cardBody);
        topSongsContainer.appendChild(card);
    });
}

// Загружаем данные о топе песен для данной страны
getTopSongsByCountry(userCountry);


function getTopSongsByCountry(country) {
    fetch(`http://localhost:3000/api/top-songs/${country}`)
        .then(response => response.json())
        .then(data => {
            displayTopSongs(data);
        })
        .catch(error => console.error("Ошибка при получении данных: ", error));
}

const userCountry = getCountryCode();
getTopSongsByCountry(userCountry);
