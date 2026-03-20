"""
Video: youtube.com/shorts/_y9qVSJ99sw

Cómo invertir un número con Python:

Se puede invertir un número convirtiéndolo en una cadena de caracteres, y rebanándolo con negativo uno como el tercer parámetro. También se puede utilizar un ciclo while para invertir el número. Considera el ejemplo que ve en pantalla, creamos una variable para almacenar el número original y una variable para almacenar el número invertido. Mientras el número original no iguale cero, el ciclo divide el número original por módulo 10 para obtener el último dígito y lo almacena en una variable, multiplica el número invertido actual por 10 y le suma el dígito que obtuvo en la operación anterior, y divide el número original por 10 usando división entera. Después imprimimos el resultado.
"""

numero = 123
print(str(numero)[::-1])


numero_invertido = 0

while numero != 0:
    digito = numero % 10
    numero_invertido = numero_invertido * 10 + digito
    numero //= 10

print(numero_invertido)
