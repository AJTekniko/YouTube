/*
Video: youtube.com/shorts/OmlW8Z0jBAw

Cómo sustituir valores en una cadena de caracteres con JavaScript:

Considera el siguiente ejemplo, si evaluamos una hebra de ADN y producimos la hebra complementaria siguiendo las siguientes reglas:
•El ADN consiste de las letras "A", "C", "G", y "T".
•Las letras "A" y "T" se complementan.
•Las letras "C" y "G" se complementan.

¿Cómo le haríamos para que "ACGT" retorne "TGCA"?

Podemos empezar por crear una función personalizada. Creamos una cadena de caracteres que tendrá cada letra sustituida. Usamos un ciclo for que empieza en cero y termina respecto a la longitud de la cadena de caracteres. Una vez que termina el ciclo, la función retorna la nueva cadena. Después mandamos el resultado a la consola.
*/

function adn(hebra) {
  let cadena_nueva = "";
  for (let i = 0; i < hebra.length; i++) {
    if (hebra[i] == "A") {
      cadena_nueva += "T";
    } else if (hebra[i] == "T") {
      cadena_nueva += "A";
    } else if (hebra[i] == "C") {
      cadena_nueva += "G";
    } else if (hebra[i] == "G") {
      cadena_nueva += "C";
    }
  }
  return cadena_nueva;
}

console.log(adn("ACGT"));
