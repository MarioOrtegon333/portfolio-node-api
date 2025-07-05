const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const cors = require('cors');
const mainRoutes = require('./src/routes/empresas');


app.use(cors());
app.use(express.json());

//#:::::: CARGANDO RUTAS...
//app.use(require('./src/routes/empresas.js'));
// Usa las rutas en la raíz del servidor
app.use('/', mainRoutes);

app.listen(port, () => {
  console.log(`Servidor corriendo en el puerto ${port}`);
});
