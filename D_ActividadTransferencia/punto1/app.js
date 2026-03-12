// 1. Sistema de registro académico
// Requerimiento:
// Crea una función crearEstudiante(nombre, ...notas) que reciba:
// • Un nombre obligatorio.
// • Un número variable de notas mediante rest.

// GFPI-F-135 V04

// La función debe:
// 1. Validar con try...catch que todas las notas sean números.
// 2. Usar destructuración para separar la primera nota del resto.
// 3. Retornar un objeto inmutable con:
// o Nombre
// o Primera nota
// o Promedio del resto de notas
// o Total de notas registradas

import { crearEstudiante} from "./funciones/index.js";

console.log(crearEstudiante("Carlos",5,4,3));

