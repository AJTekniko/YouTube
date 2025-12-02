/*Cómo organizar texto alfabéticamente con JavaScript:

Para empezar, le asignamos la frase a una variable. Le aplicamos el método toLowerCase, split y sort a esa variable. Asignamos el resultado a otra variable. Creamos una última variable para almacenar el resultado del método join a la variable anterior con espacios. Después simplemente lo mandamos a la consola.*/

let frase = "Hola a todos";

let palabras = frase.toLowerCase().split(" ").sort();

let fraseOrdenada = palabras.join(" ")

console.log(fraseOrdenada);
