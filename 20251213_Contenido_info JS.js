/*Cómo aplanar una lista anidada en JavaScript:

Para empezar, podemos crear una lista anidada. Por medio del método flat, aplanamos la lista, y almacenamos el resultado en otra variable. Después simplemente la mandamos a la consola.*/

const lista1 = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]];
const nueva_lista = lista1.flat();

console.log(nueva_lista);
