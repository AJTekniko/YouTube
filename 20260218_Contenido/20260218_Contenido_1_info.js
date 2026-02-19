/*
Video: youtube.com/shorts/CPQ-N6sWav4

Cómo convertir varios valores a la misma vez en JavaScript:

En videos anteriores, hemos demostrado cómo hacer conversiones básicas de velocidad y temperatura, pero para convertir varios valores a la misma vez, podemos utilizar el método map(), el cual crea una nueva matriz con los resultados de la función aplicada a todos los elementos de la matriz original. Considera el siguiente ejemplo, para convertir una matriz de temperaturas de grados Celsius a Fahrenheit, asignamos las temperaturas a una variable. Le aplicamos el método map() a la variable con las temperaturas de grados Celsius y pasamos sus elementos por una función que cambia los elementos usando la fórmula de conversión. El resultado se almacena en otra variable. Después mandamos el resultado a la consola.
*/

const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(temp => (temp * 9/5) + 32);

console.log(fahrenheit);
