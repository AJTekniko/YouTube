"""
Video: youtube.com/shorts/TDFposkmLQE

Cómo calcular la cantidad de dígitos en un número con Python:

Eso se puede determinar convirtiendo el número en una cadena de caracteres, y usando la función len(), que es derivado de length que significa longitud. También se puede utilizar un ciclo while para calcular los dígitos. Considera el ejemplo que ve en pantalla, creamos una variable para almacenar el número original y una variable para almacenar la cuenta. Mientras el número original no iguale cero, el ciclo divide el número original por 10 usando división entera, y le suma uno a la cuenta actual. Después imprimimos el resultado.
"""

numero = 12345
cuenta = len(str(numero))
print(cuenta)


numero = 12345
cuenta = 0
while numero != 0:
    numero //= 10
    cuenta += 1

print(cuenta)
