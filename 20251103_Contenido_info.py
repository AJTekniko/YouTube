"""
Video: youtube.com/watch?v=P_lYru-om8o

Cómo producir el máximo común divisor de dos números en Python con el algoritmo euclidiano:

Para empezar, podemos crear una función personalizada que toma dos números como parámetros. En esa función, se sigue la lógica del algoritmo euclidiano para encontrar el máximo común divisor con un ciclo while y lo retorna. Después simplemente imprimimos.
"""

def calcula_mcd(x, y):
    while(y):
        x, y = y, (x % y)
    return x

numero1 = int(input("Por favor escriba el primer número: "))
numero2 = int(input("Por favor escriba el segundo número: "))

print(f"El m.c.d. de {numero1} y {numero2} es {calcula_mcd(numero1, numero2)}")
