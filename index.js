require('dotenv').config();
const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const v1 = require('./v1');
const connectMongo = require('./db/db');
const bodyParser = require('body-parser');
const cors = require('cors');

try {
  connectMongo();
} catch (e) {
  console.log('Error!!!');
}

app.use(cors());
app.use(bodyParser.json());

app.use('/v1', v1);

app.get('/', (req, res) => {
  res.redirect('/v1/images');
});

app.get('/docs', (req, res) => {
  res.redirect('https://github.com/peter-stuhlmann/PhotoAPI/');
});

app.listen(port, () => console.log(`API listening on port ${port}`));
