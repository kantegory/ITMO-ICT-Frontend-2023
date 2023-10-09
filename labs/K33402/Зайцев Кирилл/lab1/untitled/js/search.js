
const searchForm = document.querySelector('form');
const searchInput = document.getElementById('searchInput');
const genreSelect = document.getElementById('genreSelect');

searchForm.addEventListener('submit', function (e) {
    e.preventDefault();
    const searchTerm = searchInput.value;
    const selectedGenre = genreSelect.value;
    // search.js

// Симуляция данных результатов поиска (замените на реальный код для отправки запроса на сервер)
    const searchResultsData = [
        { title: 'Песня 1', artist: 'Исполнитель 1' },
        { title: 'Песня 2', artist: 'Исполнитель 2' },
        { title: 'Песня 3', artist: 'Исполнитель 3' },
        // Добавьте другие результаты поиска
    ];

    const searchResultsContainer = document.getElementById('searchResults');

    function displaySearchResults(results) {
        // Очистка содержимого контейнера перед отображением новых результатов
        searchResultsContainer.innerHTML = '';

        // Перебор результатов поиска и создание соответствующих элементов
        results.forEach((result, index) => {
            const resultItem = document.createElement('div');
            resultItem.classList.add('result-item');
            resultItem.innerHTML = `
            <p><strong>${result.title}</strong> - ${result.artist}</p>
            <button class="btn btn-primary" onclick="addToPlaylist(${index})">Добавить в плейлист</button>
        `;
            searchResultsContainer.appendChild(resultItem);
        });
    }

    function addToPlaylist(index) {
        // Обработка добавления песни в плейлист (например, отправка запроса на сервер)
        // После успешного добавления обновите интерфейс или предоставьте подтверждение
    }

    const searchForm = document.querySelector('form');
    searchForm.addEventListener('submit', function (e) {
        e.preventDefault();
        const searchTerm = document.getElementById('searchInput').value;
        const selectedGenre = document.getElementById('genreSelect').value;

        // Отправка запроса на сервер с searchTerm и selectedGenre
        // Получение результатов поиска с сервера (замените на реальный код)

        // В этом примере, используем симуляцию данных
        const filteredResults = searchResultsData.filter((result) => {
            return (
                (selectedGenre === '' || result.genre === selectedGenre) &&
                (result.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                    result.artist.toLowerCase().includes(searchTerm.toLowerCase()))
            );
        });

        // Отображение результатов на странице
        displaySearchResults(filteredResults);
    });

});
