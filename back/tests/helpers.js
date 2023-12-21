const { app } = require('../index')
const supertest = require('supertest')

const api = supertest(app)

module.exports = { api }
