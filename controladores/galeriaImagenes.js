/*-----importar el modelo ---------*/
const modeloImagen = require('../modelos/imagenesModel');




//-----listar imagenes----
const listarImagenes = (req, resp) => {

    console.log("listo el controlador para listar imagenes");


    let conectarDB = modeloImagen.find()

    conectarDB
        .then( (resultadoBase) => {
            console.log(resultadoBase)

            return resp.status(200).json({
                status:"succes",
                mensaje : "Listar imagenes en la base de datos",
                resultadoBase
            })
        })
        conectarDB.sort({ creado: - 1 })

}



// guardar imagenes
const guardarImagenes = (req, resp) => {

  const imagen1 = req.body
  console.log(imagen1)
  
  
  
  /*--inyectar en el modelo los valores de---*/
  let nuevaImagen = modeloImagen(imagen1)
  console.log(nuevaImagen)

  
    nuevaImagen.save()
        .then( (resultado) => {

            return resp.status(200).json({
                status:"succes",
                mensaje : "La imagen se ha guardado correctamente",
                resultado
            })
        
        }).catch( (err) => {
            console.log(err)
        })
        

}




//borrar imagenes
const borrarImagenDB = (req, resp) => {

    let idFront = req.body.id
    console.log(idFront)


    modeloImagen.findOneAndDelete( { _id:idFront } )
        .then( (respuestBorrado) => {

            return resp.status(200).json({
                status:"se ha borrado correctamente",
                respuestBorrado
            })
        })

}


module.exports = {

    guardarImagenes,
    listarImagenes,
    borrarImagenDB
}