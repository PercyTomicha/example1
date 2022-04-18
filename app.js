const express = require('express');
const app = express()

const port = 3000;

app.get('/', (req, res) => {
    res.send('Página de Inicio')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
});

app.get('*', (req, res) => {
    res.send('404 | Page not Found')
});

app.listen(port, () => {
    console.log(`Aplicación de Ejemplo escuchando en el http://localhost:${ port }`)
});