'use strict'
require('dotenv').config()
require('./mongo')

const express = require('express')
const app = require('./app')
const cors = require('cors')
const productRoutes = require('./routes/productoRoutes')
const logger = require('./loggerMiddleware')
const userRoutes = require('./routes/userRoutes.js')
const loginRoute = require('./routes/loginRoute.js')

app.use(cors())
app.use(express.json())
app.use('/api', productRoutes)
app.use('/api', userRoutes)
app.use('/api', loginRoute)

app.use(logger)

const PORT = process.env.PORT || 3003
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})

module.exports = { app, server }
