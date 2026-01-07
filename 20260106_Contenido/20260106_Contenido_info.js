/*Cómo se generan números aleatorios en JavaScript:

Para generar números pseudoaleatorios se puede utilizar el método Math.random() y el método Math.floor(). Por ejemplo, si queremos un número entre 1 y 10, podemos asignar cada número a una variable e incorporar las variables en la fórmula que ve en pantalla. El método Math.random() genera un número aleatorio entre 0 y 1, mientras  Math.floor() redondea el resultado hacia abajo. Después simplemente lo mandamos a la consola.*/

let min = 1;
let max = 10;

let numero = Math.floor(Math.random() * (max - min + 1)) + min;
console.log(`Número aleatorio generado: ${numero}`);
