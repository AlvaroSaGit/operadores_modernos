
//Use destructuración para obtener el idioma configurado.
//Retorna el idioma resultante.
export function usando_destructuracion(configuracionfinal){
    // usamos destructuración para extraer el valor de idioma de la configuración final y asignarlo a una variable llamada idioma.
    const { idioma } = configuracionfinal; // el operador de destructuración se encarga de extraer el valor de la propiedad idioma del objeto configuracionfinal y asignarlo a la variable idioma.
    return idioma; //retornamos el valor de idioma 
}