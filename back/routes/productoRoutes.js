'use strict'

const express = require('express')

const api = express.Router()
const ProductController = require('../controllers/productoController')

// RUTAS
api.post('/producto', ProductController.addProducto)
api.get('/productos', ProductController.getProductos)
api.put('/producto/:id', ProductController.updateProducto)
api.get('/producto/:id', ProductController.getProducto)
api.delete('/producto/:id', ProductController.deleteProducto)

module.exports = api
