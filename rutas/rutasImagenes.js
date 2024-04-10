/*------importar express-----*/
const express  = require('express');
const usarRuta = express.Router();



/*-----importamos el controlador-------*/
const DocControlador = require('../controladores/galeriaImagenes')




/*----creamos la ruta----*/
usarRuta.post('/imagenes', DocControlador.guardarImagenes);
usarRuta.get('/traerImagenes', DocControlador.listarImagenes);
usarRuta.delete('/borrarImagen', DocControlador.borrarImagenDB);





/*----exportamos la ruta------*/
module.exports = usarRuta;




