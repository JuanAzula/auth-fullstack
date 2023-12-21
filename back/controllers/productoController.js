'use strict'

const jwt = require('jsonwebtoken')
const Producto = require('../models/Product')
const User = require('../models/User')

async function addProducto (req, res) {
  const {
    nombre,
    precio,
    descripcion,
    userId
  } = req.body

  const authorization = req.get('authorization')
  let token = null

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (err) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }
  const user = await User.findOne(userId)

  const producto = new Producto({
    nombre,
    precio,
    descripcion,
    user: user._id
  })
  console.log('antes de .save()')
  // Guardamos los datos en la BBDD
  producto.save().then(async productoGuardado => {
    user.productos = user.productos.concat(user._id)
    console.log('antes de guardar el user')
    await user.save()
    console.log('después de guardar el user')
    res.json(productoGuardado)
  }).catch(err => {
    if (err) {
      res.status(500).send({ message: 'Error al guardar el producto' })
    } else {
      res.status(500).send({ message: 'No se ha añadido el producto en la BBDD' })
    }
  })
}

function getProductos (req, res) {
  Producto.find({}).populate('user', {
    username: 1,
    name: 1

  }).then(products => {
    res.json(products)
  }).catch(err => {
    if (err) {
      res.status(500).send({ message: 'Error en la petición' })
    } else {
      // eslint-disable-next-line no-undef
      if (!products) {
        res.status(404).send({ message: 'No hay ningún producto en la BBDD' })
      } else {
        // eslint-disable-next-line no-undef
        res.status(200).send({ products })
      }
    }
  })
}

function getProducto (req, res) {
  console.log('entra en la petición')
  const id = req.params.id
  Producto.findById(id).then(producto => {
    if (producto) {
      return res.json(producto)
    } else {
      res.status(404).json({ error: 'producto no encontrado' }).end()
    }
  }).catch(err => {
    console.log(err)
    res.status(400).end()
  })
  // const ProductoId = Producto.find(p => p.id === id).then(Producto => {
  //   if (ProductoId) {
  //     res.json(ProductoId)
  //   } else {
  //     res.status(404).json({ error: 'producto no encontrado' }).end()
  //   }
  //   console.log({ Producto })
  //   res.json(Producto)
  // })
}

async function updateProducto (req, res) {
  const dataProducto = req.body
  const userId = req.params.user
  const productoId = req.params.id
  const authorization = req.get('authorization')
  let token = null

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (err) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  const user = await User.findOne(userId)

  Producto.findByIdAndUpdate(productoId, dataProducto, { new: true }, async function (err, productoActualizado) {
    user.productos = user.productos.concat(user._id)
    console.log('antes de guardar el user')
    await user.save()
    if (err) {
      console.log(err)
      res.status(500).end()
    } else {
      res.json(productoActualizado)
    }
  })

  // .then(productoActualizado => {
  //   if (!productoActualizado) {
  //     return res.status(404).json({ error: 'producto no encontrado' }).end()
  //   }
  //   res.json(productoActualizado)
  // })
  // .catch(err => {
  //   console.log(err)
  //   res.status(500).end()
  // })
}

async function deleteProducto (req, res) {
  const productoId = req.params.id
  const authorization = req.get('authorization')
  let token = null

  if (authorization && authorization.toLowerCase().startsWith('bearer')) {
    token = authorization.substring(7)
  }

  let decodedToken = {}
  try {
    decodedToken = jwt.verify(token, process.env.SECRET)
  } catch (err) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  if (!token || !decodedToken.id) {
    return res.status(401).json({ error: 'token missing or invalid' })
  }

  Producto.findByIdAndRemove(productoId).then(() => {
    res.status(200).send()
  }).catch(err => {
    console.log(err)
    res.status(400).end()
  })
}

module.exports = {
  addProducto,
  getProductos,
  getProducto,
  updateProducto,
  deleteProducto
}
