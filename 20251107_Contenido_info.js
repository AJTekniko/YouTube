/*
Video: youtube.com/watch?v=IGRD1-yijIY

Cómo calcular la cantidad de combinaciones en JavaScript:

Si queremos calcular la cantidad de combinaciones únicas, como con las cartas, podemos lograrlo por medio de dos funciones personalizadas: una para calcular el factorial de un número y otra para producir la cantidad de combinaciones usando la fórmula de combinaciones con factoriales. Después simplemente lo mandamos a la consola.
*/

function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  let resultado = 1;
  for (let i = 2; i <= num; i++) {
    resultado *= i;
  }
  return resultado;
}

function combinaciones(cartas) {
  const baraja = 52;
  if (cartas < 0 || cartas > baraja) {
    return 0;
  }
  return factorial(baraja) / (factorial(cartas) * factorial(baraja - cartas));
}

console.log(combinaciones(2))
