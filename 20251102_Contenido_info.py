"""Cómo producir el máximo común divisor de dos números en Python:

Para empezar, podemos crear una función personalizada que toma dos números como parámetros. En esa función se determina el número que es más pequeño entre los dos usando una sentencia condicional, se crea una variable que se usa para almacenar el máximo común divisor, el cual se determina con un ciclo for, y termina por retornar el máximo común divisor. Los números que se usarán en la función personalizada se obtiene por medio de la función input en la forma de enteros y son almacenados en dos variables. Después simplemente imprimimos."""

def calcula_mcd(x, y):
    pequeno = 0
    if x < y:
        pequeno = x
    else:
        pequeno = y

    mcd = 0
    for i in range(1, pequeno + 1):
        if x % i == 0 and y % i == 0:
            mcd = i

    return mcd

numero1 = int(input("Por favor escriba el primer número: "))
numero2 = int(input("Por favor escriba el segundo número: "))

print(f"El m.c.d. de {numero1} y {numero2} es: {calcula_mcd(numero1, numero2)}")
