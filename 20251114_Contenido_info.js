/*
Cómo producir la cantidad de días que faltan para el fin de semana en JavaScript:

Para empezar, podemos crear una función personalizada que acepta la fecha como cadena de caracteres. Creamos una variable para almacenar la cadena en forma de fecha y con los guiones reemplazados por diagonales. En otra variable, le restamos la fecha en forma de día númerico a seis que representa sábado. Usamos sentencias condicionales para retornar el mensaje apropiado. Después simplemente lo mandamos a la consola.
*/

function obtenDia(cadenaFecha) {
    const dia = new Date(cadenaFecha.replace(/-/g, '\/'));
    const finDe = 6 - dia.getDay();
    if (dia.getDay() == 0 || dia.getDay() == 6) {
      return "¡Es el fin de semana!"
    } else if (finDe == 1) {
        return `Falta ${finDe} día para que sea el fin de semana`
    } else {
      return `Faltan ${finDe} días para que sea el fin de semana`
    }

}

console.log(obtenDia("2025-11-14"))
