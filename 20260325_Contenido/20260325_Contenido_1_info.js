/*
Video: youtube.com/shorts/VdGeN7wJh2k

Cómo rebanar cadenas con JavaScript:

Podemos rebanar una cadena de caracteres utilizando el método slice, que significa rebanar. Considere los ejemplos que ve en pantalla, almacenamos la cadena en una variable y mandamos los primeros cinco caracteres a la consola usando un cero para el parámetro de inicio y un cinco para el parámetro de fin. Cuando el segundo parámetro es omitido, se sigue hasta el final de la cadena.
*/

let cadena1 = "Hola a todos";

console.log(`Los primeros cinco caracteres: ${cadena1.slice(0,5)}`);
console.log(`Los últimos cinco caracteres: ${cadena1.slice(-5)}`);
