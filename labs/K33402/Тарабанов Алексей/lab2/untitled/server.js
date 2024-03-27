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


const topTracksData = {
    'RU': [
        { title: 'Мадагаскар', artist: 'Пингвины', genre: 'Rock', cover: 'covers/song1.jpg', audio: 'music/Meme.mp4' },
        { title: 'Дымок', artist: 'Ицык Цыпер', genre: 'Pop', cover: 'covers/song2.jpg', audio: 'music/icyk-cyper-feat.-igor-cyba-dymok.mp3' },
    ],
    'US': [
        { title: 'Мадагаскар', artist: 'Пингвины', genre: 'Rock', cover: 'covers/song1.jpg', audio: 'music/Meme.mp3' },
        { title: 'Дымок', artist: 'Ицык Цыпер', genre: 'Pop', cover: 'covers/song2.jpg', audio: 'music/icyk-cyper-feat.-igor-cyba-dymok.mp3' },
],

};


app.get('/api/top-tracks/:region', (req, res) => {
    const region = req.params.region.toUpperCase();
    const tracks = topTracksData[region] || [];
    res.json(tracks);
});


app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});