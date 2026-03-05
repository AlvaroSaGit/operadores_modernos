// 5. Motor de configuración avanzada
// Requerimiento:
// Dispones de estas configuraciones:
// const baseConfig = { modo: "producción", lenguaje: "es", nivel: 1 };
// const extraConfig = { nivel: 2, tema: "oscuro" };
// Crea la función configFinal(...configs) que:
// 1. Reciba múltiples configuraciones usando rest.
// 2. Use spread para mezclarlas todas en un solo objeto final sin mutar ninguna.
// 3. Valide con try...catch que cada elemento recibido sea un objeto.
// 4. Retorne un objeto final con una propiedad adicional:
// o validacion: true si todo salió bien

// GFPI-F-135 V04
// o validacion: false si ocurrió un error

// Resultado esperado:
// Un objeto final consolidado, estable y construido con prácticas de programación segura,
// que refleje el uso combinado de todos los conceptos de la guía.
// Para desarrollar los 5 ejercicios es requerido trabajar con la siguiente estructura:
// • Archivo index.html para dar inicio al programa.
// • Archivo app.js para poder indicar que ejercicio se desea ejecutar.
// o Se debe solicitar al usuario por medio de un menu manejado por un promp
// que ejercicio desea solucionar.
// o Si el usuario no menciona el ejercicio indicado el sistema debe solicitar
// nuevamente que indique que ejercicio desea solucionar sin tener que
// recargar la página.

// • Directorio de módulos para trabajar de forma ordenada los ejercicios
// • Archivo barril para ordenar las importaciones y exportaciones

import {baseConfig, extraConfig, configFinal} from "./modulos/index.js";

// se ejecuta la mezcla
const resultado = configFinal(baseConfig,extraConfig);

// se meustra el resultado

console.log("Configuracion final: ",resultado);
