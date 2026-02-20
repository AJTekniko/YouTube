/*
Video: youtube.com/shorts/4f9E3MYbrZA

Cómo saber si un número es un número primo con JavaScript:

Considera el siguiente ejemplo, obtenemos un número proporcionado y lo almacenamos en una variable. Primero descartamos el número uno y cualquier número menor que uno, ya que no son considerados números primos. Creamos una sentencia condicional que indica que el número dos es un número primo. Creamos una sentencia condicional que descarta los números pares. Creamos una sentencia condicional para el resto de los números mayores que determina si el numero proporcionado dividido por módulo en forma de cualquier número en el ciclo for iguala 0. Si sí, eso indica que no es un número primo, ya que uno y el número proporcionado no son sus únicos divisores. De otro modo, sí es un número primo. En el momento que cumple una de las condiciones, mandamos el resultado a la consola.
*/

let numero = Number(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);

if (numero <= 1) {
  console.log(`${numero} no es un número primo`);
} else if (numero == 2) {
  console.log(`${numero} es un número primo`);
} else if (numero % 2 == 0) {
  console.log(`${numero} no es un número primo`);
} else if (numero > 1) {
  for (let i = 2;  i < numero; i++) {
    if (numero % i == 0) {
      console.log(`${numero} no es un número primo`);
    } else {
        console.log(`${numero} es un número primo`);
    }
  }
}
