const express = require("express");
const app = express();
const port = 3000;

// Фиктивные данные о топе песен по странам
const topSongsData = {
    "USA": [
        { title: "Song 1 (USA)", artist: "Artist 1" },
        { title: "Song 2 (USA)", artist: "Artist 2" },
        { title: "Song 3 (USA)", artist: "Artist 3" }
    ],
    "UK": [
        { title: "Song 1 (UK)", artist: "Artist 1" },
        { title: "Song 2 (UK)", artist: "Artist 2" },
        { title: "Song 3 (UK)", artist: "Artist 3" }
    ]
    ,
    "RU": [
        { title: "Song 1 (RU)", artist: "Artist 1" },
        { title: "Song 2 (RU)", artist: "Artist 2" },
        { title: "Song 3 (RU)", artist: "Artist 3" }
    ]
};

app.use((req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    next();
});

app.get("/api/top-songs/:country", (req, res) => {
    const country = req.params.country;
    const topSongs = topSongsData[country] || [];

    res.json(topSongs);
});

app.listen(port, () => {
    console.log(`Сервер запущен на порту ${port}`);
});
