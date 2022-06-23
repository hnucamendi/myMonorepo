const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.status(200).send('Hello World');
});

app.listen('8080', (err) => {
  if (err) throw err;
  console.log('Hello World');
});
