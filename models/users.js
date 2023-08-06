// REQWUERIMOS LA BD
const db = require('../config/config.js');

const User = {};

// METODO PARA CREAR UN NUEVO USUARIO NECESITAREMOS UN usuario Y DEVOLVERA UN resultado
User.create = async (user, result) => {
    
        // ESTOS CAMPOS SON LO MISMOS DE LA BASE DE DATOS
    const sql = `
        INSERT INTO
            users(
                email,
                name,
                lastname,
                phone,
                image,
                password,
                created_at,
                updated_at
            )
        VALUES(?, ?, ?, ?, ?, ?, ?, ?)
    `;
    // EJECUTAMOS QUERY SQL
    db.query
    (
        sql,
        [
            user.email,
            user.name,
            user.lastname,
            user.phone,
            user.image,
            user.password,
            new Date(),
            new Date()
        ],
        // USAREMOS UN CALLBACK PARA SABER SI HUBO ERROR AL INSERTAR EL NUEVO USUARIO 
        // er ESLA VARIABLE QUE IMPRIME EL ERRRR
        (err, res) => {
            if (err) {
                console.log('Error:', err);
                // RETORNAMOS EL ERROR
                result(err, null);
            }
            else {
                console.log('Id del nuevo usuario:', res.insertId);
                // RETORNAMOS EL ID DEL USUARIO QUE SE INSERTO
                result(null, res.insertId);
            }
        }
    )
}
// LO EXPORTAMOS, LO USAREMOS EN EL CONTROLADOR
module.exports = User ;