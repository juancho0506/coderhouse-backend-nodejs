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
const socketServer = new Server(httpServer);
socketServer.on("connection", socket => {
    console.log("Nuevo cliente conectado.");
    //console.log(socket);
    socket.on("message", data => {
        console.log(data);
    });

    socket.emit("evento_socket_individual", "Este mensaje solo lo debe recibir el socket.");
    socket.broadcast.emit("evento_para_todos_excepto_socket_actual", "Este evento es para todos los sockets, menos el socket desde que se emitió el mensaje!");
    socketServer.emit("evento_para_todos", "Evento para todos los Sockets!");

    
    //Ejercicio 1
    socket.on("message1",data=>{
        console.log("Recibiendo texto:");
        console.log(data);
        socketServer.emit('log',data);
    });

    //Ejercicio 2
    const logs = [];
    //Message2 se utiliza para la parte de almacenar y devolver los logs completos.
    socket.on("message2",data=>{
        logs.push({socketid:socket.id,message:data})
        socketServer.emit('log',{logs});
    });
});