import express from 'express'
import LivroController from '../controllers/livrosController.js'

const router = express.Router()

router
  .get('/livros', LivroController.getLivros)
  .get('/livros/search', LivroController.getLivrosByTitulo)
  .get('/livros/:id', LivroController.getLivrosById)
  .put('/livros/:id', LivroController.updateLivro)
  .post('/livros', LivroController.cadastrarLivro)
  .delete('/livros/:id', LivroController.deleteLivro)
  

  export default router