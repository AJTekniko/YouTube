"""
Video: youtube.com/shorts/HGBZGGFGDcU

Cómo importar un módulo en Python:

Podemos utilizar un archivo que creamos como módulo de tres maneras:
1. Podemos escribir la palabra clave import y el nombre del módulo al principio de nuestro código. Después para utilizar sus funciones, escribimos el nombre del módulo y un punto seguido por la función.
2. Si no queremos escribir el nombre del módulo al usar las funciones importadas, podemos usar una sentencia import con asterisco.
3. Podemos importar los elementos específicos usando la palabra clave from, el nombre del módulo, la palabra clave import, y el nombre de los elementos.

En la pantalla puede ver ejemplo 1 que utiliza la palabra clave import, ejemplo 2 que utiliza la sentencia import con asterisco, y ejemplo 3 que indica los elementos específicos que queremos usar. Próximamente, subiré videos que hablan sobre el alias y como importar archivos si no están en el mismo directorio.
"""

#Ejemplo 1
import mi_modulo

print(mi_modulo.saludar("compañeros"), "(ej. 1)")

#Ejemplo 2
from mi_modulo import *

print(saludar("compañeros"), "(ej. 2)")

#Ejemplo 3
from mi_modulo import saludar

print(saludar("compañeros"), "(ej. 3)")
