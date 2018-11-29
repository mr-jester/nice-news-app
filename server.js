'use strict';
const express = require('express');
const path = require('path');
const PORT = 3000;
const app = express();

app.use(express.static(__dirname + '/dist/news-app'));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname + '/dist/news-app/index.html'));
});

app.listen(PORT, () => {
  console.log(process.env.PORT || 3000);
});