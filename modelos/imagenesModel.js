/*---para el MODELO importamos Schem y model -----*/
const { Schema, model } = require('mongoose');




/*-----creamos el modelo------*/
const modeloImagenes = Schema({

    imagen:{
        type:String,
        required : true
    },
    creado:{
        type:Date,
        default: Date.now
    }

})



/*---exportamos el modelo----*/
module.exports = model('imagenesModel', modeloImagenes, 'imagenesHaltfone');