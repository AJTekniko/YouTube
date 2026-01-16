/*
Video: https://www.youtube.com/shorts/WVrWPOhCJaE

Cómo se imprime una cadena de caracteres en forma de número telefónico con JavaScript:

Podemos pasar la cadena de caracteres por una función personalizada en la cual retornamos la cadena en el formato correcto por medio de plantillas literales y el método slice(). Después simplemente mandamos el resultado a la consola.
*/

function format_number(number){

    return `+${number[0]} (${number.slice(1,4)}) ${number.slice(4,7)}-${number.slice(7)}`
}

console.log(format_number("05552340182"))
