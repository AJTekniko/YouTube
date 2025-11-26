"""El Ahorcado en Python:


  _______
 |/      |
 |      (_)
 |      \|/
 |       |
 |      / \ 
 |
_|___
Para crear este juego, podemos empezar con importar el módulo random. Por medio de una lista podemos almacenar los dibujos que vamos a utilizar en el juego. El dibujo terminado se puede encontrar en la descripción del video. Creamos otra lista para almacenar las palabras que va ha contener el juego. Creamos una variable para la cantidad de vidas en el juego. Seleccionamos una palabra al azar de la lista con el método choice y lo asignamos a una variable. Imprimimos el dibujo que corresponde con la cantidad de vidas que uno tiene al comienzo. Creamos una cadena de caracteres que se llena con guiones por medio de un ciclo for. Creamos una lista para las letras correctas. Creamos una variable con un valor booleano que es utilizado para mantener el juego operando mientras todavía hay vidas. Adentro de un ciclo while, obtenemos la letra adivinada y la comparamos a la palabra seleccionada. Si la letra existe en la palabra, reemplazamos los guiones apropiados y si después de eso ya no hay más guiones, se produce un mensaje apropiado y termina el juego. Si no existe la letra en la palabra, se remueve una vida y si llegan las vidas a cero, se produce un mensaje al respecto y termina el juego."""

import random
etapas = ["""
  _______
 |/      |
 |      (_)
 |      \|/
 |       |
 |      / \ 
 |
_|___
""", """
  _______
 |/      |
 |      (_)
 |      \|/
 |       |
 |      / 
 |
_|___
""", """
  _______
 |/      |
 |      (_)
 |      \|/
 |       |
 |       
 |
_|___
""", """
  _______
 |/      |
 |      (_)
 |      \|
 |       |
 |      
 |
_|___
""", """
  _______
 |/      |
 |      (_)
 |       |
 |       |
 |      
 |
_|___
""", """
  _______
 |/      |
 |      (_)
 |       
 |       
 |     
 |
_|___
""", """
  _______
 |/      |
 |      
 |       
 |       
 |     
 |
_|___
"""]

palabras = ["abeja", "ballena", "camello"]

vidas = 6

seleccion = random.choice(palabras)
#print(seleccion)

print(etapas[vidas])

espacios = ""

for i in range(len(seleccion)):
    espacios += "-"
print(espacios)

letras_correctas = []

terminado = False

while not terminado:
    intento = input("Por favor escriba una letra: ").lower()

    if intento in letras_correctas:
        print(f"Usted ya intentó {intento}")

    visualizacion = ""

    for letra in seleccion:
        if letra == intento:
            visualizacion += letra
            letras_correctas.append(intento)
        elif letra in letras_correctas:
            visualizacion += letra
        else:
            visualizacion += "-"
    print(visualizacion)

    if intento not in seleccion:
        vidas -= 1
        if vidas == 0:
            terminado = True
            print(f"La palabra era {seleccion}. Usted perdió.")

    if "-" not in visualizacion:
        terminado = True
        print("Usted ganó.")
    
    print(etapas[vidas])
