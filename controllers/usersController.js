//  CREO UN OBJETO USER
const User = require('../models/users.js');

//EXPORTAMOS UN OBJETO COMPLETO ESTE TENDRA VARIOS METODOS

module.exports = {

    register(req, res) {

        const user = req.body; // CAPTURO LOS DATOS QUE ME ENVIE EL CLIENTE
        // USAMOS EL METODO CREATE DEL MODELO RECIBE UN usuario y resultado
        User.create(user, (err, data) => {
            // SI HAY UN ERROR DEVOLVEMOS 501 CON UN JSON
            if (err) {
                return res.status(501).json({
                    success: false,
                    message: 'Hubo un error con el registro del usuario',
                    error: err
                });
            }
            // RETORNAMOS UNA RESPUESTA EXITOSA
            // data HACE REFERENCIA AL ELSE DEL MODELO
            return res.status(201).json({
                success: true,
                message: 'El registro se realizo correctamente',
                data: data // EL ID DEL NUEVO USUARIO QUE SE REGISTRO
            });

        });

    }, 

}

