/*Cómo intercambiar dos variables en JavaScript:

El intercambio de valores sin una variable temporaria se puede lograr asignando las variables a la variable opuesta de la siguiente manera. Después de hacer el intercambio, mandamos el resultado a la consola.*/

let x = 10;
let y = 20;
console.log(`El valor de "x" es ${x} y el valor de "y" es ${y} antes del intercambio.\n`);

[x, y] = [y, x];
console.log(`El valor de "x" es ${x} y el valor de "y" es ${y} después del intercambio.`);
