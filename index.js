const express = require('express');
const app = express();
const port = 3112;
const { images } = require('./data');

app.get('/images', (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Content-Type', 'application/json');
  return res.json(images);
});

app.listen(port, () => console.log(`API listening on port ${port}`));
