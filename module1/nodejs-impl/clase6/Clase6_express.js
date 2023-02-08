import express from 'express';
//Declrando Express para usar sus funciones.
const app = express();

/**
 * Metodo GET por default:
 */
app.get('/saludo', (request, response)=>{
    response.send("¡Hola a todos, pero desde express!");
});

const SERVER_PORT = 9090;
//Arrancando el servidor:
app.listen(SERVER_PORT, () =>{
    console.log(`Servidor listo escuchando en el puerto: ${SERVER_PORT}`);
});


/**
 * Actividad en clase: Otras respuestas de Express
 */

app.get('/bienvenida', (request, response) => {
    response.send('<p style="color:blue"> Bienvenido a Express, estoy usando HTML como respuesta. </p>');
});

app.get('/usuario', (request, response) => {
    response.send({nombre: "Juan", apellido: "Torres", edad: "No se sabe", correo: "alguncorreo@gmail.com"});
});

//Otra forma:
const usuarioDummy = {nombre: "Juan", apellido: "Torres", edad: "No se sabe", correo: "alguncorreo@gmail.com"};

app.get('/usuario2', (request, response) => {
    response.send(JSON.stringify(usuarioDummy));
});

//Usando request params:
app.get('/usuario/:nombre/:apellido', (request, response) => {
    console.log(request.params);
    response.send(`Hola, tu nombre completo es: ${request.params.nombre} ${request.params.apellido}`);
});

/**
 * Ejemplo en vivo: Usando arreglos y request params
 */
const usuarios = [
    {id: "1", nomnbre: "Juan", apellido: "Torres", edad: "X", genero: "M"},
    {id: "2", nomnbre: "Carlos", apellido: "Garcia", edad: "20", genero: "M"},
    {id: "3", nomnbre: "Maria", apellido: "Torres", edad: "15", genero: "F"},
    {id: "4", nomnbre: "Patricia", apellido: "Ramirez", edad: "30", genero: "F"}
];
app.get('/', (request, response)=>{
    response.send(usuarios);
});

app.get('/:userId', (request, response)=>{
    const usuario = usuarios.find(u => u.id === request.params.userId);
    if (usuario) {
        response.send(usuario);
    }
    response.send({message: "Usuario no encontrado."});
});

app.use(express.urlencoded({extended: true}));

app.get('/ejemploQueries/query', (request, response) =>{
    let consultas = request.query;
    let {nombre, apellido, edad} = request.query;
    response.send(consultas);
});

app.get('/usuarios/query', (request, response) =>{
    let genero = request.query.genero;
    if (genero) {
        response.send(usuarios.filter(u => u.genero === genero));
    }
    response.send(usuarios);
});

