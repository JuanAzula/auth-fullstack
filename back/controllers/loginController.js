const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const User = require('../models/User')

async function loginUser (request, response) {
  const { body } = request
  console.log('loginUser en controller', body)
  const { username, password } = body

  const user = await User.findOne({ username })

  const passwordCorrect = user === null
    ? false
    : await bcrypt.compare(password, user.passwordHash)

  if (!(user && passwordCorrect)) {
    response.status(401).json({
      error: 'invalid user or password'

    })
    return
  }
  console.log('después de chekear si es correcto')
  const userForToken = {
    id: user._id,
    username: user.username
  }

  const token = jwt.sign(
    userForToken,
    process.env.SECRET,
    {
      expiresIn: 60 * 60 * 24 * 7
    }
  )
  console.log('llegando al final de la función')
  response.send({
    name: user.name,
    username: user.username,
    id: user._id,
    token
  })
  console.log('saliendo de la función')
}

module.exports = {
  loginUser
}
