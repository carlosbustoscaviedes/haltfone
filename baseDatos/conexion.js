/*----importamos mongoose------*/
const mongoose = require('mongoose');


/*----conectamos a la base de datos-----*/
const conectarDB = async() => {
    
    try{

        await mongoose.connect("mongodb://127.0.0.1:27017/halftone");
        console.log("se ha conectado correctamente a la base de datos");
    
    }catch(error){

        console.log("manejo del siguiente error" + error)

    }   

    
}


/*----exportamos la conexion-----*/
module.exports = {

    conectarDB
}