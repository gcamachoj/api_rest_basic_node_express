const express = require('express') // Importamos el paquete express
const app = express();
/*  Se crean las rutas */
app.get('/', (req, res) => {
    res.send('prueba 1 respuesta del servidor') // ruta default
} );


//conexion a la bd
monggoose.connect('mongodb+srv://<username>:<password>@cluster0.ywdzkcy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0',
{useNewParser: true }, () =>{
    console.log('Si hay conexión a la BD');
});



// Se configura como va escuchar el servidor las peticiones

app.listen(10000);
