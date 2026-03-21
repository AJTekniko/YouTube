/*
Video: youtube.com/shorts/RNuWWaF_5Bw

Cómo calcular la cantidad de dígitos en un número con JavaScript:

Eso se puede determinar convirtiendo el número en una cadena de caracteres, y usando el método length, que significa longitud. También se puede utilizar un ciclo while para calcular los dígitos. Considera el ejemplo que ve en pantalla, creamos una variable para almacenar el número original y una variable para almacenar la cuenta. Mientras el número original no iguale cero, el ciclo divide el número original por 10 usando división entera por medio de Math.floor, y le suma uno a la cuenta actual. Después mandamos el resultado a la consola.
*/

let numero = 12345;
let cuenta = numero.toString().length;
console.log(cuenta);


cuenta = 0;
while (numero != 0) {
    numero = Math.floor(numero / 10);
    cuenta += 1;
}

console.log(cuenta);
