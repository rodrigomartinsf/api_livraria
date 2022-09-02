import express from 'express'
import EditoraController from '../controllers/editoraController.js'

const router = express.Router()

router
  .get('/editoras', EditoraController.getEditoras)
  .get('/editoras/:id', EditoraController.getEditoraById)
  .post('/editoras', EditoraController.cadastrarEditora)
  .put('/editoras/:id', EditoraController.updateEditora)
  .delete('/editoras/:id', EditoraController.deleteEditora)

  export default router