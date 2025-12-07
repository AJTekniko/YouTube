"""Cómo crear un juego de Blackjack en Python:

Empezamos importando el módulo random. Creamos una función personalizada para repartir una carta, en la cual creamos una lista con los valores de las cartas, se elige una carta al azar con el método choice y se retorna la carta. Creamos una función personalizada para calcular el valor de las cartas, en el cual se determina si alguien obtuvo blackjack, o un valor de veintiuno con solamente dos cartas, y también ajusta el valor del As. Creamos una función personalizada para comparar el valor de las cartas de ambos jugadores. Creamos otra función personalizada para el desarrollo del juego. En esa función creamos dos listas vacías que van a almacenar las cartas de los jugadores, creamos dos variables para almacenar los puntos de los jugadores y les asignamos el valor de negativo uno empezando, ya que cero se ha utilizado para representar un blackjack, creamos una variable para indicar si el juego ha terminado y le damos un valor de False. Por medio de un ciclo for con un rango de dos, llamamos la función para repartir cartas a los jugadores. En un ciclo while que sigue mientras el juego no haya terminado, se calcula el valor de las cartas de ambos jugadores, lo imprime, determina si alguien obtuvo un blackjack y si el jugador o jugadora quiere otra carta. Por medio de otro ciclo while le repartimos una carta a la computadora si no obtuvo un blackjack y si el valor de sus cartas es menos de 17, y calculamos el valor de nuevo. Una vez que terminó el juego, se imprimen los resultados y el programa pregunta si se va a jugar otro juego."""

import random

def repartir_carta():
    """Retorna una carta al azar"""
    cartas = [11, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 10, 10]
    carta = random.choice(cartas)
    return carta

def calcular_valor(cartas):
    """Toma una lista de cartas y retorna su valor"""
    if sum(cartas) == 21 and len(cartas) == 2:
        return 0
    
    if 11 in cartas and sum(cartas) > 21:
        cartas.remove(11)
        cartas.append(1)

    return sum(cartas)

def comparar(u_puntos, c_puntos):
    if u_puntos == c_puntos:
        return "Es un empate"
    elif c_puntos == 0:
        return "Usted perdió, el oponente obtuvo Blackjack"
    elif u_puntos == 0:
        return"Usted ganó, obtuvo Blackjack"
    elif u_puntos > 21:
        return "Se pasó de veintiuno. Usted perdió"
    elif c_puntos > 21:
        return "El oponente se pasó de veintiuno. Usted ganó"
    elif u_puntos > c_puntos:
        return "Usted ganó"
    else:
        return "Usted perdió"

def jugar():
    sus_cartas = []
    computadora_cartas = []
    computadora_puntos = -1
    sus_puntos = -1
    terminado = False

    for _ in range(2):
        sus_cartas.append(repartir_carta())
        computadora_cartas.append(repartir_carta())

    while not terminado:
        sus_puntos = calcular_valor(sus_cartas)
        computadora_puntos = calcular_valor(computadora_cartas)
        print(f"Sus cartas: {sus_cartas}, su valor: {sus_puntos}")
        print(f"La primer carta de la computadora: {computadora_cartas[0]}")

        if sus_puntos == 0 or computadora_puntos == 0 or sus_puntos > 21:
            terminado = True
        else:
            peticion = input("Escriba 's' para otra carta, escriba 'n' para pasar: ")
            if peticion == "s":
                sus_cartas.append(repartir_carta())
            else:
                terminado = True

    while computadora_puntos !=0 and computadora_puntos < 17:
        computadora_cartas.append(repartir_carta())
        computadora_puntos = calcular_valor(computadora_cartas)

    print(f"Sus cartas al final: {sus_cartas}, su valor: {sus_puntos}")
    print(f"Las cartas de la computadora al final: {computadora_cartas}, su valor: {computadora_puntos}")
    print(comparar(sus_puntos, computadora_puntos))

while input("¿Usted quiere jugar Blackjack? Escriba 's' o 'n': ") == "s":
    print("\n" * 20)
    jugar()
