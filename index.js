/*---traemos la conexion a la base de datos----*/
const { conectarDB } = require('./baseDatos/conexion');
conectarDB();


/*-----traemos express y lo iniciamos------*/
//const bodyParser = require('body-parser');

const express = require('express');
const iniciarExpress = express();


//iniciarExpress.use( bodyParser.json() )


/*-----transformar datos FRONT a JSON-------*/
iniciarExpress.use( express.json( { limit: '12mb' } ) );
iniciarExpress.use( express.urlencoded({ extended:true } ));


/*-----configurar seguridad CORS-------*/
const cors = require('cors');
iniciarExpress.use( cors() );



/*-------ejecutar servidor--------*/
iniciarExpress.listen( 5000, () => {
    console.log("el puerto ya esta corriendo");

} )




/*-----importar rutas-------*/
const rutas = require('./rutas/rutasImagenes');


/*---crear ruta----*/
iniciarExpress.use(rutas);





