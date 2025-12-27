/*Cómo evaluar el tiempo transcurrido con JavaScript:

Para empezar, obtenemos el tiempo y lo almacenamos en una variable con el método performance.now(). Ejecutamos el resto del código que queremos evaluar. Una vez que se haya terminado de ejecutar el código, obtenemos el tiempo de nuevo y lo almacenamos en otra variable. Después simplemente mandamos el resultado a la consola.*/

let comienzo = performance.now();

console.log("¿Qué otro tema les gustaría que mencione en mis videos?");
console.log("Por favor escríbanlo en los comentarios. Gracias.");

let final = performance.now();
console.log(`Tiempo transcurrido: ${final - comienzo}`);
