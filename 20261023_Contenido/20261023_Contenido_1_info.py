"""
Video: youtube.com/shorts/aERWSZNRiw8

La función super en Python:

Esta función es utilizada para llamar un método de una clase padre cuando se necesita implementar de diferente manera o se necesita extender el método, sin tener que duplicar el código. Considere el ejemplo que ve en pantalla.
"""

class Padre:
    def mostrar(self):
        print("Método Padre")

class Hijo(Padre):
    def mostrar(self):
        super().mostrar()
        print("Método Hijo")

Hijo().mostrar()
