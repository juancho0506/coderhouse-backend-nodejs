import express from 'express';
import config from './config/config.js';
//import Routers
import compressionRouter from './routers/compression.router.js'

import compression from 'express-compression';

const app = express();

app.use(compression({
    brotli: {enabled: true, zlib: {}}
}));

//Declare routers:
app.use("/compression", compressionRouter);

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});