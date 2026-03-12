
// funcion para fusionar dos catalogos 
export default function fusionarspread(catalogoA, catalogoB) {
    // retorna un nuevo arreglo fusionando los dos catalogos sin modificar los originales
    return [...catalogoA, ...catalogoB]
}