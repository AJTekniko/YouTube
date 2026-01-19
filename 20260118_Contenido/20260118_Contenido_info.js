/*
Cómo convertir grados Celsius a Fahrenheit con JavaScript:

Para convertir grados Celsius a Fahrenheit, necesitamos multiplicar el número de grados Celsius por 1.8 y sumarle 32. Si queremos lo contrario, le restamos 32 al número de grados Fahrenheit y lo dividimos por 1.8. Considera el siguiente ejemplo, obtenemos el número que es proporcionado y le aplicamos el factor de conversión. Para este ejemplo, mandamos la solicitud de texto y la contestación a la consola para facilitar la comprensión. Finalmente, mandamos el resultado a la consola.
*/

let celsius = Number(prompt("Por favor proporcione la temperatura en grados Celsius: "));

console.log("Por favor proporcione la temperatura en grados Celsius: ");
console.log(celsius);

let fahrenheit = celsius * 1.8 + 32;
console.log(`La temperatura iguala ${fahrenheit} grados Fahrenheit`);
