// creamos una funcion llamada registrar_actividad que recibira un objeto nombre y fecha de la actividad, y se encargara de validar que ambos campos esten presentes, si alguno de los campos falta se lanzara un error de try cathc
export function registrar_actividad(actividad){
    // utilizamos un bloque try catch para manejar los errores que puedan surgir durante la validación de los datos de la actividad.
    try {
        // utilizamos destructuración para extraer el nombre y la fecha de la actividad del objeto actividad.
        const {nombre, fecha} = actividad
        // validamos que ambos campos nombre y fecha esten presentes, si alguno de los campos falta se lanzara un error con un mensaje.
        if (!actividad.nombre ) {
            throw new Error("falta nombre por favor")
        }
        if (!actividad.fecha){
            throw new Error("falta fecha por favor")
        }
        // si ambos campos estan presentes se imprimira un mensaje de exito con el nombre y la fecha de la actividad registrada.
        console.log("actividad registrada con exito.");
        console.log("nombre de la actividad", actividad.nombre);
        console.log("fecha de la actividad", actividad.fecha);
        // 
    } catch (error) {
        // si ocurre un error durante la validación de los datos de la actividad se mandara un mensaje de error
        console.log("error la actividad no es valida")
    }


}