const express = require('express');
const app = express();
const port = 3112;
const v1 = require('./v1');

app.use('/v1', v1);

app.get('/', (req, res) => {
  res.redirect('/v1/images');
});

app.get('/docs', (req, res) => {
  res.redirect('https://github.com/peter-stuhlmann/PhotoAPI/');
});

app.listen(port, () => console.log(`API listening on port ${port}`));
