const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const FileController = require('../portfolio-node-api/controllers/fileController');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hola desde Render');
});

app.get('/getFile/:id/:name', FileController.sendImage); 

app.get('/hello', (req, res) => {
  res.json({ message: 'Hola desde Vercel con Node.js + Express!' });
});

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
