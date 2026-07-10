/*
Video: youtube.com/shorts/9qOX8BIZ0P0

El método difference en JavaScript:

Este método es utilizado con conjuntos para retornar los elementos que se encuentran solamente en el primer conjunto involucrado. Considere el ejemplo que ve en pantalla.
*/

let nums1 = new Set([1, 3, 5, 7, 9]);
let nums2 = new Set([2, 3, 5, 7]);

console.log(...nums1.difference(nums2));
