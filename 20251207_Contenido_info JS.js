/*Cómo se imprime una cadena de caracteres en forma de número telefónico con JavaScript:

Para empezar, podemos escribir una plantilla literal con comillas invertidas para interpolar variables y expresiones. Considera el siguiente ejemplo, pasamos la cadena de caracteres por una función personalizada, usamos una plantilla literal para que esté en forma de número telefónico y usamos el método substring para extraer las partes adecuadas de la cadena de caracteres. Después simplemente la mandamos a la consola.*/

function format_number(number){
  return `+${number[0]} (${number.substring(1,4)}) ${number.substring(4,7)}-${number.substring(7)}`
}

console.log(format_number("05552340182"))
