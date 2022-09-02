import mongoose from 'mongoose'

const livroSchema = new mongoose.Schema(
  {
    titulo: {type: String, required: true},
    autor: {type: mongoose.Schema.Types.ObjectId, ref: 'autores', required: true},
    editora: {type: mongoose.Schema.Types.ObjectId, ref: 'editoras', required: true},
    numeroPaginas: {type: Number}
  }
)

const Livro = mongoose.model('Livro', livroSchema)

export default Livro
