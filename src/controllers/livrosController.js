import Livro from '../models/Livro.js'

class LivroController {

  static  getLivros = async (req, res) => {
    try {
      let livro = await Livro.find().populate(['autor','editora'])
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static  getLivrosById = async (req, res) => {
    let { id } = req.params
    try {
      let livro = await Livro.findById(id).populate(['autor', 'editora'])
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static getLivrosByTitulo = async (req, res) => {
    const titulo = req.query.titulo
    try {
      let livro = await Livro.find({'titulo': titulo})
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static cadastrarLivro = async (req, res) => {
    let livro = new Livro(req.body)
    try {
      await livro.save()
      res.status(200).json(livro)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static updateLivro = async (req, res) => {
    let { id } = req.params
    try {
      await Livro.findByIdAndUpdate(id, req.body)
      res.status(200).json(req.body)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static deleteLivro = async (req, res) => {
    let { id } = req.params
    try {
      await Livro.findByIdAndDelete(id)
      res.status(200).json()
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

}

export default LivroController