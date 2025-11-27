"""Cómo crear un cifrado césar con Python:

Para empezar, podemos importar el módulo string. Creamos una función personalizada con tres parámetros: el texto que queremos codificar, el cambio que le vamos a aplicar y un valor booleano para distinguir entre codificación y decodificación. El tercer parámetro lo podemos configurar para que esté en modo de codificación por defecto. Creamos una sentencia condicional por si el cambio proporcionado no es un número entero. Por medio de una variable, nos aseguramos que el valor del cambio no pase de 25 con el operador módulo. Obtenemos el abecedario con el constante ascii_letters del módulo string y lo almacenamos en una variable. Usamos una sentencia condicional para el tercer parámetro en caso de que la función sea utilizada para decodificar. Rebanamos el abecedario para transformarlo y lo asignamos a una nueva variable. Usamos el método maketrans para retornar una tabla de traducción que es usada por el método translate, que en este caso produce los valores del abecedario con minúsculas y mayúsculas conectados a sus valores codificados. Retornamos el texto codificado. Creamos una función personalizada para facilitar la decodificación, la cual es opcional. Después simplemente imprimimos."""

import string

def cesar(texto, cambio, codificar=True):

    if not isinstance(cambio, int):
        return 'Cambio necesita ser un número entero.'

    cambio %= 25

    abecedario = string.ascii_letters[0:26]

    if not codificar:
        cambio = - cambio
    
    abecedario_cambiado = abecedario[cambio:] + abecedario[:cambio]
    tabla_traduccion = str.maketrans(abecedario + abecedario.upper(), abecedario_cambiado + abecedario_cambiado.upper())
    texto_codificado = texto.translate(tabla_traduccion)
    return texto_codificado

def decodificar(texto, cambio):
    return cesar(texto, cambio, codificar=False)

print(cesar("AJTekniko", 13))
