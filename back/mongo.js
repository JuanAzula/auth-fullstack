const mongoose = require('mongoose')

const { MONGO_DB_URI, MONGO_DB_URI_TEST, NODE_ENV } =
process.env

const connectionString = NODE_ENV === 'test'
  ? MONGO_DB_URI_TEST
  : MONGO_DB_URI

mongoose.connect(connectionString, {
})
  .then(() => {
    console.log('Conexión a la BBDD correcta')
  // eslint-disable-next-line n/handle-callback-err
  }).catch(err => {
    console.error('Conexión a la BBDD incorrecta')
  })

module.exports = mongoose
