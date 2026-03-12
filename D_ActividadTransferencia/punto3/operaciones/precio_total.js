
// creamos una funcion de precio_total
export default function precio_total(productos){
 let total = 0;
   //Recorre cada producto y acumula su precio en total
    for (const producto of productos) {
        total = total + producto.precio;
    }
    // retornamos el total 
    return total;
}