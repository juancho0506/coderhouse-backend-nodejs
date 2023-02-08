/**
 * Clase 5: Administrador de Paquetes NPM
 */

/** NodeJS **/
/**
 * Actividad en Clase:
    Crear un proyecto de node que genere 10000 números aleatorios en un rango de 1 a 20.
    Crear un objeto cuyas claves sean los números salidos y el valor asociado a cada clave 
    será la cantidad de veces que salió dicho número. Representar por consola los resultados.
 */

const obj = {}
    for(let i = 0 ; i < 10000; i++){
        let number = Math.floor(Math.random()*20+1);
        if(!obj[number]) obj[number] = 1;
        else obj[number]++;
    }
console.log(obj);
    
/**
 * Hans on Lab: 
 * Práctica de módulos nativos: fs + crypto
 */

const UserManager = require("./UserManagerCripto.js");
let userManager = new UserManager();
console.log(userManager);
let persistirUsuario = async () =>{
    try {
        await userManager.crearUsuario("Usuario1", "Apellido1", "username1", "unPasswordPlano");
        let usuarios = await userManager.consultarUsuarios();
        console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
        console.log(usuarios);

        const usernameX = "usernameX";
        const username1 = "username1";
        const password = "unPasswordPlano";

        await validarUsuario(usernameX, password);
        await validarUsuario(username1, password);
    } catch (error) {
        console.error("Error Ejecutando la operacion.");
    }
    
};

persistirUsuario();
/*
let textoCifrado = userManager.encrypt("Hola Mundo!");
console.log("Cifrando texto: Hola mundo!");
console.log("Resultado: ");
console.log(textoCifrado);

console.log("Descifrando texto: " + textoCifrado);
let textoDescifrado = userManager.decrypt(textoCifrado);
console.log("Texto descifrado: ");
console.log(textoDescifrado);*/

/** ----- NPM install   --- */
/**
 * Actividad en clase.
 */
const moment = require('moment');

const hoy = moment();
//Colocar la fecha en formato YYYY-MM-DD
const fecha_nacimiento = moment('1996-07-13','YYYY-MM-DD'); //Prueba metiendo después el mes 200
if(fecha_nacimiento.isValid()){
    console.log(`Desde mi nacimiento, han pasado ${hoy.diff(fecha_nacimiento,'days')} días`);
}else{
    console.error("No se puede proseguir ya que la fecha es inválida")
}