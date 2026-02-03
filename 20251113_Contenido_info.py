"""
Cómo rotar los contenidos de una lista en Python:

Para empezar, podemos crear una función personalizada que acepta dos parámetros: la lista y la cantidad de movimiento. Usamos el operador módulo para tratar con rotaciones más grandes que la lista. Retornamos el final y el principio de la lista concatenados. Después simplemente imprimimos.
"""

def rotar_lista(lista, cambio):
    cambio %= len(lista)
    return lista[cambio:] + lista[:cambio]

print(rotar_lista([1, 2, 3], 1))
