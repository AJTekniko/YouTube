"""Cómo combinar dos diccionarios en Python:

Para empezar, podemos asignar los diccionarios a su propia variable. Le asignamos el nombre del primer diccionario, una pleca y el nombre del segundo diccionario a una nueva variable. Después simplemente imprimimos."""

diccionario1 = {1: 'a', 2: 'b'}
diccionario2 = {2: 'c', 4: 'd'}
diccionario3 = diccionario1 | diccionario2

print(diccionario3)
