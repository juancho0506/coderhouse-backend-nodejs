const { Console } = require("console");
const http = require("http");
const SERVER_PORT = 9090;

const server = http.createServer((request, response) => {
    response.end("Mi primer hola mundo desde servidor NodeJS!! UPDATE 2!");
});
server.listen(SERVER_PORT, ()=>{
    console.log(`Listening on port: ${SERVER_PORT}`);
});