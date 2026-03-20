/*
Video: youtube.com/shorts/6v3ONKRjyDY

Cómo invertir un número con JavaScript:

Se puede invertir un número convirtiéndolo en una cadena de caracteres, y aplicándole el método split(), que significa dividir, el método reverse(), que significa invertir, y el método join(), que significa unir. También se puede utilizar un ciclo while para invertir el número. Considera el ejemplo que ve en pantalla, creamos una variable para almacenar el número original y una variable para almacenar el número invertido. Mientras el número original no iguale cero, el ciclo divide el número original por módulo 10 para obtener el último dígito y lo almacena en una variable, multiplica el número invertido actual por 10 y le suma el dígito que obtuvo en la operación anterior, y divide el número original por 10 usando división entera con el método Math.floor(). Después mandamos el resultado a la consola.
*/

let numero = String(123);
console.log(numero.split('').reverse().join(''));


let numeroInvertido = 0;

while (numero != 0) {
  let digito = numero % 10;
  numeroInvertido = numeroInvertido * 10 + digito;
  numero = Math.floor(numero / 10);
}

console.log(numeroInvertido)
