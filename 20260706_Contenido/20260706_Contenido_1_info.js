/*
Video: youtube.com/shorts/7cgQKaY5h1s

El método union en JavaScript:

Este método es utilizado con conjuntos para retornar los elementos que se encuentran en cualquiera de los dos conjuntos involucrados. Considere el ejemplo que ve en pantalla.
*/

let impares = new Set([1, 3, 5, 7, 9]);
let pares = new Set([2, 4, 6, 8, 10]);

console.log(...impares.union(pares));
