"""
Video: youtube.com/shorts/abMhcTPXuNo

La función filter en Python:

Es una función que filtra los elementos de un iterable respecto a una condición. Considere el ejemplo que ve en pantalla.
"""

nums = [0, 1, 2, 3, 4, 5]

def es_par(num):
    return num % 2 == 0

pares = list(filter(es_par, nums))
print(pares)
