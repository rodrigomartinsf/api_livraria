import express from "express"
import './src/config/dbConnect.js'
import routes from './src/routes/index.js'

const app = express()

app.use(express.json())

routes(app)

app.listen(3000, () => {
  console.log('Servidor foi iniciado!');
})