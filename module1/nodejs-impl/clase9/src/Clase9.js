import express from 'express';
import handlebars from 'express-handlebars';
import viewsRouter from './routes/views.router.js';

//Import de los routers

//Import thel FILE PATH
import __dirname from './util.js';

//Declarando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

//Template engine
app.engine('handlebars', handlebars.engine());
app.set('views', __dirname+'/views');
app.set('view engine', 'handlebars');

//Carpeta public
app.use(express.static(__dirname+'/public'));

//Routers
app.use("/", viewsRouter);

app.get("/", (req, res)=>{
    let testUser = {
        user: {
            name: "Hilda",
            last_name: "Martinez"
        }  
    };
    res.render("index", testUser);
});

const SERVER_PORT = 9090;
app.listen(9090, () => {
    console.log("Servidor escuchando por el puerto: " + SERVER_PORT);
});