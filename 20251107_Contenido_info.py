"""
Video: youtube.com/watch?v=--6hVe2KOMY

Cómo calcular la cantidad de combinaciones en Python:

Si queremos calcular la cantidad de combinaciones únicas, como con las cartas, podemos lograrlo por medio de dos funciones personalizadas: una para calcular el factorial de un número y otra para producir la cantidad de combinaciones usando la fórmula de combinaciones con factoriales. Después simplemente imprimimos. Sin embargo, Python tiene la ventaja de que se puede producir simplemente con importar el módulo math y utilizar el método comb.
"""

def factorial(num):
    if num == 0 or num == 1:
        return 1;
  
    resultado = 1
    for i in range (2, num + 1):
        resultado *= i
    
    return resultado

def combinaciones(cartas):
    baraja = 52;
    if cartas < 0 or cartas > baraja:
        return 0

    return factorial(baraja) / (factorial(cartas) * factorial(baraja - cartas))

print(combinaciones(2))

"""
import math

cartas = 2
print(math.comb(52, cartas))
"""
