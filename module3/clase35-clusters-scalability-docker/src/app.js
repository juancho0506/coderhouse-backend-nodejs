import express from 'express';
import config from './config/config.js';
//import Routers
//Performance test:
import performanceRouter from './routers/performance-test.router.js';
import { addLogger } from './config/logger.js';

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(addLogger);

app.get("/", (req, res) => {
    res.send("Hola Docker!");
});

//Declare routers:
app.use("/api/performance", performanceRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});