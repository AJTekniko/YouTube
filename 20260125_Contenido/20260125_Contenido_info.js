/*
Cómo saber si un número es par o impar con JavaScript:

Para saber si un número es par o impar, utilizamos el operador módulo. Considera el siguiente ejemplo, obtenemos el número que es proporcionado y lo dividimos por módulo 2 en una sentencia condicional. Después simplemente mandamos el resultado a la consola.
*/

let numero = Number(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);

if (numero % 2 == 0){
    console.log("El número es par.");
} else {
    console.log("El número es impar.");
}
