import express from 'express';
import config from './config/config.js';
//Clase de test:
import suma from './suma.js';
//import Routers

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({extended:true}));

//Declare routers:

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    console.log("Ejecutando set de pruebas para suma:");
    //Escenarios:
    let testPasados = 0;
    const testTotales = 4;
    //Test 1: La función debe devolver null si algun parametro no es numérico.
    console.log("Test 1: La función debe devolver null si algun parametro no es numérico.");
    let resultTest1 = suma("2", 2);
    if (resultTest1 === null) {
        console.log("Test 1: pasado!");
        testPasados++;
    } else console.error(`Test 1: No pasado, se recibió ${typeof resultTest1}, pero se esperaba null.`);

    //Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:
    console.log("Test 2: La funcion debe devolver 0 si no se pasa ningún parámetro:");
    let resultTest2 = suma();
    if (resultTest2 === 0) {
        console.log("Test 2: pasado!");
        testPasados++;
    } else console.error(`Test 2: No pasado, se recibió ${typeof resultTest2}, pero se esperaba valor cero.`);

    //Test 3: La función debe poder realizar la suma correctamente.
    console.log("Test 3: La función debe poder realizar la suma correctamente.");
    let resultTest3 = suma(2, 3);
    if (resultTest3 === 5) {
        console.log("Test 3: pasado!");
        testPasados++;
    } else console.error(`Test 3: No pasado, se recibió ${typeof resultTest3}, pero se esperaba valor 5.`);

    //Test 4: La función debe poder realizar la suma con cantidad de numeros.
    console.log("Test 4: La función debe poder realizar la suma con cualquier cantidad de numeros");
    let resultTest4 = suma(1, 2, 3, 4, 5);
    if (resultTest4 === 15) {
        console.log("Test 4: pasado!");
        testPasados++;
    } else console.error(`Test 4: No pasado, se recibió ${typeof resultTest4}, pero se esperaba valor 15.`);
        
    
});