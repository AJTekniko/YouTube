"""
Video: youtube.com/shorts/VrrnxzBp_nw

La expresión lambda en Python:

Esta expresión es utilizada para crear una función anónima. Se usa frecuentemente como argumento de otra función. Considere el ejemplo que ve en pantalla.
"""

nums = [1, 2, 3, 4, 5]

nums_impares = list(filter(lambda x: x % 2 != 0, nums))
print(nums_impares)
