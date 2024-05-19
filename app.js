const express = require('express'); // Importamos el paquete express
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// llamado al bodyPareser
app.use(bodyParser.json());

// Importar las rutas
const postRute = require('./routes/post');
app.use('/servicios', postRoute);

/*  Se crean las rutas */
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor') // ruta default
} );


//conexion a la bd
mongoose.connect('mongodb+srv://admin:admin@cluster0.ywdzkcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{useNewParser: true }, () =>{
    console.log('Si hay conexión a la BD');
});

// Se configura como va escuchar el servidor las peticiones

app.listen(10000);
