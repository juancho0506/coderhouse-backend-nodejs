/**
 * Clase 1: Introduccion a Programacion en Backend
 * Principios de Javascript 
 */

/**
 * Ejercicio Tipos de Datos
 */



let people = [
    {id:1, first_name:"Luz", last_name:"Escalante", age:25, gender: "F"},
    {id:2, first_name:"Bruno", last_name:"Guerra", age:18, gender: "M"},
    {id:3, first_name:"Marisol", last_name:"Cadena", age:23, gender: "F"},
    {id:4, first_name:"Franco", last_name:"Chachagua", age:30, gender: "M"}
];

let person = people.find(p => {
    let test;
    test = p.id === 3; //This is the absolute equal comparator
    return test;
});
console.log(person);

/**
 * Hands on lab
 * @param {*} listaElementos 
 */
const mostrarLista = function (listaElementos) {
    console.log("Ejecutando mostrarLista con parametro:");
    console.log(listaElementos);
    if (listaElementos.length == 0){
        console.log("Lista vacia.");
    } else {
        listaElementos.forEach(element => {
            console.log(element);
        });
        console.log(`Tamaño de la lista: ${listaElementos.length}`);
    }
};

const mostrarListaSpread = (...listaElementos) => {
    console.log("Ejecutando mostrarLista usando spread operator, con parametro:");
    console.log(listaElementos);
    if (listaElementos.length > 0){
        listaElementos.forEach(element => {
            console.log(element);
        });
    } else {
        console.log("Lista vacia.");
    }
    console.log(`Tamaño de la lista: ${listaElementos.length}`);
};

const lista1 = [];
const lista2 = [1, "carro", "perro", 10000];
mostrarLista(lista1);
mostrarLista(lista2);

mostrarListaSpread();
mostrarListaSpread(...lista2);

//Clases
/**
 * Ejemplo en vivo
 * Clase persona
 */
class Persona {
    constructor (primerNombre, apellido) {
        this.primerNombre = primerNombre;
        this.apellido = apellido;
    }

    static especie = "Humano";

    fullName = () => {
        console.log(`Nombre completo: ${this.primerNombre} ${this.apellido}`);
    }
    saludar = () => {
        console.log(`Hola! Me llamo ${this.primerNombre}, mucho gusto!`);
    }

    preguntarEspecie = () => {
        console.log(`Aunque no lo creas soy un ${Persona.especie}`);
    }
};

let persona1 = new Persona("Juan", "Torres");
let persona2 = new Persona("Rosa", "Perez");
persona1.saludar();
persona1.fullName();
persona1.preguntarEspecie();

persona2.saludar();
persona2.fullName();
persona2.preguntarEspecie();

/**
 * Hands on Lab
 * Clase Contador
 */
class Contador{
    constructor(name){
        this.name = name;
        this.contador = 0;
    }
    static contadorGlobal = 0;
    getResponsable = () => {
        return this.name;
    }
    contar = () => {
        this.contador = this.contador + 1;
        Contador.contadorGlobal = Contador.contadorGlobal + 1;
    }
    getCuentaIndividual = () => {
        return this.contador;
    }
    getCuentaGlobal = () => {
        return Contador.contadorGlobal;
    }
};

let contador1 = new Contador("Contador 1");
let contador2 = new Contador("Contador 2");
contador1.contar();
console.log(`Cuenta actual-> Global= ${contador1.getCuentaGlobal()} - Contador 1= ${contador1.getCuentaIndividual()}`);
contador1.contar();
console.log(`Cuenta actual-> Global= ${contador1.getCuentaGlobal()} - Contador 1= ${contador1.getCuentaIndividual()}`);
contador2.contar();
console.log(`Cuenta actual-> Global= ${contador2.getCuentaGlobal()} - Contador 2= ${contador2.getCuentaIndividual()}`);