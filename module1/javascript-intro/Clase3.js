/**
 * Clase 3: Programacion sincronica y asincronica 
 */

/**
 * Funciones en Javascript
 * Callbacks: Usando callback en la función map.
 */

//Usemos un arreglo de prueba:
let valoresOriginales = [1, 2, 3, 4, 5];
console.log("Valores Originales:");
console.log(valoresOriginales);
//Normalmente leemos el map de ésta forma:
let nuevosValores = valoresOriginales.map(x=> x+1);
console.log("Nuevos valores:");
console.log(nuevosValores);

//Otras operaciones
let otrosValores = valoresOriginales.map(x => x*2); //[2, 4, 6, 8, 10]
let masValores = valoresOriginales.map(x => "a"); //["a", "a", "a", "a"]

//Que pasa si declaramos el callback fuera?
const mapCallBack = (valor) => {
    if (valor%2 === 0) {
        return valor;
    } else {
        return "No es par!"
    }
};
const evaluarParesMap = valoresOriginales.map(mapCallBack); //Se pasa la funcion directamente...
console.log(evaluarParesMap);

//Recrear un callback de funcion map:
//Usemos un arreglo de prueba:
let arregloDePrueba = [1, 2, 3, 4, 5];
const miFuncionMap = (arreglo, callback) => {
    let nuevoArreglo = [];
    for (let i=0; i< arreglo.length; i++) {
        let nuevoValor = callback(arreglo[i]);
        nuevoArreglo.push(nuevoValor);
    } 
    return nuevoArreglo;
};
//Ejecutemos las dos versiones:
let nuevoArregloPropio = miFuncionMap(arregloDePrueba, x => x * 2);
let nuevoArregloConMap = arregloDePrueba.map(x => x * 2);
console.log(nuevoArregloPropio);
console.log(nuevoArregloConMap);

//Extra: Podemos agregar nuestra funcion al arreglo como tal, usando el prototype del objeto Array:
Array.prototype.miFuncionMap = function (callback){
    let nuevoArreglo = [];
    for (let i=0; i< this.length; i++) {
        let nuevoValor = callback(this[i]);
        nuevoArreglo.push(nuevoValor);
    } 
    return nuevoArreglo;
};
console.log(arregloDePrueba.miFuncionMap(x=>x+1));

/**
 * Callbacks usando distintas operaciones
 */
const sumar = (numero1, numero2) => numero1+numero2;
const restar = (numero1, numero2) => numero1-numero2;
const multiplicar = (numero1, numero2) => numero1*numero2;
const dividir = (numero1, numero2) => numero1/numero2;

const realizarOperacion = (numero1, numero2, callback) => {
    console.log(`Voy a realiar una operación, puede ser: ${callback}`);
    let resultado = callback(numero1, numero2);
    console.log(`El resultado de la operacion realizada es: ${resultado}`);
};
realizarOperacion(2, 5, sumar);
realizarOperacion(2, 5, restar);
realizarOperacion(2, 5, multiplicar);
realizarOperacion(2, 5, dividir);

//Promesas
const dividirConPromesa = (dividendo, divisor) => {
    return new Promise((resolve, reject)=>{ //resolve y reject son funciones callback igualmente.
        console.log(`Recibiendo promesa para dividir: ${dividendo} / ${divisor}`);
        if (divisor === 0) {
            reject("No se puede dividir por cero.");//La promesa no se puede cumplir para este caso...
        } else {
            resolve(dividendo/divisor); //OJO le estoy pasando el valor resultado de esta operación, 
                                        //Tambien podria definir otra funcion y devolver un resultado unico. 
        }
    });
};
console.log("Dividiendo usando Promesas, Resultado:");
console.log(dividirConPromesa(2, 5));
console.log(dividirConPromesa(2, 0));
//Manejando esto con then y catch:
dividirConPromesa(6, 3)
.then(resultado => console.log(resultado))
.catch(error => console.log(error));

//Usando Async y Await
const funcionAsincrona = async(a, b) =>{
    console.log("Ejecutando division por funcion async()");
    try{
        let resultado = await dividirConPromesa(a, b);
        console.log(`Intentando la promesa de dividir ${a}/${b}`);
        console.log(resultado);
    }catch(error){
        console.log("No se pudo cumplir la promesa, Error:" + error);
    }
};
funcionAsincrona(9, 3);
funcionAsincrona(9, 0);

/**
 * Hands on Lab: Calculadora de Promesas
 */
const sumaConPromesa = (valor1, valor2) => {
    return new Promise((resolve, reject)=>{
        console.log(`Recibiendo promesa para sumar: ${valor1} + ${valor2}`);
        if (valor1 === 0 || valor2 ===0) {
            reject("Operacion Innecesaria");
        } else {
            let resultado = valor1 + valor2;
            resolve(resultado <0 ? 
                reject("La calculadora solo puede devolver valores positivos") 
                : resultado);
        }
    });
};

const restaConPromesa = (valor1, valor2) => {
    return new Promise((resolve, reject)=>{
        console.log(`Recibiendo promesa para restar: ${valor1} - ${valor2}`);
        if (valor1 === 0 || valor2 ===0) {
            reject("Operacion Invalida");
        } else {
            let resultado = valor1 - valor2;
            resolve(resultado <0 ? 
                reject("La calculadora solo puede devolver valores positivos") 
                : resultado);
        }
    });
};

const multiplicarConPromesa = (valor1, valor2) => {
    return new Promise((resolve, reject)=>{
        console.log(`Recibiendo promesa para multiplicar: ${valor1} * ${valor2}`);
            let resultado = valor1 * valor2;
            resolve(resultado < 0 ? 
                reject("La calculadora solo puede devolver valores positivos") 
                : resultado);
    });
};

const calculos = async(valor1, valor2, operacionCallback) => {
    console.log(`Ejecutando operacion por funcion async()`);
    try{
        let resultado = await operacionCallback(valor1, valor2);
        console.log(`Intentando la promesa usando valores de entrada : ${valor1} - ${valor2}`);
        console.log(resultado);
    }catch(error){
        console.log("No se pudo cumplir la promesa, Error:" + error);
    }
};
calculos(10, 2, sumaConPromesa);
calculos(2, 3, multiplicarConPromesa);
calculos(-5, 8, restaConPromesa);
calculos(8, -10, sumaConPromesa);
calculos(5, 0, dividirConPromesa);
calculos(225, 5, dividirConPromesa);