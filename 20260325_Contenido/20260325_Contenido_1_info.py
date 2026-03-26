"""
Video: youtube.com/shorts/75fy1U4m0Lw

Cómo rebanar cadenas con Python:

Podemos rebanar una cadena de caracteres utilizando la notación de corchetes. Considere los ejemplos que ve en pantalla, almacenamos la cadena en una variable e imprimimos los primeros cinco caracteres usando un cero para el parámetro de inicio, un cinco para el parámetro de fin, y un uno para el parámetro de paso. Cuando un parámetro es omitido usando dos puntos o dejándolo en blanco, se le aplica el valor predeterminado. El valor predeterminado para el inicio es el índice cero, para el fin es el último índice, y para el paso es un uno.
"""

cadena1 = "Hola a todos"

print(f"Los primeros cinco caracteres: {cadena1[0:5:1]}")
print(f"Los últimos cinco caracteres: {cadena1[-5:]}")
