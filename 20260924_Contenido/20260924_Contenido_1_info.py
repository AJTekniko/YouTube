"""
Video: youtube.com/shorts/f40gUvFUwdo

Las declaraciones else y finally en Python:

Estas declaraciones, que significan "de otro modo" y "finalmente", son utilizadas para extender la declaración try...except. Se ejecuta el código dentro del bloque else si no ocurre ninguna excepción. El código en el bloque finally siempre se ejecuta. Considere el ejemplo que ve en pantalla.
"""

try:
    resultado = 10 / 4
except ZeroDivisionError:
    print("No puedes dividir por cero")
else:
    print(f"El resultado: {resultado}")
finally:
    print("Fin")
