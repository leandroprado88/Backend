const express = require('express');

const Contenedor = require('./Hoja2.js')

const PORT = 8082

const app = express()

const newcontenedor  = new Contenedor('productos.txt');

const server = app.listen(PORT, () => {
    console.log('Servidor HTTP escuchando en el puerto ' + PORT)
})

server.on ('error', error => console.log(`error en el server ${error}`))
    
app.get('/', (req, res) => {
    res.send({mensaje: 'Bienvenidos al servidor express'})
})

app.get('/productos', async (req,res) => {
    res.send (`productos: ${await newcontenedor.getAll()}`)
})

app.get ('/random', (req, res) =>{

})
