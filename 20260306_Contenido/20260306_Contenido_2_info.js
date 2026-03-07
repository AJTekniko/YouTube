/*
Video: youtube.com/shorts/_Bwb_KBJGyQ

Cómo producir el máximo común divisor de dos números con JavaScript:

Para empezar, podemos crear una función personalizada que toma dos números. En esa función se determina el número que es más pequeño entre los dos usando una sentencia condicional, se crea una variable que se usa para almacenar el máximo común divisor, el cual se determina con un ciclo for, y termina por retornar el máximo común divisor. Los números que se usan en la función personalizada se obtienen por medio de la función prompt y son almacenados en dos variables. Después mandamos el resultado a la consola.
*/

function calculaMcd(x, y) {
  let pequeno = 0;
  if (x < y) {
    pequeno = x;
  } else {
    pequeno = y;
  }

  let mcd = 0;
  for (let i = 1; i < pequeno + 1; i++) {
    if (x % i == 0 && y % i == 0) {
      mcd = i;
    }
  }
  return mcd;
}

let numero1 = parseInt(prompt("Por favor escriba el primer número: "));
console.log("Por favor escriba el primer número: ");
console.log(numero1);
let numero2 = parseInt(prompt("Por favor escriba el segundo número: "));
console.log("Por favor escriba el segundo número: ");
console.log(numero2);

console.log(`El m.c.d. de ${numero1} y ${numero2} es: ${calculaMcd(numero1, numero2)}`);
