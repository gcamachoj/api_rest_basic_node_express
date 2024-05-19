const express = require('express') // Importamos el paquete express
const app = express();
/*  Se crean las rutas */
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor') // ruta default
} );

// Se configura como va escuchar el servidor las peticiones

app.listen(10000);

