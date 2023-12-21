const bcrypt = require('bcrypt')
const User = require('../models/User')

async function getUser (request, response) {
  console.log('entro en la petición get')
  const users = await User.find({}).populate('productos', {
    nombre: 1,
    precio: 1,
    descripcion: 1
  })
  response.json(users)
}

async function createUser (request, response) {
  const { body } = request
  const { username, name, password } = body
  console.log('entro en la petición post')
  const saltRounds = 10
  const passwordHash = await bcrypt.hash(password, saltRounds)

  const user = new User({
    username,
    name,
    passwordHash
  })

  const savedUser = await user.save()

  response.status(201).json(savedUser)
}

module.exports = {
  getUser,
  createUser
}
