'use strict'

const express = require('express')

const api = express.Router()
const usersRouter = require('../controllers/userController.js')

// RUTAS
api.post('/user', usersRouter.createUser)
api.get('/user', usersRouter.getUser)

module.exports = api
