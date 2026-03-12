

// funcion para validar que los parametros sean arreglos usando try catch
export default function usarTryCatch(catalogoA, catalogoB) {
    // valida que ambos parametros sean arreglos usando try catch
    try {
        if (!Array.isArray(catalogoA)) {
            throw new Error("El primer parametro no es un arreglo");
        
        }
    if (!Array.isArray(catalogoB)) {
            throw new Error("El segundo  parametro no es un arreglo");
        }
    return true;
    } catch (error) {
        console.error("validacion",error.message);
        return false;
    }

}