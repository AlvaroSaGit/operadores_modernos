// 2. Control de inventario con inmutabilidad y spread
// Partiendo del arreglo inicial:
// const inventario = ["cámara", "trípode", "micrófono"];
// Crea una función agregarInventario(lista, nuevoItem) que devuelva una nueva lista sin
// modificar la original y que registre un mensaje indicando cuántos ítems tiene ahora el
// inventario.
import { agregarInventario} from "./funciones/index.js";

const inventario = ["Camara","Tripode","Microfono"];
// Se añade la lista anterior de inventario, mas la nueva que es luces
const actualizarInventario = agregarInventario(inventario,"Luces");

console.log("Inventario original: ",inventario);
console.log("Inventario nuevo: ",actualizarInventario );
