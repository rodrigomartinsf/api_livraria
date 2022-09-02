import mongoose from 'mongoose'

mongoose.Promisse = global.Promisse;

mongoose.connect('mongodb://localhost/alura-node', { useNewUrlParser: true, useUnifiedTopology: true })
.then(() => console.log('Conectado ao MongoDB'))
.catch((err) => console.error(err))

const db = mongoose.connection

export default db

