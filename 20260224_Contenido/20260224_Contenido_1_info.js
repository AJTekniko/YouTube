/*
Video: youtube.com/shorts/tg956z5ewHw

Cómo se encuentra el factorial de un número con JavaScript:

El factorial de un número se puede encontrar utilizando el ciclo for. Considera el siguiente ejemplo, obtenemos el número proporcionado en forma de entero y lo almacenamos en una variable. Le asignamos el valor de uno a otra variable que será utilizada para ser multiplicada con el número proporcionado incrementalmente en un ciclo for, una vez que es determinado que el número proporcionado no es un cero. Después del ciclo for, mandamos el resultado a la consola.
*/

let numero = Number(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);

let factorial = 1;

if(numero == 0) {
  console.log(`El factorial de ${numero} es ${factorial}`);
} else {
  for (let i = 1; i < numero + 1; i++) {
    factorial *= i;
  }
  console.log(`El factorial de ${numero} es ${factorial}`);
}
