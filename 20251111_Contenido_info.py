"""
Video: https://www.youtube.com/watch?v=6cZwKKVG-Vk

Cómo producir la cantidad de vocales y consonantes de una frase con Python:

Para retornar una lista que contiene la cantidad de vocales y consonantes de una cadena de caracteres, podemos crear una función personalizada que acepta una cadena como parámetro. Creamos una variable para almacenar el total en una lista. Creamos dos variables adicionales: una para obtener la cantidad de vocales y la otra para los consonantes. Agregamos esas dos ultimas variables a la variable con la lista y la retornamos. Después simplemente imprimimos.
"""

def cuenta(s):
    total = []
    vocales = len([c for c in s.lower() if c in 'aeiou'])
    consonantes = len([c for c in s.lower() if c in 'bcdfghjklmnpqrstvwxyz'])
    total.append(vocales)
    total.append(consonantes)
    return total

print(cuenta("Hola mundo"))
