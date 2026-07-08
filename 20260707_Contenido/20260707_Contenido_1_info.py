"""
Video: youtube.com/shorts/iz4zNnNkkHg

La función zip en Python:

Esta función es utilizada para obtener los elementos de varios iterables y generar tuplas con sus elementos. Considere el ejemplo que ve en pantalla.
"""

nums = [1, 2, 3]
letras = ["a", "b", "c"]

for num, letra in zip(nums, letras):
    print(f'Letra n.º {num}: {letra}')
