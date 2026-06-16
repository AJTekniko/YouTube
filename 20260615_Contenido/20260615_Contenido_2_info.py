"""
Video: youtube.com/shorts/OJWkUvkVKEI

El ámbito global en Python:

Se refiere a la accesibilidad que tienen las variables que no son declaradas dentro de una función o clase. Considere el ejemplo que ve en pantalla.
"""

propina = 0.20 

def obtener_total(subtotal):
    total = subtotal + (subtotal * propina)
    return total

print(obtener_total(100))
