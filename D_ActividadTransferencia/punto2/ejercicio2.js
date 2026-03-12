// Crea una función fusionarCatalogos(a, b) que:


// 1. Use try...catch para validar que ambos parámetros sean arreglos.
// 2. Utilice spread para fusionarlos sin modificar los originales.
// 3. Retorne un nuevo catálogo ordenado por precio ascendente.

import {fusionarCatalogos} from "./operaciones/index.js";
const catalogoA = [
    { id: 1, nombre: "Curso JavaScript", precio: 40 },
    { id: 2, nombre: "Curso HTML", precio: 35 }
];

const catalogoB = [
    { id: 3, nombre: "Curso CSS", precio: 30 }
];


// Fusionar los catálogos y mostrar el resultado
const resultado = fusionarCatalogos(catalogoA, catalogoB);
// imprimos los catalogos originales y el resultado
console.log("catalogo original A",catalogoA);
console.log("catalogo original B",catalogoB);
console.log("catalogo fusionado",resultado);