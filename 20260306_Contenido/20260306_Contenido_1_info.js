/*
Video: youtube.com/shorts/-uUIiqrbHiQ

Cómo determinar cuales números de una matriz son divisibles por otro número con JavaScript:

Se puede determinar por medio del método filter. Considera el siguiente ejemplo, almacenamos la matriz que queremos evaluar en una variable. Obtenemos el número que vamos a utilizar y lo almacenamos en otra variable. Usamos el método filter para crear una nueva matriz con los elementos que satisfacen la sentencia condicional. Después mandamos la nueva matriz a la consola.
*/

const laMatriz = [12, 65 , 54, 39, 102, 339, 221];
const numero = parseInt(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);

const resultado = laMatriz.filter((elemento) => elemento % numero == 0);
console.log(`Los números divisibles por ${numero}: ${resultado}`);
