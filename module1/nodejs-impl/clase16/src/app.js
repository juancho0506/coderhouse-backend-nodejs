import express from 'express';
import __dirname from './util.js';
import { userModel } from './models/user.model.js';

import studentsModel from './models/students.js';
import { coursesModel } from './models/courses.js';

import mongoose from 'mongoose';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));


//Declaración de Routers:


const SERVER_PORT = 9090;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});

const connectMongoDB = async ()=>{
    try {
        await mongoose.connect('mongodb://localhost:27017/clase16_indexes_populate?retryWrites=true&w=majority'); //miPrimeraBaseDeDatos
        console.log("Conectado con exito a MongoDB usando Moongose.");
        //let response = await userModel.find().explain('executionStats');
        //console.log(response);
        console.log("Busqueda por usuario...\n");
        let response = await userModel.find({first_name: "Celia"}).explain('executionStats');
        console.log(response);

        //Population:

    } catch (error) {
        console.error("No se pudo conectar a la BD usando Moongose: " + error);
        process.exit();
    }
};
connectMongoDB();