//Constantes

const express = require('express');

const containerClass = require('./models/Container');

const app = express();

const PORT = 8080;

const myContainer = new containerClass.Container();

const myProducts = JSON.parse(myContainer.getAll());

const getRandomInt = function (min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

//Conexión

const server = app.listen(PORT, () => {
    console.log(`Servidor http escuchando en el puerto ${server.address().port}`)
 });
 
server.on("error", error => console.log(`Error en servidor ${error}`)); 


//Rutas

app.get('/', (req, res) => {

    res.send({ mensaje: 'Home' });

});

app.get('/productos', (req, res) => {

    res.send(myProducts);

});

app.get('/productoRandom', (req, res) => {

    let randomId = getRandomInt(1,6);

    res.send(myContainer.getById(randomId));
});
