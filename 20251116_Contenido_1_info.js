/*
Video: youtube.com/watch?v=7rU-rEwqMx4

Cómo producir los factores de un número en JavaScript:

Para empezar, podemos obtener un número proporcionado por medio de la función prompt y almacenarlo como número en una variable. Usamos un ciclo for para obtener los factores de ese número utilizando el operador módulo. Después simplemente los mandamos a la consola.
*/

numero = Number(prompt("Por favor escriba un número para producir sus factores: "))

for(let i = 1; i <= numero / 2; i++) {
    if(numero % i ==0) {
        console.log(i)
    }
}
