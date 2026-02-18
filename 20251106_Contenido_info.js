/*
Video: youtube.com/watch?v=JwsdQZGWmE0

Cómo determinar el día de la semana con una fecha en JavaScript:

Para empezar, podemos crear una función personalizada que acepta una cadena de caracteres con la fecha. Creamos una variable para almacenar la cadena en forma de fecha y con los guiones reemplazados con diagonales. Creamos otra variable para almacenar los diferentes días de la semana, ya que el método get,dey que usaremos en la siguiente linea produce un número de cero a seis que representa el día de la semana, pero no el día por nombre. Después de asociar los números con los nombres de los días de la semana, retornamos el día y lo mandamos a la consola.
*/

function obtenDia(cadenaFecha) {
  const fecha = new Date(cadenaFecha.replace(/-/g, '\/'));
  const diasDeSemana = ['Domingo', 'Lunes', 'Martes', 'Miercoles', 'Jueves', 'Viernes', 'Sabado'];
  const elDia = diasDeSemana[fecha.getDay()];
  return elDia;
}

console.log(obtenDia("2025-11-06"))
