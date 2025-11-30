/*Cómo remover signos de puntuación con JavaScript:

Para empezar, podemos almacenar la frase original en una variable. Creamos una variable para almacenar los signos de puntuación. El signo de interrogación inicial y el signo de exclamación inicial son agregados a la variable manualmente, ya que sus códigos de carácter se encuentran muy alejados de otros signos de puntuación; los otros son agregados por medio de un ciclo for. Creamos otra variable para almacenar una cadena de caracteres vacía que va a contener la frase cambiada. Por medio de un ciclo for y una sentencia condicional, le vamos agregando la frase cambiada a la variable más reciente. Después simplemente mandamos la frase cambiada a la consola.*/

let original = "Hola. cómo. están.";

let puntuacion = "¿" + "¡";
for (let i = 33; i < 48; i++) {
    puntuacion += String.fromCharCode(i);
}
for (let i = 58; i < 65; i++) {
    puntuacion += String.fromCharCode(i);
}
for (let i = 91; i < 97; i++) {
    puntuacion += String.fromCharCode(i);
}
for (let i = 123; i < 127; i++) {
    puntuacion += String.fromCharCode(i);
}

let cambiada = "";

for (let i in original){
    if (!(puntuacion.includes(original[i]))){
        cambiada += original[i];
    }
}

console.log(cambiada);
