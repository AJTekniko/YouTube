/*
Video: youtube.com/shorts/JeJIYyTqc-4

Cómo determinar si un número es número narcisista con JavaScript:

Podemos determinar si un número es igual que el valor de la suma de sus dígitos elevados a la potencia del número de cifras que tiene de la siguiente manera: obtenemos un número y lo almacenamos en una variable. Almacenamos el valor de su longitud en otra variable. Asignamos una variable al valor temporario del número que fue proporcionado. Asignamos una variable que tendrá la suma total en la operación. Creamos un ciclo while para producir la suma de los dígitos elevados a la potencia de la longitud. En este ejemplo, determinamos que 153 es igual que 1*1*1 + 5*5*5 + 3*3*3. Y para terminar, usamos una sentencia condicional para determinar el mensaje que será mandado a la consola.
*/

let numero = prompt("Por favor escriba un número: ");
let longitud = String(numero).length;

let temp = numero;
let suma = 0;
while (temp > 0){
  digito = temp % 10;
  suma += digito ** longitud;
  temp = Math.floor(temp / 10);
}

console.log(`El número es ${numero} y la suma es ${suma}`);
if (suma == numero) {
  console.log("Es número narcisista");
} else {
  console.log("No es número narcisista");
}
