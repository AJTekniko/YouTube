"""
Cómo evaluar la longitud de cadenas de caracteres en Python:

Para evaluar la longitud de cadenas de caracteres, se puede utlizar la función len. Considera el siguiente ejemplo, creamos una función personalizada que acepta una cadena de caracteres y por medio de sentencias condicionales, evaluamos la condición que le corresponde y retornamos el mensaje apropiado. Después simplemente imprimimos.
"""

def publicacion(mensaje):
    if len(mensaje) <= 40:
        return "publicación corta"
    elif len(mensaje) < 80:
        return "publicación larga"
    else:
        return "publicación inválida"

print(publicacion("Hola mundo"))
