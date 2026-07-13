/*
Video: youtube.com/shorts/ahgE2PoDkDg

El método symmetricDifference en JavaScript:

Este método es utilizado con conjuntos para retornar los elementos que se encuentran en el primer conjunto involucrado o en el segundo, pero no en ambos. Considere el ejemplo que ve en pantalla.
*/

let nums1 = new Set([1, 3, 5, 7, 9]);
let nums2 = new Set([2, 3, 5, 7]);

console.log(...nums1
.symmetricDifference(nums2));
