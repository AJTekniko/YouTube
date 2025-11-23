"""
Cómo crear un juego de piedra papel o tijeras en Python:

Para empezar, podemos importar el módulo random. Asignamos emojis a tres variables para representar piedra, papel y tijeras. Creamos una lista para contener las tres variables. Obtenemos la jugada, la asignamos a una variable y la imprimimos. Creamos una variable para almacenar la jugada de la computadora basada en un valor aleatorio e imprimimos para facilitar la comprehensión. Creamos una serie de sentencias condicionales para comparar el valor del usuario o de la usuaria y el valor de la computadora siguiendo la lógica del juego. Después simplemente imprimimos el resultado.
"""

import random

piedra = "💎"
papel = "📰"
tijeras = "✂"

imagenes = [piedra, papel, tijeras]

visitante = int(input("""¿Usted qué elige?
Escriba 0 para piedra, 1 para papel
o 2 para tijeras."""))

if visitante >= 0 and visitante <= 2:
    print(imagenes[visitante])

computadora = random.randint(0, 2)
print(imagenes[computadora])

if visitante >= 3 or visitante < 0:
    print("""Usted no eligió una opción válida.
Juego terminado""")
elif visitante == 0 and computadora == 2:
    print("¡Usted ganó!")
elif visitante == 2 and computadora == 0:
    print("¡Usted perdió!")
elif visitante < computadora:
    print("¡Usted perdió!")
elif visitante > computadora:
    print("¡Usted ganó!")
elif visitante == computadora:
    print("Es un empate")
