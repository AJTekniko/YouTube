/*
Video: youtube.com/shorts/PaUy-fdBHzo

El ámbito global en JavaScript:

Se refiere a la accesibilidad que tienen las variables que no son declaradas dentro de una función o clase. Considere el ejemplo que ve en pantalla.
*/

let propina = 0.20;

function obtenerTotal(subtotal) {
    let total = subtotal + (subtotal * propina);
    return total;
}

console.log(obtenerTotal(100));
