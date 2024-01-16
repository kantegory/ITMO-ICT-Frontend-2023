const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const jsonServer = require('json-server');

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, '../dist')));
app.use(bodyParser.json());


const jsonServerRouter = jsonServer.router(path.join(__dirname, '../db.json'));
app.use('/api', jsonServerRouter);


app.get('/main', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../dist/index.html'));
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на порту ${PORT}`);
});
