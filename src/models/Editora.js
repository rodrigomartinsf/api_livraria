import mongoose from 'mongoose'

const editoraSchema = new mongoose.Schema(
  {
    nome: {type: String, required: true}
  },
)

const Editora = mongoose.model('editoras', editoraSchema)

export default Editora
