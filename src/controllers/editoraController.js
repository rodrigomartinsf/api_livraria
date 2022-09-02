import Editora from '../models/Editora.js'

class EditoraController {

  static  getEditoras = async (req, res) => {
    try {
      let editora = await Editora.find()
      res.status(200).json(editora)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static  getEditoraById = async (req, res) => {
    let { id } = req.params
    try {
      let editora = await Editora.findById(id)
      res.status(200).json(editora)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static cadastrarEditora = async (req, res) => {
    let editora = new Editora(req.body)
    try {
      await editora.save()
      res.status(200).json(editora)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static updateEditora = async (req, res) => {
    let { id } = req.params
    try {
      await Editora.findByIdAndUpdate(id, req.body)
      res.status(200).json(req.body)
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

  static deleteEditora = async (req, res) => {
    let { id } = req.params
    try {
      await Editora.findByIdAndDelete(id)
      res.status(200).json()
    } catch (error) {
      res.status(500).json({message: error.message})
    }
  }

}

export default EditoraController