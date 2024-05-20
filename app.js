const express = require('express'); // Importamos el paquete express
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');


// llamado al bodyPareser
app.use(bodyParser.json());

// Importar las rutas
const postRoute = require('./routes/post');
app.use('/servicios', postRoute);

/*  Se crean las rutas */
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor') // ruta default
} );


//conexion a la bd
async function connectDB() {
    try {
        await mongoose.connect('mongodb+srv://admin:admin@cluster0.ywdzkcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
            useNewUrlParser: true, // Corregido el error tipográfico
            useUnifiedTopology: true // Recomendado para la conexión con MongoDB
        });
        console.log('Si hay conexión a la BD');
    } catch (error) {
        console.error('Error conectando a la BD', error);
        process.exit(1); // Termina el proceso si no se puede conectar
    }
}

connectDB();
// Se configura como va escuchar el servidor las peticiones

app.listen(10000);
console.log('El servidor está corriendo en el puerto 10000');
