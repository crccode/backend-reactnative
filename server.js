// DECLARACIONES DE VARIABLE
// VAMOS A REQUERIRI EL PAQUETE QUE INSTALAMOS
const express = require('express');
const app = express(); // INICIALIZAMOS LA APP
const http = require('http'); // INSTANCIA DEL PAQUETE HTTP
const server = http.createServer(app);


const logger = require('morgan');
const cors = require('cors');

/*
* IMPORTAR RUTAS
* INDICAMOS LA CARPETA DONDE ESTA LAS RUTAS
*/
const usersRoutes = require('./routes/userRoutes.js');

// STEEP 1 CREAMOS LA VARIABLE PARA EL PUERTO
const port = process.env.PORT || 3000;

app.use(logger('dev')); // PARA DEBUGEAR LOS ERRORES MODO DESARROLLADOR
app.use(express.json()); //PARSEAR LAS RESPUESTAS QUE RECIBAMOS EN JSON
app.use(express.urlencoded({
    extended: true    
}));
app.use(cors());
app.disable('x-powered-by')
// STEEP 2 FIJAMOS EL PUERTO 
app.set('port', port);

/*
* LLAMADO DE LAS RUTAS
*/
usersRoutes(app);

// STEP 3  DEFINIMOS EN QUE PUERTO VA A ESCUCHAR EL SERVER
app.listen(3000, '192.168.0.103' || 'localhost', function() {
    console.log('running server');
});

// CREAMOS NUESTRA PRIMER RUTA
app.get('/', (req, res) => {
    res.send('RUTA DEL BACKEND');
})

// EROOR HANDLES MANEJO DE ERRORES
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})

// 200 RESPUESTA EXITOSA
// 404 LA URL NO EXISTE
// 500 ERROR INTERNO DEL SERVER EL CODIGO ESTA MAL 