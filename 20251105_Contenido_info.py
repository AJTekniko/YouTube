"""
Video: youtube.com/watch?v=IySyW49o17Y

Cómo crear una matriz en Python:

Para empezar, podemos crear una función personalizada que acepta dos parámetros: el número de filas y el número de columnas. Creamos un ciclo for con el número de columnas como rango en la forma de una lista adentro de otra lista que contiene un ciclo for con el número de filas como rango y lo asignamos a una variable. Retornamos la matriz. Después simplemente imprimimos.
"""

def crea_matriz(filas, columnas):
    matriz = [[0 for columna in range(columnas)] for fila in range(filas)] 
    return matriz

print(crea_matriz(2, 3))
