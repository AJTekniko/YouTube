/*
Video: youtube.com/shorts/NJRnFrysdMw

Cómo remover elementos duplicados de una matriz con JavaScript:

Podemos convertir la matriz en un objeto Set y luego revertirlo, el cual remueve los elementos duplicados. Después mandamos el resultado a la consola.
*/

let matriz1 = [1, 2, 2, 3, 4, 3, 5];
console.log(Array.from(new Set(matriz1)));
