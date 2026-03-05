

import { inmutabilidad_mas_spread } from './operaciones/index.js'
function actualizarperfil(perfil, nuevosDatos) {

}


// perfil original
const perfil = {
    nombre: "Juan",
    edad: 30,
    ciudad: "Bucaramanga"
}
// imprimimos el perfil original
console.log("Perfil original: ", perfil);


// actualizar perfil con nuevos datos

const nuevosDatos = { edad: 18, ciudad: "Grion" }

const perfilActualizado = inmutabilidad_mas_spread(perfil, nuevosDatos)

// imprimimos el perfil actualizado
console.log("Perfil actualizado: ", perfilActualizado);