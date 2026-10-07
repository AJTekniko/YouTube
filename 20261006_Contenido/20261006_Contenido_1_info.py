"""
Video: youtube.com/shorts/k_JnrMs0seU

Cómo definir una clase en Python:

Se utiliza la palabra clave class, que significa clase, y después el nombre deseado para la clase con la primer letra mayúscula por convención. Los atributos de instancia se definen en __init__() usando self, y los atributos de clase se definen directamente en la clase. Los métodos son funciones que se definen en la clase. Considere el ejemplo que ve en pantalla.
"""

class Perro:
    def __init__(self, nombre, edad):
        self.nombre = nombre
        self.edad = edad

    raza = "chihuahua"

    def describir(self):
        return f"Este perro {self.raza} se llama {self.nombre} y tiene {self.edad} año(s)"

perro_1 = Perro("Amigo", 1)
print(perro_1.describir())
