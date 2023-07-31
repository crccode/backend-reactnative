const express = require('express');
const app = express(); //INICIALIZAMOS LA APP
const http = require('http');
const server = http.createServer(app);
const logger = require('morgan');
const cors = require('cors')

const port = process.env.PORT || 3000;

app.use(logger('dev')); // PARA DEBUGEAR LOS ERRORES 
app.use(express.json()); //PARSEAR LAS RESPUESTAS QUE RECIBAMOS
app.use(express.urlencoded({
    extended: true    
}));
app.use(cors());
app.disable('x-powered-by')

app.set('port', port);
app.listen(3000, '192.168.0.103' || 'localhost', function() {
    console.log('running server');
});

app.get('/', (req, res) => {
    res.send('RUTA DEL BACKEND');
})

// EROOR HANDLES
app.use((err, req, res, next) => {
    console.log(err);
    res.status(err.status || 500).send(err.stack);
})