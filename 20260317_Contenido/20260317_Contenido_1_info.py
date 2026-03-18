"""
Video: youtube.com/shorts/49OuYPNXdwA

Cómo retornar varios valores con Python:

Podemos usar una coma para separar los valores que queremos retornar después de la palabra clave return. Y luego imprimimos los datos en la tupla por medio de un ciclo for.
"""

def frase():
    cadena1 = "Hola"
    cadena2 = "¿Cómo están?"

    return cadena1, cadena2

lista = frase()
for i in lista:
    print(i)
