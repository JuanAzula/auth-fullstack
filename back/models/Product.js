const { model, Schema } = require('mongoose')

const productSchema = new Schema({
  id: String,
  nombre: String,
  precio: String,
  descripcion: String,
  user: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
})

productSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v
  }
})

const Producto = model('Producto', productSchema)

module.exports = Producto

// const producto = new Producto({
//     id: 19,
//     nombre: "Silla Gaming TURBOGAME",
//     precio: 59.99,
//     descripcion: "Silla Gaming de la prestigiosa marca TURBOGAME.",
// });
// producto.save()
//     .then(result => {
//         console.log("Producto guardado en la BBDD" + result)
//         mongoose.connection.close()
//     }).catch(err => {
//         console.log("Error al guardar el producto en la BBDD");
//     });
