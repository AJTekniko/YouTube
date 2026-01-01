"""Cómo retornar una lista que contiene un término en específico con Python:

Para empezar, podemos crear una función personalizada que acepta dos parámetros: la lista en la que se buscará el término, y el término proporcionado. Creamos una variable para almacenar los resultados. Por medio de un ciclo for, comparamos el término con el contenido de la lista sin distinguir entre mayúsculas y minúsculas, y vamos agregando cada resultado en la variable que creamos al principio y retornamos el resultado final. Después simplemente imprimimos."""

def busqueda(imagen, termino):
    resultado = []
    for caso in imagen:
        if termino.lower() in caso.lower():
            resultado.append(caso)
    return resultado

print(busqueda(["Sunset.jpg", "Beach.png", "sunflower.jpeg"], "sun"))
