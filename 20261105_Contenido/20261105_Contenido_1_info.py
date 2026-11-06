"""
Video: youtube.com/shorts/iU46GcI6-XM

Creador de matrices en Python:

Para este reto, queremos producir un creador de matrices que acepta una cantidad de filas y columnas, y que retorna una matriz llena de ceros del tamaño adecuado. Para lograr esto, podemos utilizar listas por comprensión anidadas. Considere el ejemplo que ve en pantalla.
"""

def crear_matriz(filas, columnas):
    matriz = [[0 for _ in range(columnas)] for _ in range(filas)]
    return matriz

print(crear_matriz(2, 3))
