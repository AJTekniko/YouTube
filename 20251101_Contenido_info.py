"""
Video: youtube.com/shorts/t50ayeTQK6w

Cómo determinar cuales números de una lista son divisibles por otro número en Python:

Se puede determinar por medio de la función filter. Considera el siguiente ejemplo, obtenemos el número y lo almacenamos en una variable. Lo comparamos con los números en la lista en una función temporaria o lambda y poblamos una nueva variable con la función filter. Después simplemente imprimimos.
"""

la_lista = [12, 65 , 54, 39, 102, 339, 221]
numero = int(input("Por favor escriba un número: "))

resultado = filter(lambda x: x % numero == 0, la_lista)
print(f"Los números divisibles por {numero}:", list(resultado))
