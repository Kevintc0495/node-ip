const app = require('./app');
require('dotenv').config({ path: '.env' });

const puerto = process.env.DB_PUERTO;

// Establecer un puerto
app.listen(puerto, () => {
  console.log(`Conexion establecida en el puerto ${puerto}`);
})
