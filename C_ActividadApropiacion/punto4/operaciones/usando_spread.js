//Use spread para combinar ambas configuraciones sin mutarlas.

// creamos una funcion que tome dos objetos, uno con las configuraciones por defecto y otro con las configuraciones personalizadas, y devuelva un nuevo objeto que combine ambas configuraciones utilizando el operador spread.
export function usando_spread(defaults, perzonalizadas){
    // utilizamos el operador spread para combinar ambos objetos en un nuevo objeto llamado configuracionfinal
    const configuracionfinal ={
        ...defaults, // el operador spread se encarga de copiar todas las propiedades del objeto default al nuevo objeto configuracion final.
        ...perzonalizadas // el operador spread se encarga de copiar todas las propiedades del objeto perzonalizadas al nuevo objeto congfiguracion final.
    }
    return configuracionfinal; // retornamos el nuevo objeto configuracion final que contiene la combinación de ambas configuraciones.

};