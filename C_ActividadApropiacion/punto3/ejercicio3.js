
// Registro de actividades con manejo de errores

// importamos el modulo prompt-sync para poder solicitar datos al usuario desde la consola.
import prompt from 'prompt-sync'
const vaca = prompt();

// importamos la funcion de registrar_actividad
import { registrar_actividad } from "./operaciones/index.js";


// solicitamos al usuario que ingrese el nombre y la fecha de la actividad
const nombre = vaca("ingrese el nombre de la actividad por favor : ");

const fecha = vaca("ingrese la fecha de la actividad por favor :");

// creamos un objeto actividad con los datos ingresados por el usuario 
const actividad = {nombre, fecha}
// llamamos ala funcion registrar_actividad pasando el objeto actividad como argumento para validar los datos y registrar la actividad.
registrar_actividad(actividad);