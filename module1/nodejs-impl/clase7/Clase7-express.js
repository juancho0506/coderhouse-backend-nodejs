import express from 'express';
//Declrando Express para usar sus funciones.
const app = express();

//Preparar la configuracion del servidor para recibir objetos JSON.
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const SERVER_PORT = 9090;
//Arrancando el servidor:
app.listen(SERVER_PORT, () =>{
    console.log(`Servidor listo escuchando en el puerto: ${SERVER_PORT}`);
});

let users = []; //Vamos a guardar los usuarios que llegen aquí

/**
 * Metodo POST para user
 */
app.post('/api/user', (request, response) =>{
    console.log("Consumiendo api POST /api/user..");
    let user = request.body;
    user.id = Math.floor(Math.random()*20+1);
    console.log("Usuario a agregar:");
    console.log(user);
    if (!user.first_name || !user.last_name) {
        return response.status(400) //HTTP 400 BadRequest normalmente se usa para indicar error del cliente al enviar los datos.
            .send({status: "error", error: "Valores incompletos, revisa los datos de entrada."});
    }
    users.push(user);
    console.log("Usuarios actuales: ");
    console.log(users);
    return response.send({status: "Success", message: "Usuario Creado."}); //Si no se indica retorna status HTTP 200OK.
});

/**
 * Metodo PUT de un usuario
 */
app.put('/api/user/:userId', (request, response) =>{
    console.log("Consumiendo api PUT /api/user..");
    console.log(request.params);
    let userId = parseInt(request.params.userId);
    let userUpdated = request.body;
    console.log(`Buscando usuario a modificar por id: ${userId}`);  
    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0){
        return response.status(202).send({status: "info", error: "Usuario no encontrado"});
    }
    console.log("Usario encontrado para modificar:");
    console.log(users[userPosition]);
    userUpdated.id = users[userPosition].id;
    users[userPosition] = userUpdated;
    console.log("Usuarios actuales: ");
    console.log(users);
    return response.send({status: "Success", message: "Usuario Actualizado.", data: users[userPosition]}); //Si no se indica retorna status HTTP 200OK.
});

/**
 * Metodo DELETE de un usuario
 */
app.delete('/api/user/:userId', (request, response) =>{
    console.log("Consumiendo api DELETE /api/user..");
    console.log(request.params);
    let userId = parseInt(request.params.userId);
    console.log(`Buscando usuario a eliminar por id: ${userId}`);  
    const usersSize = users.length;
    const userPosition = users.findIndex((u => u.id === userId));
    if (userPosition < 0){
        return response.status(202).send({status: "info", error: "Usuario no encontrado"});
    }
    console.log("Usario encontrado para eliminar:");
    console.log(users[userPosition]);
    users.splice(userPosition, 1);
    if (users.length === usersSize) {
        return response.status(500).send({status: "error", error: "Usuario no se pudo borrar."});
    }
    return response.send({status: "Success", message: "Usuario Eliminado."}); //Si no se indica retorna status HTTP 200OK.
});

/**
 * Metodo GET por default:
 */
app.get('/api/users', (request, response)=>{
    console.log("Consumiendo api GET /api/users..");
    console.log("Usuarios actuales: ");
    console.log(users);
    response.send(users);
});