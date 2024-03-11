import express from 'express';
import path from 'path';
import fs from 'fs';

const app = express();
const PORT = 3000;
const __dirname = path.resolve();

// Middleware for serving static files from the TopMusic folder
app.use('/TopMusic', express.static(path.join(__dirname, 'TopMusic')));

// Middleware to enable CORS
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Установите ваше текущее origin
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, Content-Type, Accept');
  next();
});

// Endpoint for fetching top 3 song titles
app.get('/api/topSongs', (req, res) => {
  try {
    fs.readdir(path.join(__dirname, 'TopMusic'), async (err, files) => {
      if (err) {
        console.error('Error reading TopMusic directory:', err);
        res.status(500).send('Internal server error');
        return;
      }

      // Create an array of song titles for top songs
      const topSongs = files.slice(0, 3).map(file => {
        const fileName = path.parse(file).name.replace(/%20/g, ' '); // Replace %20 with spaces
        return `${fileName} #`;
      });

      // Send the list of top song titles to the client
      await res.send(topSongs.join('\n'));
    });
  } catch (error) {
    console.error('Error fetching top songs:', error);
    res.status(500).send('Internal server error');
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});