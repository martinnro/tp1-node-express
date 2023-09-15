import express from 'express' //Importo express
import { router as starsRouter } from './routes/stars.router'

const app = express() //Creo una instancia de express
const PORT = 3000 //Defino el puerto en el que va a estar escuchando el servidor

app.use(express.json())

app.use('/stars', starsRouter)

app.listen(PORT, () =>{
    console.log('Servidor Express iniciado en puerto:', PORT)
})