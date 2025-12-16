"""Cómo crear un patrón de estrellas en forma de triángulo rectángulo con Python:

Para empezar, podemos obtener la cantidad de filas que se ocuparan para el patrón de estrellas. Creamos un ciclo for con un rango de uno y la cantidad de filas más uno. Después simplemente imprimimos la estrella multiplicada por la iteración en la que se encuentra."""

filas = int(input("Por favor escriba la cantidad de filas: "))

for i in range(1, filas+1):
    print("*" * i)
