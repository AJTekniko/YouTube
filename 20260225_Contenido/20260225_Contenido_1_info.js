/*
Video: youtube.com/shorts/BSq0QTfZ_Eo

Cómo producir una tabla de multiplicar con JavaScript:

Considera el siguiente ejemplo, obtenemos el número proporcionado en forma de número y lo almacenamos en una variable. Utilizamos un ciclo for con el rango necesario. Después simplemente imprimimos el resultado en el formato deseado.
*/

let numero = Number(prompt("Por favor escriba un número: "));
console.log("Por favor escriba un número: ");
console.log(numero);

console.log("Tabla de Multiplicar: ");
for (let i = 1; i < 11; i++) {
  console.log(`${numero} * ${i} = ${numero * i}`);
}
