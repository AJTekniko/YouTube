"""Cómo crear un patrón de estrellas en forma de pirámide con Python:

Para empezar, podemos obtener la cantidad de filas que se ocupan para el patrón de estrellas. Creamos un ciclo for con un rango de uno y la cantidad de filas más uno. En ese ciclo, primero imprimimos los espacios iniciales y después imprimimos las estrellas necesarias para completar el patrón."""

filas = int(input("Por favor escriba la cantidad de filas que usted quiere: "))
for i in range(1, filas + 1):
    print(' ' * (filas - i), end='')
    print('*' * (2 * i - 1))
