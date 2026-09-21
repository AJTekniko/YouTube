"""
Video: youtube.com/shorts/TMvmMXxXQzQ

La declaración try...except en Python:

Esta declaración, que significa intentar y excepción, es utilizada para tratar con excepciones. Primero intenta ejecutar el código dentro del bloque try. Si ocurre un error, ejecuta el código dentro del otro bloque. Considere el ejemplo que ve en pantalla.
"""

try:
    print(10 / 0)
except ZeroDivisionError:
    print("No puedes dividir por cero")
