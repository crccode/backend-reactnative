// NECESITAMOS ACCESOS AL CONTROLADOR
const usersController = require('../controllers/usersController.js');

module.exports = (app) => {

    // GET -> OBTENER DATOS
    // POST -> ALMACENAR DATOS
    // PUT -> ACTUALIZAR DATOS
    // DELETE -> ELIMINAR DATOS

    // CUANDO EL USUARIO ACCEDA A ESTA RUTA EJECUTAREMOS EL METODO register
    app.post('/api/users/create', usersController.register);
    
}