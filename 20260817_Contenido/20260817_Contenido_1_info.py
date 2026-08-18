"""
Video: youtube.com/shorts/F1tD5gxLI2M

El método issuperset en Python:

Este método es utilizado con conjuntos para determinar si todos los elementos indicados están presentes en el conjunto al que se aplica el método. Considere el ejemplo que ve en pantalla.
"""

pares = {2, 4, 6, 8, 10}
numeros = {1, 2, 3, 4, 5, 6, 7,
8, 9, 10}

print(pares.issuperset(numeros))
print(numeros.issuperset(pares))
