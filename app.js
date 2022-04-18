const express = require('express');
const app = express()

app.get('/', (req, res) => {
    res.send('Página de Inicio')
});

app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
});

app.get('*', (req, res) => {
    res.send('404 | Page not Found')
});

app.listen(3000);