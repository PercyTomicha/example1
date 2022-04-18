const http = require('http');

http.createServer( ( request, response ) => {
    // Para Texto Plano
    /*
    response.writeHead(200, { 'Content-Type' : 'text/plain'});
    response.write('Hola Mundo');
    */

    // Para Objeto Json
   /*
    response.writeHead(200, { 'Content-Type' : 'application/json'});
    const user = {
        name: 'Percy',
        last_name: 'Tomicha'
    }
    response.write( JSON.stringify( user ));
    */

    // Para archivo .csv
   response.setHeader('Content-Disposition', 'attachment; filename=Listado.csv');
   response.writeHead(200, { 'Content-Type' : 'application/csv'});
   response.write('id;nombre\n');
   response.write('1;Mario\n');
   response.write('2;Ferran\n');
   response.write('3;Juan\n');
   response.write('4;Jose\n');

   response.end();

})
.listen(3000);

console.log('Escuchando en el Puerto :', 3000);