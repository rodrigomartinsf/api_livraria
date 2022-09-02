import express from 'express'
import livrosRoutes from './livrosRoutes.js'
import autoresRoutes from './autoresRoutes.js'
import editoraRoutes from './editoraRoutes.js'


const routes = (app) => {
  app.route('/').get((req, res) => {
    res.status(200).json({ titulo: 'Api Livraria'} )
  })

  app.use(express.json())
  app.use(livrosRoutes)
  app.use(autoresRoutes)
  app.use(editoraRoutes)
}



export default routes