/*
Cómo remover acentos en JavaScript:

Para empezar, creamos una función personalizada que acepta una cadena de caracteres que contiene acentos como parámetro. Usamos el método normalize con "NFD" como argumento seguido por el método replace con los argumentos que ve en pantalla para filtrar los caracteres que combinan marcas diacríticas, y retornamos el resultado. Después simplemente lo mandamos a la consola.
*/

function sin_acentos(cadena) {
    return cadena.normalize("NFD").replace(/[\u0300-\u036f]/g, "")
}

console.log(sin_acentos("Crème Brûlée"));
