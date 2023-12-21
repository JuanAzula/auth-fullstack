'use strict'

const express = require('express')
const cors = require('cors')
const app = express()

// CARGA DE RUTAS
const product_routes = require('./routes/productoRoutes')

// CONFIGURAR BODY-PARSER
app.use(express.urlencoded({ extended: true }))
app.use(express.json()) // Para parsear peticiones entrantes con JSON payloads

// CONFIGURAMOS LAS CABECERAS (PARA EVITAR PROBLEMAS CORS)
app.use(cors())
app.options('*', cors())

// RUTAS BASE
app.use('/api', product_routes)

module.exports = app
