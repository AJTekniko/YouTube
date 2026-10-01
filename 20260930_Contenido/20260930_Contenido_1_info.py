"""
Video: youtube.com/shorts/T6yWTw6ZQ-g

La declaración raise en Python:

Esta declaración, que significa alzar, es utilizada para lanzar una excepción manualmente, como cuando se cumple una condición. Considere el ejemplo que ve en pantalla.
"""

def dividir(num_1, num_2):
    if num_2 == 0:
        raise ZeroDivisionError("No se puede dividir por cero")
    return num_1 / num_2

print(dividir(5,0))
