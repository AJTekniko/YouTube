/*Cómo se encuentra el valor posicional de una letra con JavaScript:

Podríamos usar el método charCodeAt(). Por ejemplo, si queremos saber el valor posicional de la letra "s", usamos el método charCodeAt() para obtener el valor del caracter en el índice 0 de la cadena y le restamos el valor que tiene la letra "a". Terminamos por agregarle uno y mandamos el resultado a la consola.*/

console.log("s".charCodeAt(0) - "a".charCodeAt(0) + 1);
