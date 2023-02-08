import express from 'express';

//Import de los routers
import usersRouter from './routes/users.router.js';
import petsRouter from './routes/pets.router.js';
//Import thel FILE PATH
import __dirname from './util.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));
//app.use(express.static('public'));
app.use(express.static(__dirname+'/public'));

//Middleware
app.use(function (request, response, next){
    console.log("Mi propio middleware.");
    console.log("Time: " + Date.now());
    next();
});

//Routers
app.use('/api/user',usersRouter);
app.use('/api/pet',petsRouter);


const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    console.log(__dirname);
});