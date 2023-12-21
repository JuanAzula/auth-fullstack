'use strict'

const express = require('express')

const api = express.Router()
const LoginController = require('../controllers/loginController.js')

// RUTAS
api.post('/login', LoginController.loginUser)

module.exports = api
