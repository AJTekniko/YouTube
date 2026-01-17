/*
Video: https://www.youtube.com/shorts/8hEmWRzgurs

Cómo convertir kilómetros a millas con JavaScript:

Para convertir kilómetros a millas, necesitamos multiplicar el número de kilómetros por 0.621371. Si queremos convertir millas a kilómetros, multiplicamos las millas por 1.609344. Considera el siguiente ejemplo, obtenemos un número proporcionado y lo multiplicamos por el factor de conversión. Para este ejemplo, mandamos la solicitud de texto y la contestación a la consola para facilitar la comprensión. Finalmente, mandamos el resultado a la consola.
*/

km = Number(prompt("Por favor proporcione la distancia en kilómetros: "));

console.log("Por favor proporcione la distancia en kilómetros: ");
console.log(km);

millas = km * 0.621371;
console.log(`${km} km iguala ${millas} mi`);
