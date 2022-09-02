import express from 'express'
import AutorController  from '../controllers/autoresController.js'

const router = express.Router()

router
  .get('/autores', AutorController.getAutores)
  .post('/autores', AutorController.cadastrarAutor)
  .put('/autores/:id', AutorController.updateAutor)
  .get('/autores/:id', AutorController.getAutoresById)
  .delete('/autores/:id', AutorController.deleteAutor)

  export default router