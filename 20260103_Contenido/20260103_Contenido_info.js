/*Cómo se encuentra la suma de unos números proporcionados en JavaScript:

Podemos usar la función prompt para obtener la cantidad de números que serán sumados y asignarla a una variable. Para este ejemplo, mandamos la solicitud de texto y la contestación a la consola para facilitar la comprensión. Declaramos otra variable para que almacene la suma. Usamos un ciclo for para obtener los números que se van a sumar y se los asignamos a otra variable. Le agregamos cada número a la suma. Después simplemente mandamos la suma a la consola.*/

let cantidad = Number(prompt("Por favor proporcione la cantidad de números que quiere sumar: "));
console.log("Por favor proporcione la cantidad de números que quiere sumar: ");
console.log(cantidad);

let suma = 0;

for (let i = 0; i < cantidad; i++){
  let numero = Number(prompt("Por favor proporcione un número: "));
  console.log("Por favor proporcione un número: ");
  console.log(numero);
  suma += numero;
}

console.log("La suma de todos los números es:", suma);
