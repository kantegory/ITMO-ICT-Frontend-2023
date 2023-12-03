const fs = require('fs');
const path = require('path');
const mm = require('music-metadata');

const musicDirectory = '../../src/music'; // Путь к папке с музыкой
let allMusic = [];

// Чтение файлов из папки
fs.readdir(musicDirectory, async (err, files) => {
    if (err) {
        console.error('Ошибка чтения папки:', err);
        return;
    }

    // Фильтрация MP3 файлов
    const mp3Files = files.filter(file => path.extname(file).toLowerCase() === '.mp3');

    for (const file of mp3Files) {
        const filePath = path.join(musicDirectory, file);

        try {
            // Получение метаданных из MP3 файла
            const metadata = await mm.parseFile(filePath);

            // Извлечение информации о треке
            const trackInfo = {
                name: metadata.common.title || 'Название не найдено',
                artist: metadata.common.artist || 'Автор не найден',
                img: metadata.common.picture ? `data:${metadata.common.picture[0].format};base64,${metadata.common.picture[0].data.toString('base64')}` : 'Изображение не найдено',
                filename: file
            };

            allMusic.push(trackInfo);
        } catch (error) {
            console.error('Ошибка чтения файла:', error);
        }
    }

    // Запись информации в JSON файл
    fs.writeFile('../json/musicData.json', JSON.stringify(allMusic, null, 2), err => {
        if (err) {
            console.error('Ошибка записи в файл:', err);
            return;
        }
        console.log('Информация о музыке записана в musicData.json');
    });
});
