import express from 'express';
import handlebars from 'express-handlebars';
import __dirname from './utils.js';
import config from './config/config.js';
import MongoSingleton from './config/mongodb-singleton.js';

//Passport imports

//Routers

const app = express();

//JSON settings:
app.use(express.json());
app.use(express.urlencoded({extended:true}));


//Declare routers:
app.get('/test', (req, res) => {
    res.send("Success!!");
});

const SERVER_PORT = config.port;
app.listen(SERVER_PORT, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
    //DotEnv:
    //console.log(config);
});

const mongoInstance = async () => {
    try {
        await MongoSingleton.getInstance();
    } catch (error) {
        console.error(error);
    }
};
mongoInstance();
//mongoInstance();