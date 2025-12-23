"""Cómo crear un patrón de estrellas en forma de diamante con Python:

Para empezar, podemos obtener la cantidad de filas que se necesitan para llegar a la mitad del patrón de estrellas. Creamos un ciclo for con un rango de uno y la cantidad de filas. En ese ciclo, primero imprimimos los espacios iniciales y después imprimimos las estrellas necesarias para completar el patrón. Creamos otro ciclo for parecido en lógica pero ahora con un rango que empieza con la máxima cantidad de estrellas y va en cuenta regresiva hasta completar el patrón."""

filas = int(input("Por favor escriba la cantidad de filas que usted quiere: "))
for i in range(1, filas):
    print(' ' * (filas - i), end='')
    print('*' * (2 * i - 1))
for i in range(filas, 0, -1):
    print(' ' * (filas - i), end='')
    print('*' * (2 * i - 1))
