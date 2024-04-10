/*----importamos mongoose------*/
const mongoose = require('mongoose');


/*----conectamos a la base de datos-----*/
const conectarDB = async() => {
    
    try{

        //await mongoose.connect("mongodb://127.0.0.1:27017/halftone");

        await mongoose.connect("mongodb+srv://CABUSTOSC09:Ecoutores09@haltfone.to2o8np.mongodb.net/halftone?retryWrites=true&w=majority&appName=haltfone");
        

        console.log("se ha conectado correctamente a la base de datos");
    
    }catch(error){

        console.log("manejo del siguiente error" + error)

    }   

    
}


/*----exportamos la conexion-----*/
module.exports = {

    conectarDB
}