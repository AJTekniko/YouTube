"""
Video: youtube.com/shorts/AisPInWHg2c

El método update en Python:

Este método actualiza los pares clave-valor del diccionario al que se le aplica; modifica los valores de las claves que son iguales y agrega los demás pares como nuevos. Considere el ejemplo que ve en pantalla.
"""

letras = dict([(1, "a"),
(2, "b"), (3, "c")])

letras.update({ 1: "A",
4: "d" })

print(letras)
