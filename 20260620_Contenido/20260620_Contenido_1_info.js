/*
Video: youtube.com/shorts/uKL2vB3z1uk

RangeError en JavaScript:

Este error ocurre cuando un valor o argumento está fuera del rango permitido, como en el caso de la longitud de matrices, la modificación de cadenas, la modificación de números, y ciclos infinítos de recursión.
*/

//Ejemplo 1
let matriz1 = new Array(-1); 

//Ejemplo 2
"abc".repeat(-1);

//Ejemplo 3
let num = 2.3456;
num.toFixed(-1);

//Ejemplo 4
function cuenta(x) {
  return cuenta(x + 1);
}

console.log(cuenta(5));
