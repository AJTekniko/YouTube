/*Cómo saber si una palabra es un palíndromo con JavaScript:

Para empezar, podemos tomar una palabra y aplicarle tres métodos: split, reverse y join. Split separa los caracteres de la palabra y produce una matriz. Reverse invierte la matriz. Join junta los caracteres de la matriz en una cadena de caracteres. Comparamos la palabra con su versión reversa por medio de sentencias condicionales. Usamos el método toLowerCase para tratar con las letras mayúsculas que puede tener la palabra. Después simplemente mandamos el mensaje adecuado a la consola.*/

let palabra = "Reconocer";

let comparacion = palabra.split("").reverse().join("");

if (palabra.toLowerCase() == comparacion.toLowerCase()){
    console.log("La palabra es un palíndromo")
} else{
    console.log("La palabra no es un palíndromo")
}
