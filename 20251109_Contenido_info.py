"""
Cómo producir el mínimo común múltiplo con Python:

Para empezar, podemos crear una función personalizada que acepta dos parámetros proporcionados que son almacenados en forma de números enteros. Son comparados por medio de sentencias condicionales y el más grande es almacenado en una variable. Luego por medio de un ciclo while, una sentencia condicional y el operador módulo determinamos si el número con mayor valor es divisible por ambos números y si no, incrementamos el número por uno hasta llegar al número que sí es divisible por ambos números, y retornamos el valor. Después simplemente imprimimos.
"""

def calcula_mcm(x, y):
    if(x > y):
        mayor = x
    else:
        mayor = y

    while(True):
        if(mayor % x == 0) and (mayor % y == 0):
            mcm = mayor
            break
        mayor += 1
    return mcm

numero1 = int(input("Por favor escriba el primer número: "))
numero2 = int(input("Por favor escriba el segundo número: "))

print(f"El mcm de {numero1} y {numero2} es {calcula_mcm(numero1, numero2)}")
