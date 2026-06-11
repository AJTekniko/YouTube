"""
Video: youtube.com/shorts/m84ruZhzgWo

Cómo proporcionarle un valor predeterminado a un parámetro en Python:

Se le puede aplicar un signo igual al parámetro necesario. Considere el ejemplo que ve en pantalla.
"""

def obtener_suma(num_1, num_2=2):
    return num_1 + num_2

resultado = obtener_suma(5) 
print(resultado)