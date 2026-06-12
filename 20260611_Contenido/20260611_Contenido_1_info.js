/*
Video: youtube.com/shorts/PjEVUNYpEWA

Cómo proporcionarle un valor predeterminado a un parámetro en JavaScript:

Se le puede aplicar un signo igual al parámetro necesario. Considere el ejemplo que ve en pantalla.
*/

function obtenerSuma(num1, num2 = 2) {
  return num1 + num2;
}

let resultado = obtenerSuma(5);
console.log(resultado);
