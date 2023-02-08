//Ejemplo de Array.map()
//Syntax:
// Arrow function
map((element) => { /* … */ })
map((element, index) => { /* … */ })
map((element, index, array) => { /* … */ })

const numbers = [1, 4, 9];
const doubles = numbers.map((num) => num * 2);

console.log(doubles); // [2, 8, 18]
console.log(numbers); // [1, 4, 9]

//ES7
//Uso de exponencial ** como remplazo de la funcion pow de la librería Math (Math.pow(base, exp)))
let valoresBase = [1, 2, 3, 4, 5, 6];
/** 
 * Toma un arreglo de valores base y con ayuda del operador map(), utiliza el operador exponencial para
 * elevar el valor base por su indice así: (1**0, 2**1, 3**2, 4**3, 5**4, 6**5) 
*/
let exponenciales = valoresBase.map((base, indice) => base**indice);
console.log("Modificando valores del arreglo:");
console.log(valoresBase);
console.log("Elevando su valor base por su indice en el arreglo:");
console.log(exponenciales);

//Array.includes: Corrobora si algún elemento existe en el arreglo:
let nombres = ['Juan', 'Camilo', 'María', 'Ana', 'Humberto'];
console.log("Array Includes con arreglo:");
console.log(nombres);
const nombreBuscar = "Camilo";
if (nombres.includes(nombreBuscar)){
    console.log(`${nombreBuscar} si existe dento del arreglo.`);
} else {
    console.log(`${nombreBuscar} No existe dento del arreglo.`);
}

//ES8
//Uso de Object.entries, Object.values, Object.keys 
//para un mejor control interno sobre las propiedades de un objeto.
const impuestos = {
    impuesto1 : 2341,
    impuesto2 : 341,
    impuesto3: 4611,
    impuesto4: 111
};

let parLlaveValor = Object.entries(impuestos);
console.log(parLlaveValor);

let soloPropiedades = Object.keys(impuestos);
console.log(soloPropiedades);

let soloValores = Object.values(impuestos);
console.log(soloValores);

//Calcular el total de impuestos en valores:
console.log("Calculando impuestos totales...");
let impuestoTotales = soloValores.reduce((valorAcumulado, valorInicial) => {
    console.log(`Valores: valorInicial: ${valorInicial} y valorAcumulado: ${valorAcumulado}`);
    return valorAcumulado+valorInicial
});
console.log("Valor total de los impuestos:");
console.log(impuestoTotales);

//ES9
//Spread and Rest Operator 
//Tomemos un objeto de ejemplo:
const persona = {
    nombre: 'Max',
    edad: 29,
    saludar() {
        console.log('Hola, Yo soy ' + this.nombre);
    }
};
//Y usemos un array de ejemplo:
const hobbiesOriginal = ['Deportes', 'Cocinar'];

//Copiando arrays
console.log("\n************** Copiando arrays: ************ \n");
const copiedSlicedArray = hobbiesOriginal.slice();
const copiedNestedArray = [hobbiesOriginal];
console.log("copiedSlicedArray: ");
console.log(copiedSlicedArray);
console.log("copiedNestedArray: ");
console.log(copiedNestedArray);

//Usando operador Spread:
console.log("\n************** Spread operator: ************ \n");
const copiedArrayWithSpread = [...hobbiesOriginal]
console.log("copiedArrayWithSpread: ");
console.log(copiedArrayWithSpread);
//También nos sirve para copiar objetos:
const personCopiedSpread = {...persona};
console.log("Persona copiada usando spread: ");
console.log(personCopiedSpread);

//Rest Operator:
console.log("\n************** Rest operator: ************ \n");
//Depende como usemos el (...) operator se comporta como un spread or rest.
const toArray = (...args) => { //En este caso estamos usando el operador como argumento
    return args;               // por esto, los argumentos se unen y se constuye un array con los mismos.
}
console.log(toArray(1,2,3,4));

//Objects Destructuring 
//Usando el objeto persona como ejemplo:
console.log("\n************** Objects Destructuring: ************ \n");
const printNameStandard = (personParam) => {
    console.log("printNameStandard = (personParam)");
    console.log(personParam.nombre);
};
printNameStandard(persona);
/** Usando una función con object destructing */
const printNameDestruc = ({nombre}) => {//Esto permite recibir un objeto y mapearlo a un atributo específico.
    console.log("printNameDestruc = ({nombre}) =>");
    console.log(nombre);
};
printNameDestruc(persona);

//Esto es posible también, no es del todo corecto como buena practica.
console.log("const {nombre, edad} = persona;");
const {nombre, edad} = persona;
console.log(nombre, edad);

//Ejemplo en vivo:
//Usemos dos objetos:
const persona1 = {
    nombre: 'Ana',
    edad: 35,
    sexo: "Mujer",
    saludar() {
        console.log('Hola, Yo soy ' + this.nombre);
    }
};
const persona2 = {
    nombre: 'Joel',
    edad: 40,
    tieneBarba: true,
    saludar() {
        console.log('Hola, Yo soy ' + this.nombre);
    }
};

