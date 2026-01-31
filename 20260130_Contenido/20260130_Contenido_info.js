/*
Cómo saber si un año es bisiesto con JavaScript:

Para determinar si un año es bisiesto, utilizaremos el operador módulo en sentencias condicionales. Considera el siguiente ejemplo, obtenemos el número que es proporcionado, y lo dividimos por módulo en diferentes condiciones. Después simplemente lo mandamos a la consola.
*/

let v_anual = Number(prompt("Por favor proporcione un año: "));
console.log("Por favor proporcione un año: ");
console.log(v_anual);

if (v_anual % 100 == 0 && v_anual % 400 == 0){
    console.log(`El año ${v_anual} es un año bisiesto.`);
} else if (v_anual % 4 == 0 && v_anual % 100 != 0){
    console.log(`El año ${v_anual} es un año bisiesto.`);
} else{
    console.log(`El año ${v_anual} NO es un año bisiesto.`);
}
