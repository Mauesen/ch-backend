/* NODE NATIVO */

// Inicializacion

const http = require('http');

const server = http.createServer((peticion, respuesta) => {
   respuesta.end('Hola mundo!!!');
});

//Conexión

const connectedServer = server.listen(8081, () => {
   console.log(`Servidor Http escuchando en el puerto ${connectedServer.address().port}`);
});


/* EXPRESS */

//Inicializacion

const express = require('express');

const app = express();

//Conexión

const PORT = 8080;

const server = app.listen(PORT, () => {
   console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
});

server.on("error", error => console.log(`Error en servidor ${error}`)); //Error event


//Manejo de rutas

//req = request (petición) / res = response (respuesta)

app.get('/', (req, res) => {
    res.send({ mensaje: 'hola mundo' })
});