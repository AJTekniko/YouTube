/*Cómo se convierte un número decimal en un número binario usando JavaScript:

Para empezar, podemos almacenar el número decimal en una variable. Usamos el método toString() para convertirlo en un número binario. Después simplemente lo mandamos a la consola.*/

let decimal = 5;
let binario = Number(decimal).toString(2);
console.log(binario);
