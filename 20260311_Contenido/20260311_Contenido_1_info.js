/*
Video: youtube.com/shorts/VBXVOWE7las

Cómo producir el máximo común divisor de dos números en JavaScript con el algoritmo euclidiano:

Para empezar, podemos crear una función personalizada que acepta dos números. En esa función, se sigue la lógica del algoritmo euclidiano para encontrar el máximo común divisor con un ciclo while y lo retorna. Después mandamos el resultado a la consola.
*/

function calculaMcd(x, y) {
  while(y) {
    [x, y] = [y, (x % y)];
  }
  return x;
}

let numero1 = parseInt(prompt("Por favor escriba el primer número: "));
console.log("Por favor escriba el primer número: ");
console.log(numero1);
let numero2 = parseInt(prompt("Por favor escriba el segundo número: "));
console.log("Por favor escriba el segundo número: ");
console.log(numero2);

console.log(`El m.c.d. de ${numero1} y ${numero2} es ${calculaMcd(numero1, numero2)}`)
