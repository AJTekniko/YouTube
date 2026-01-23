/*
Cómo evaluar la longitud de cadenas de caracteres en JavaScript:

Para evaluar la longitud de cadenas de caracteres, se puede utilizar la propiedad length. Considera el siguiente ejemplo. Creamos una función personalizada que acepta una cadena de caracteres y por medio de sentencias condicionales, evaluamos la condición que le corresponde y retornamos el mensaje apropiado. Después simplemente lo mandamos a la consola.
*/

function publicacion(mensaje){
    if (mensaje.length <= 40) {
        return "publicación corta";
    } else if (mensaje.length < 80) {
        return "publicación larga";
    } else {
        return "publicación inválida";
    }
}

console.log(publicacion("Hola mundo"))
