/* eslint-disable no-unused-vars */
const bcrypt = require('bcrypt')
const User = require('../models/User')
const api = require('./helpers')

describe.only('creating a new user', () => {
  beforeEach(async () => {
    await User.deleteMany({})

    const passwordHash = await bcrypt.hash('password', 10)
    const user = new User({ username: 'miduroot', name: 'midu', passwordHash })

    await user.save
  })
  test('works as expected creating a fresh username', async () => {
    const usersDB = await User.find({})
    const usersAtStart = usersDB.map((user) => user.toJSON())

    const newUser = {
      username: 'midu',
      name: 'miduroot',
      password: 'tw1tch'
    }

    await api
      .post('/api/user')
      .send(newUser)
      .expect(200)
      .expect('Content-Type', /application\/json/)
    const usersDBAfter = await User.find({})
    const usersAtEnd = usersDBAfter.map(user => user.toJSON())

    expect(usersAtEnd).toHaveLength(usersAtStart.length + 1)

    const usernames = usersAtEnd.map(user => user.username)
    expect(usernames).toContain(newUser.username)
  })
})
