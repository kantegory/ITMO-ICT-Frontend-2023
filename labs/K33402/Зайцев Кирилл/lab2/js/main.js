
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



function getTopSongsByCountry(country) {
    fetch(`http://localhost:3000/api/top-songs/${country}`)
        .then(response => response.json())
        .then(data => {
            displayTopSongs(data);
        })
        .catch(error => console.error("Ошибка при получении данных: ", error));
}

function displayTopSongs(topSongs) {
    const topSongsContainer = document.getElementById("top-songs-container");

    topSongsContainer.innerHTML = "";

    topSongs.forEach(song => {
        const card = document.createElement("div");
        card.className = "card mb-3";

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

const userCountry = getCountryCode();
getTopSongsByCountry(userCountry);
