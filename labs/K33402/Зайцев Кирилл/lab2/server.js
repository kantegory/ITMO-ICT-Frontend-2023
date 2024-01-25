const express = require('express');
const app = express();
const PORT = 3000;

app.use('/music', express.static(__dirname + '/music'));
app.use('/covers', express.static(__dirname + '/covers'));
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    next();
});

// Фиктивные данные о топ-треках для разных регионов
const topTracksData = {
    'RU': [
        { title: 'Kaer Morhen1', artist: 'witcher_3', genre: 'Rock', cover: '/covers/song1.jpg', audio: '/music/the_witcher_3_wild_hunt_16 Kaer Morhen.mp3' },
        { title: 'Kaer Morhen2', artist: 'witcher_3', genre: 'Pop', cover: '/covers/song2.jpg', audio: '/music/the_witcher_3_wild_hunt_16 Kaer Morhen.mp3' },
        // Добавьте другие треки для России
    ],
    'US': [
        { title: 'Kaer Morhen', artist: 'witcher_3', genre: 'Rock', cover: '/covers/song1.jpg', audio: '/music/the_witcher_3_wild_hunt_16 Kaer Morhen.mp3' },
        { title: 'Kaer Morhen', artist: 'witcher_3', genre: 'Pop', cover: '/covers/song2.jpg', audio: '/music/the_witcher_3_wild_hunt_16 Kaer Morhen.mp3' },
],
    // Добавьте данные для других регионов по аналогии
};

// Эндпоинт для получения топ-треков по региону
app.get('/api/top-tracks/:region', (req, res) => {
    const region = req.params.region.toUpperCase();
    const tracks = topTracksData[region] || [];
    res.json(tracks);
});

// Стартуем сервер
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});