console.log("Tenemos dos personas:");
console.log(persona1);
console.log(persona2);
//Hacemos merge de personas:
let persona3 = {...persona1, ...persona2};
console.log("Fusion resultante persona1 + persona2:");
console.log(persona3);
//Otro ejemplo de Rest:
let {edadTemp, ...personaTemp} = persona3;
console.log("Usando rest para copiar las propiedades restantes excluyendo edad:");
console.log(personaTemp);
console.log("Edad separada:" + edadTemp);
console.log(personaTemp.saludar());

/**** Actividad en Clase ***************/
/**
 * Dados los objetos indicados:
 * Realizar una lista nueva  (array) que contenga todos los tipos de productos (no cantidades), 
 * consejo: utilizar Object.keys y Array.includes. Mostrar el array por consola.
 * Posteriormente, obtener el total de productos vendidos por todos los objetos (utilizar Object.values)
 */
const objetos =  [
	{
		manzanas:3,
		peras:2,
		carne:1,
		jugos:5,
		dulces:2
	},
	{
		manzanas:1,
		sandias:1,
		huevos:6,
		jugos:1,
		panes:4
	}
];

//let listaComidas = objetos.keys;
//console.log(listaComidas);

let tipoProductos = [];
let valoresProductos = 0;
const mostrarTiposProductos = () =>{
        for (let i = 0; i < objetos.length; i++) {
            let tiposTemp = Object.keys(objetos[i]);
            let valoresTemp = Object.values(objetos[i]);
            console.log(valoresTemp);
            valoresProductos += valoresTemp.reduce((acumulado, actual) => acumulado + actual);
            console.log("Tipos detectados: ");
            console.log(tiposTemp);
            tiposTemp.forEach((tipo) => {
                if (!tipoProductos.includes(tipo)){
                    tipoProductos.push(tipo);
                } 
            });
        }
        console.log("Tipos de productos actual:");
        console.log(tipoProductos);
        console.log("Cantidad de productos productos vendidos:");
        console.log(valoresProductos);
    }

mostrarTiposProductos();
//Ejemplo con Map
const mostrarTiposProductosFuncionalApproach = (...listaProductos) => {
    let tipoProductos = [];
    let valoresProductos = 0;
    console.log("Recibiendo cesta de productos:");
    console.log(listaProductos);
    console.log(`Cantidad de objetos en la canasta: ${listaProductos.length}`);
    listaProductos.map((canasta) => {
        console.log(`canasta: ${canasta}`);
        tipoProductos.push(canasta);
        //valoresProductos += cantidad;
    });
    return {tipoProductos, valoresProductos};
};
const resultado = mostrarTiposProductosFuncionalApproach(...objetos);
console.log(resultado.tipoProductos);
console.log(resultado.valoresProductos);

/**
 * Ejemplo operador nullish y variables privadas:
 * El operador nullish difiere del operador ||, ya que || también ignora valores "falseys".
 */ 
let variableDePrueba = 0;
let variableAsignable = variableDePrueba || "Sin valor";
console.log(variableAsignable);
let variableConNullish = variableDePrueba ?? "Sin valor";
console.log(variableConNullish);
//Variables privadas:
/**
 * Ejemplo en vivo
 * Clase persona
 */
class Persona {
    #fullname; //Primero declaramos la variable antes del constructor 
               //para poder construirla con los valores del constructor.
    constructor (primerNombre, apellido) {
        this.primerNombre = primerNombre;
        this.apellido = apellido;
        this.#fullname = `${this.nombre} ${this.apellido}`;
    }

    static especie = "Humano";

    getFullName = () => {
        return this.#fullname;
    }
    saludar = () => {
        console.log(`Hola! Me llamo ${this.getFullName()}, mucho gusto!`);
    }

    preguntarEspecie = () => {
        console.log(`Aunque no lo creas soy un ${Persona.especie}`);
    }
    #metodoPrivado = () => {}; //Solo para manejo interno.
};
let instanciaPersona = new Persona("Mauricio", "Espinoza");
console.log(instanciaPersona.saludar());

/**
 * Hands on lab:
 * Registrador de tickets de Eventos
 */
class Evento{
    constructor(nombre, lugar, precio){
        this.nombre = nombre;
        this.lugar = lugar;
        this.precio = precio;
        this.capacidad = 50;
        this.fecha = new Date();
    }
};

class TicketManager{
    #precioBaseGanancia;
    constructor(){
        this.#precioBaseGanancia = 0.15;
        this.eventos = new Array();
    }
    getEventos = () =>{
        return this.eventos;
    }

    agregarEvento = (nombre, lugar, precio) => {
        let nuevoEvento = new Evento(nombre, lugar, (precio + (precio*this.#precioBaseGanancia)));
        this.eventos.push(nuevoEvento);
    }
};

let ticketManager = new TicketManager();
console.log(ticketManager);
console.log(ticketManager.getEventos());
ticketManager.agregarEvento("Prueba Evento", "Bogota", 1200);
console.log(ticketManager.getEventos());
