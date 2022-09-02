import Autor from '../models/Autor.js'

class AutorController {

  static  getAutores = async (req, res) => {
    try {
      let autor = await Autor.find()
      res.status(200).json(autor)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static  getAutoresById = async (req, res) => {
    let { id } = req.params
    try {
      let autor = await Autor.findById(id)
      res.status(200).json(autor)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static cadastrarAutor = async (req, res) => {
    let autor = new Autor(req.body)
    try {
      await autor.save()
      res.status(200).json(autor)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static updateAutor = async (req, res) => {
    let { id } = req.params
    try {
      await Autor.findByIdAndUpdate(id, req.body)
      res.status(200).json(req.body)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static deleteAutor = async (req, res) => {
    let { id } = req.params
    try {
      await Autor.findByIdAndDelete(id)
      res.status(200).json()
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

}

export default AutorController