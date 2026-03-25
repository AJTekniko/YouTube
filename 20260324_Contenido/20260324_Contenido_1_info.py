"""
Video: youtube.com/shorts/1n5HHIuKN34

Cómo remover elementos duplicados de una lista con Python:

Podemos utilizar la función set() para crear un conjunto y luego revertirlo, el cual remueve los elementos duplicados. Después imprimimos el resultado.
"""

lista1 = [1, 2, 2, 3, 4, 3, 5]
print(list(set(lista1)))
