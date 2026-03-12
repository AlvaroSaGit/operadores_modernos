import fusionarspread from './usar_spread_para_fusionar.js';
import ordenarporPrecioAscendente from './retornar_por_precio_ascendente.js';
import usarTryCatch from './usar_try_catch.js';

// Crea una función fusionarCatalogos(a, b) que:
export default function fusionarCatalogos(catalogoA, catalogoB) {
     // 1. Use try...catch para validar que ambos parámetros sean arreglos.
      if (!usarTryCatch(catalogoA, catalogoB)) return [];
    // 2. Utilice spread para fusionarlos sin modificar los originales.
    const fusionado = fusionarspread(catalogoA, catalogoB);
    // 3. Retorne un nuevo catálogo ordenado por precio ascendente.
    return ordenarporPrecioAscendente(fusionado);
}