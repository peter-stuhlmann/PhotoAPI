const express = require('express');
const app = express();
const port = 3112;
const v1 = require('./v1');

app.use('/v1', v1);

app.listen(port, () => console.log(`API listening on port ${port}`));
