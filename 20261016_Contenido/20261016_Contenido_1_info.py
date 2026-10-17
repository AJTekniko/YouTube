"""
Video: youtube.com/shorts/aZNOD35fjiQ

La herencia múltiple en Python:

Se utiliza este término para referirse a cuando las propiedades y los métodos de varios padres son heredados por una clase hija. Considere el ejemplo que ve en pantalla.
"""

class Animal:
    def __init__(self, nombre):
        self.nombre = nombre

    def ladrar(self):
        print(f"{self.nombre} está ladrando.")

class Canino:
    def __init__(self, especie):
        self.especie = especie

    def caminar(self):
        print(f"El {self.especie} está caminando.")

class Perro(Animal, Canino):
    def __init__(self, nombre, especie):
        Animal.__init__(self, nombre)
        Canino.__init__(self, especie)

    def activar(self):
        self.ladrar()
        self.caminar()

perro_1 = Perro("Amigo", "Chihuahua")
perro_1.activar()
