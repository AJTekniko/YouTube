"""
Cómo remover acentos en Python:

Para empezar, importamos el módulo unicodedate. Creamos una función personalizada que acepta una cadena de caracteres que contiene acentos como parámetro. Usamos el método normalize con "NFKD" y la cadena con acentos como sus dos argumentos. Asignamos el resultado a una variable. Filtramos los caracteres que combinan marcas diacríticas y retornamos el resultado. Después simplemente imprimimos.
"""

import unicodedata

def remover_acentos(cadena):
    forma_nfkd = unicodedata.normalize('NFKD', cadena)
    return "".join([c for c in forma_nfkd if not unicodedata.combining(c)])

print(remover_acentos("Crème Brûlée"))
