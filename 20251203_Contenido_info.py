"""Operadores de conjuntos:

Creamos dos conjuntos como ve en pantalla. La operación union retorna un conjunto nuevo que contiene los elementos de los dos conjuntos y se ejecuta por medio de la pleca o el método union(). La operación intersection retorna un conjunto nuevo que contiene todos los elementos compartidos y se ejecuta por medio del signo et o el método intersection(). La operación difference retorna un conjunto nuevo que contiene todos los elementos del primer conjunto que no están incluidos en el otro conjunto y se ejecuta por medio del guion o el método difference(). Y la operación symmetric difference retorna un conjunto nuevo que contiene elementos que están incluidos en el primer conjunto o el otro, pero no en los dos a la vez y se ejecuta por medio del acento circunflejo o el método symmetric_difference(). Al imprimir cada operación, podemos ver el resultado correspondiente."""

par = {0, 2, 4, 6, 8}
natural = {1, 2, 3, 4, 5}

print("Union: ", par | natural)
print("Intersection: ", par & natural)
print("Difference: ", par - natural)
print("Symmetric Difference: ", par ^ natural)
