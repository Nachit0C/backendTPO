const mysql = require('mysql2');
// Configurar con los datos de la base de datos
const coneccion = mysql.createConnection({
    host: '127.0.0.1',
    user: 'root',
    password: 'nacho123',
    //port: 3306,
    database: 'urioplata',
    multipleStatements: true
});

coneccion.connect( (err) => {
    if(err){
        console.error("Error en la conección a la base de datos", err);
    }else{
        console.log("Conexión a base de datos realizada");
    }
});

module.exports = coneccion;