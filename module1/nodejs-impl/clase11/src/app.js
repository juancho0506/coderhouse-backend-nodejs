import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './util.js';
import viewsRouter from './routes/views.router.js'
//WebSockets:
import {Server} from 'socket.io';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Uso de vista de plantillas
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname + "/views");
app.set('view engine', 'handlebars');

//Carpeta public
app.use(express.static(__dirname+'/public'));

//Declaración de Routers:
app.use("/", viewsRouter);

const SERVER_PORT = 9090;
const httpServer = app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

//Iniciar Websocket server:
const io = new Server(httpServer);
let messages = [];
io.on("connection", socket => {
    console.log("Nuevo cliente conectado.");
    //console.log(socket);
    socket.on("message", data => {
        messages.push(data);
        console.log(data);
        io.emit("messageLogs", messages);
    });
    //Parte 2
    socket.on('userConnected', data => {
        console.log("User connected: " + data.user);
        socket.broadcast.emit("userConnected", data.user);
    });
});