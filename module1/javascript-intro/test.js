const http = require('http');

const server = http.createServer((request, response) => {
    response.end("Hola mundo! Desde NodeJS usando modulo HTTP!");
});

server.listen(9090, () =>{
    console.log("Servidor corriendo en el puerto 9090.");
});