/**
 * Clase 0: Introduccion a Programacion en Backend
 * Principios de Javascript 
 * Actividad en Clase
 */

var nombre = "Juan Torres";
var edad = 16;
var precio = 20.99;
var series =["The Walking Dead", "Homeland", "Friends", "La casa de Papel"];
var peliculas = [
    {
        "titulo":"Avatar",
        "fechaEstreno" : "2008-06-21",
        "rating": "10"
    },
    {
        "titulo":"Avengers Infinity War",
        "fechaEstreno" : "2018-09-18",
        "rating": "10"
    },
    {
        "titulo":"Spiderman No Way Home",
        "fechaEstreno" : "2022-07-21",
        "rating": "8"
    }
];

console.log(nombre);
console.log(edad);
console.log("$" + precio + " USD");
console.log("Listado de series: " + series);
console.log("Peliculas favoritas: ");
console.log(peliculas);
//Adding age
edad++;
//Adding a new serie to the array...
series.push("Alice in Borderland");
//Printing again..
console.log(nombre);
console.log(edad);
console.log("$" + precio + " USD");
console.log("Listado de series: " + series);
console.log("Peliculas favoritas: ");
console.log(peliculas);

