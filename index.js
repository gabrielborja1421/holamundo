const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('¡Hola, Mundo!');
});

app.listen(3000, '0.0.0.0', () => {
  console.log('Server running on port 3000');
});
