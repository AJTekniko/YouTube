"""Cómo aplanar una lista anidada en Python:

Para empezar, podemos crear una lista anidada. Por medio de ciclos, extraemos las listas internas y sus números, y almacenamos el resultado en otra variable. Después simplemente imprimimos."""

lista1 = [[1], [2, 3], [4, 5, 6], [7, 8, 9, 10]]
nueva_lista = [num for interna in lista1 for num in interna]

print(nueva_lista)
