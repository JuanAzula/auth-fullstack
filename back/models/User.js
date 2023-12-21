// Definimos la ENTIDAD "user"
'use strict'
const { model, Schema } = require('mongoose')

const userSchema = Schema({
  userId: String,
  username: String,
  name: String,
  //   email: String,
  passwordHash: String,
  productos: [{
    type: Schema.Types.ObjectId,
    ref: 'Producto'
  }]
})

userSchema.set('toJSON', {
  transform: (document, returnedObject) => {
    returnedObject.id = returnedObject._id
    delete returnedObject._id
    delete returnedObject.__v

    delete returnedObject.passwordHash
  }
})

const User = model('User', userSchema)

module.exports = User
