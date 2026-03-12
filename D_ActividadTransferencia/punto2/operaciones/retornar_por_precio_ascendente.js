
// funcion para ordenar por precio ascendente
export default function ordenarporPrecioAscendente(catalogo) {
    // retorna un nuevo arreglo ordenado por precio ascendente sin modificar el original
    return [...catalogo].sort((a, b) => a.precio - b.precio);
}
