

export function inmutabilidad_mas_spread(perfil, ...nuevosDatos) {
    //inmutabilidad: copiamos el original con spread
    let perfilActualizado = {...perfil};
    //spread para actualizar el perfil con los nuevos datos
    for (const nuevoDato of nuevosDatos) {
        perfilActualizado = {...perfilActualizado, ...nuevoDato};
    }
    // retornamos el perfil actualizado
    return perfilActualizado;

}