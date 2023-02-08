/**
 * Clase 4: Manejo de archivos en Javascript.
 */

//setTimeout and setInterval
/*console.log("Iniciando Tarea");
console.log("Realizando operación");
console.log("Continuando operación");
console.log("Tarea finalizada!");*/

//Con timeout:
const temporizador = (callback) => {
    setTimeout(()=>{
        callback();
        console.log("Tarea finalizada!");
    }, 5000);
};

let operacion = () => console.log("Realizando operacion con setTimeout.");
console.log("Iniciando tarea con timeout!");
temporizador(operacion);

//Con setInteval
let contador = () => {
    let counter = 1;
    console.log("Realizando operacion con setInterval.");
    let timer = setInterval(() => {
        console.log(counter++);
        if (counter > 5){
            clearInterval(timer);
        }
    }, 1000);
    console.log("Tarea finalizada!");
};
console.log("Iniciando tarea con intervalo!");
contador();

/**
 * Manejo de archivos usando NodeJs
 * Implementación usando nodejs:fs
 */

/**
 * Fs Sincrono:
 * 
    - writeFileSync = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
    - readFileSync = Para obtener el contenido de un archivo.
    - appendFileSync = Para añadir contenido a un archivo. ¡No se sobreescribe!
    - unlinkSync = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
    - existsSync = Corrobora que un archivo exista!
*/
const fs = require("fs");
const dirName = "./module1/files";
const fileName = dirName + "/ejemplo.txt";
console.log("Generando escritura de archivos Sync con fileName: " + fileName);
if (!fs.existsSync(dirName)) fs.mkdirSync(dirName);
fs.writeFileSync(fileName, "Hola! Coders, estoy en un archivo.");
if (fs.existsSync(fileName)){
    console.log("Archivo creado con exito en la ruta: " + fs.realpathSync(fileName));
    let contenido = fs.readFileSync(fileName, "utf-8");
    console.log("Leyendo contenido del archivo:");
    console.log(contenido);
    fs.appendFileSync(fileName, " Mas contenido");
    contenido = fs.readFileSync(fileName, "utf-8");
    console.log("Actualizando contenido del archivo:");
    console.log(contenido);
    console.log("Borrando archivo..");
    fs.unlinkSync(fileName);
    fs.existsSync(fileName) ? console.log("El archivo no se pudo borrar..") : console.log("Archivo borrado");
}else {
    console.log("Error creando el archivo.");
}

/**
 * Fs Asincrono:
 * 
- writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- readFile = Para obtener el contenido de un archivo. Como pide información, su callback es de la forma: (error, resultado)=>
- appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- unlink = Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
*/
const fs = require("fs");
const dirNameSync = "./module1/files";
const fileNameSync = dirNameSync + "/ejemploCallback.txt";

fs.mkdir(dirNameSync, { recursive: true }, (error) => {
    if (error) throw Error("No se pudo crear el directorio base!");
    fs.writeFile(fileNameSync, "Hola! Coders desde callback, estoy en un archivo.", (error) => {
        if (error) throw Error("No se pudo escribir el archivo!");
        fs.readFile(fileNameSync, "utf-8", (error, contenido) => {
            if (error) throw Error("No se pudo leer el archivo!");
            console.log("Contenido del archivo:");
            console.log(contenido);
            fs.appendFile(fileNameSync, " Mas contenido", (error) => {
                if (error) throw Error("No se pudo actualizar el archivo!");
                fs.readFile(fileNameSync, "utf-8", (error, contenido) => {
                    if (error) throw Error("No se pudo leer el archivo!");
                    console.log("Contenido del archivo como resultado:");
                    console.log(contenido);
                    fs.unlink(fileNameSync, (error) => { 
                        if (error)throw Error("No se pudo borrar archivo.");
                    });
                });
            });
        });
    });
});

