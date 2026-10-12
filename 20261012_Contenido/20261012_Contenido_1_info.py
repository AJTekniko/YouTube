"""
Video: youtube.com/shorts/hBUWntnFRb8

La herencia simple en Python:

Se utiliza este término para referirse a cuando las propiedades y los métodos de un solo padre son heredados por una clase hija. Considere el ejemplo que ve en pantalla.
"""
class Mascota:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

class Perro(Mascota):
    def describir(self):
        return f"Este perro se llama {self.nombre} y tiene {self.edad} año(s)"

perro_1 = Perro("Amigo", 1)
print(perro_1.describir())
