const express = require('express');
const app = express()

const port = 3000;

// Servir contenido Estático
app.use( express.static('public') );

// Ignorará esta ruta, porque existe un index.html en la carpeta public/
app.get('/', (req, res) => {
    res.send('Página de Inicio')
});

// Muestra esta ruta ya que en la carpeta public/ no existe un hola-mundo/index.html 
app.get('/hola-mundo', (req, res) => {
    res.send('Hola Mundo')
});

// Muestrar esta ruta pero...
app.get('*', (req, res) => {
    // Indicando que archivo .html debe mostrar
    res.sendFile( __dirname + '/public/404.html');
});

app.listen(port, () => {
    console.log(`Aplicación de Ejemplo escuchando en el http://localhost:${ port }`)
});