const mysql = require('mysql');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'delivery'
});

// VERIFICAMOS SI LA CONEXION FUE EXITOSA
db.connect(function(err) {
    if (err) throw err; //SI HAY UN ERROR SE LE ENVIA TROW EN LA CONSOLA
    console.log('DATABASE CONNECTED!'); // CONEXION EXITOSA
});
// LO EXPORTAMOS PARA PODER ACCEDER DESDE CUALQUIER ARCHIVO
module.exports = db;