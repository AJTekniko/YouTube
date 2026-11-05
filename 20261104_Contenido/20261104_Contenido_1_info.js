/*
Video: youtube.com/shorts/cbYH57-iy2E

La sintaxis rest en JavaScript:

Uno puede desempacar y asignar la parte restante de una matriz a una variable usando la sintaxis rest. Considere el ejemplo que ve en pantalla.
*/

let frutas = ["manzana", "plátano", "naranja", "mango", "kiwi"];
let [primera, segunda, ...rest] = frutas;

console.log(primera);
console.log(segunda);
console.log(rest);
