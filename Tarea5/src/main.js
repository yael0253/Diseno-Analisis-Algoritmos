/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Other/javascript.js to edit this template
 */

const A = [];
    const arrayLength = 12; // Cambiar la longitud del arreglo según sea necesario
    const minRandomValue = -10; // Valor mínimo para los números aleatorios
    const maxRandomValue = 50; // Valor máximo para los números aleatorios

    // Llenar el arreglo automáticamente con valores aleatorios (array)
    for (let i = 0; i < arrayLength; i++) {
        const randomValue = Math.floor(Math.random() * (maxRandomValue - minRandomValue + 1)) + minRandomValue;
        A.push(randomValue);
    }

    let buscador = null;
    let i = 0;

    while (i < A.length) {
        if (buscador === null || A[i] < buscador) {
            buscador = A[i];
        }
        i++;
    }

    console.log("El numero mas pequeño es:", buscador);
    console.log("Secuencia generada (Array):", A);

