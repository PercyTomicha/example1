const express = require('express');
const app = express()

app.get('/', function (req, res){
    res.send('Página de Inicio')
});

app.get('/hola-mundo', function (req, res){
    res.send('Hola Mundo')
});

app.get('*', function (req, res){
    res.send('404 | Page not Found')
});

app.listen(3000);