/*
Video: youtube.com/shorts/GJIkYJn_Pc0

Cómo eliminar espacios con JavaScript:

Se puede utilizar el método trim(), que en este contexto significa recortar, para eliminar los espacios en ambos extremos de una cadena de caracteres. Si solo queremos remover los espacios del inicio o del final de la cadena, podemos usar trimStart() y trimEnd() respectivamente. Considera el siguiente ejemplo, la frase se ve correcta una vez que los espacios al inicio y al final de la primera variable son eliminados.
*/

let cadena1 = "     Hola     ";
let cadena2 = "a todos 🙂";

console.log(cadena1.trimStart(), cadena2);
console.log(cadena1.trimEnd(), cadena2);
console.log(cadena1.trim(), cadena2);
