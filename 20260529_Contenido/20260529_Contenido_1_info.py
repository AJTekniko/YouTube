"""
Video: youtube.com/shorts/6n4_v5CJGls

Los métodos maketrans y translate en Python:

El método maketrans() es utilizado para crear una tabla de mapeo. Se utiliza frecuentemente con el método translate() para retornar la traducción. Considere los ejemplos que ve en pantalla.
"""

tabla = str.maketrans('abc', '123')
print(tabla)

resultado = 'abcabc'.translate(tabla)
print(resultado)
