/*Cómo crear un patrón de estrellas en forma de triángulo rectángulo con JavaScript:

Para empezar, podemos obtener la cantidad de filas que se ocupan para el patrón de estrellas. Para este ejemplo, mandamos la solicitud de texto y la contestación a la consola para facilitar la comprensión. Creamos un ciclo for con un rango de uno y la cantidad de filas más uno. Despues simplemente tomamos el resultado de multiplicar una estrella por la iteración en la que se encuentra y lo mandamos a la consola.*/

const filas = Number(prompt("Por favor escriba la cantidad de filas: "));

console.log("Por favor escriba la cantidad de filas: ")
console.log(filas)

for (let i = 1; i < filas + 1; i++){
    console.log("*".repeat(i));
}
