const mongoose = require('mongoose')
const supertest = require('supertest')
const { app, server } = require('../index')

const api = supertest(app)

test('users are returned in json', async () => {
  await api.get('/api/user').expect(200).expect('Content-Type', /application\/json/)
})

test('there are two users', async () => {
  const response = await api.get('/api/user')
  expect(response.body).toHaveLength(2)
})

afterAll(() => {
  mongoose.connection.close()
  server.close()
})