//Actividad en clase: Mostrar fecha y hora en el archivo.
const fs = require("fs");
const dirNameDate = "./module1/files";
const fileNameDate = dirNameDate + "/fechaHora.txt";

fs.mkdir(dirNameDate, { recursive: true }, (error) => {
    if (error) throw Error("No se pudo crear el directorio base!");
    fs.writeFile(fileNameDate, new Date(), (error) => {
        if (error) throw Error("No se pudo escribir el archivo!");
        fs.readFile(fileNameDate, "utf-8", (error, contenido) => {
            if (error) throw Error("No se pudo leer el archivo!");
            console.log("Contenido del archivo:");
            console.log(contenido);
        });
    });
});

/**
 * FS con Promesas: fs.promise
 * 
- fs.promises.writeFile = Para escribir contenido en un archivo. Si el archivo no existe, lo crea. Si existe, lo sobreescribe.
- fs.promises.readFile  = Para obtener el contenido de un archivo.
- fs.promises.appendFile = Para añadir contenido a un archivo. ¡No se sobreescribe!
- fs.promises.unlink= Es el “delete” de los archivos. eliminará todo el archivo, no sólo el contenido.
 */

//Ejemplo en vivo:
const fs = require("fs");
const dirNamePromesa = "./module1/files";
const fileNamePromesa = dirNamePromesa + "/ejemploFSPromesa.txt";

const fsConPromesas = async ()=> {
    //Creamos el directorio
    await fs.promises.mkdir(dirNamePromesa, { recursive: true });
    //Escribimos en el archivo:
    await fs.promises.writeFile(fileNamePromesa, "Hola desde Promesa!!");
    //Leemos el resultado:
    let resultado = await fs.promises.readFile(fileNamePromesa, "utf-8");
    console.log("Archivo leido resultado:");
    console.log(resultado);
};

/**
 * FS con Promesas: Escribiendo objetos completos
 */

//Lectura y escritura de archivos JSON
//Generado package.json desde npm init -y
const jsonGen = '{ "employees" : [' +
'{ "firstName":"John" , "lastName":"Doe" },' +
'{ "firstName":"Anna" , "lastName":"Smith" },' +
'{ "firstName":"Peter" , "lastName":"Jones" } ]}';

const info = {
    contenidoStr: "",
    contenidoObj: "",
    size: 0
};

const fs = require("fs");
const fileNameJSON = "./package.json";
const fileInfoJSON = "./info.json";

const fsConPromesasJSON = async ()=> {
    //Leemos el archivo:
    if (!fs.existsSync(fileNameJSON)){
        console.error("Archivo no existe favor ejecutar comando: npm init -y ");
        throw Error("El archivo no se puede leer porque no existe: " + fileNameJSON);
    } 
    //Obtenemos el JSON String 
    let jsonString = await fs.promises.readFile(fileNameJSON, "utf-8");
    console.info("Archivo JSON obtenido desde archivo: ");
    console.log(jsonString);
    info.contenidoStr = jsonString;
    info.contenidoObj = JSON.parse(jsonString);
    console.log("Objeto info transformado desde arhivo:" + fileNameJSON);
    console.log(info);

    await fs.promises.writeFile(fileInfoJSON, JSON.stringify(info));
    //Leemos el resultado:
    let resultado = await fs.promises.readFile(fileInfoJSON, "utf-8");
    console.log("Archivo leido resultado:");
    console.log(resultado);
};

fsConPromesasJSON();

/**
 * Hands on Lab:
 * Manager de Usuarios
 * FS con Promises
 */

const UserManager = require("./UserManager.js");
let userManager = new UserManager();
console.log(userManager);
let persistirUsuario = async () =>{
    await userManager.crearUsuario("Usuario1", "Apellido1", 20, "React JS");
    let usuarios = await userManager.consultarUsuarios();
    console.log(`Usuarios encontrados en User Manager: ${usuarios.length}`);
    console.log(usuarios);
};
persistirUsuario();