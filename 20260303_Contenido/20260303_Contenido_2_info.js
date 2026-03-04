/*
Video: youtube.com/shorts/BImX7qEfeJU

Cómo convertir una cantidad de tiempo en horas, minutos, y segundos con JavaScript:

Considera el siguiente ejemplo, obtenemos la cantidad de tiempo y la almacenamos en una variable. Después usamos el método Math.floor() y módulo para separar el tiempo en horas, minutos, y segundos. Después mandamos el resultado a la consola en el formato necesario.

Fuente del reto: (@freecodecamp)
*/

let tiempo = parseInt(prompt("Por favor escriba una cantidad de tiempo en segundos: "));
console.log("Por favor escriba una cantidad de tiempo en segundos: ");
console.log(tiempo);

let horas = Math.floor(tiempo / 3600);
let resto_t = tiempo % 3600;
let minutos = Math.floor(resto_t / 60);
let segundos = resto_t % 60;

console.log(`${horas}:${minutos}:${segundos}`);
