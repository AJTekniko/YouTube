/*Cómo crear un patrón de estrellas en forma de diamante con JavaScript:

Para empezar, podemos obtener la cantidad de filas que se necesitan para llegar a la mitad del patrón de estrellas. Para este ejemplo, mandamos la solicitud de texto y la contestación a la consola para facilitar la comprensión. Creamos una variable para almacenar el patrón de estrellas. Creamos un ciclo for con un rango de uno y la cantidad de filas. En cada iteración de ese ciclo, almacenamos los espacios iniciales y después las estrellas. Creamos otro ciclo for parecido en lógica pero ahora con un rango que empieza con la máxima cantidad de estrellas y va en cuenta regresiva hasta completar el patrón. Una vez que el ciclo termina, mandamos la variable con el patrón a la consola.*/

let filas = Number(prompt("Por favor escriba la cantidad de filas que usted quiere: "));

console.log("Por favor escriba la cantidad de filas que usted quiere: ")
console.log(filas)

let patron = "";
for(let i = 1; i < filas; i++){
  patron += ' '.repeat(filas - i)
  patron += '*'.repeat(2 * i - 1) + "\n"
}
for(i = filas; i > 0; i--){
  patron += ' '.repeat(filas - i)
  patron += '*'.repeat(2 * i - 1) + "\n"
}
console.log(patron)
