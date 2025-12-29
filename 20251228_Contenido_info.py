"""Cómo contar la cantidad de líneas en un archivo con Python:

Para empezar, podemos asignar el archivo a una variable. Abrimos el archivo con la función open en modo r para que solo se lea. La declaración with indica que el archivo será automáticamente cerrado. Usamos el método readlines() para leer todas las líneas del archivo y retornarlas como una lista de cadena de caracteres. Por medio de la función len(), contamos la cantidad de líneas que tiene el archivo y almacenamos el resultado en una variable. Después simplemente imprimimos."""

ruta_del_archivo = "tu_archivo.txt"

with open(ruta_del_archivo, 'r') as archivo:
    lineas = archivo.readlines()
    conteo = len(lineas)
    print(f"Número total de líneas: {conteo}")
