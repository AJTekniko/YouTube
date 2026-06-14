"""
#Ejemplo 1
import mi_modulo

print(mi_modulo.saludar("compañeros"), "(ej. 1)")
"""
"""
#Ejemplo 2
from mi_modulo import *

print(saludar("compañeros"), "(ej. 2)")
"""
"""
#Ejemplo 3
from mi_modulo import saludar

print(saludar("compañeros"), "(ej. 3)")
"""
"""
#Ejemplo con alias
import mi_modulo as mi_alias

print(mi_alias.saludar("compañeros"), "(ej. alias)")
"""

#Ejemplo con otro directorio
import sys
sys.path.append("../ruta/al/directorio")

import mi_otro_modulo

print(mi_otro_modulo.saludar("compañeros"), "(ej. directorio)")
