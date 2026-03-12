

export default function usar_destructuracion(productos) {
    // utilizamos destructuracion para extraer el primer producto del cliente 
    const [primerproducto, ...restoproductos] = productos;
    return {primerproducto,restoproductos};
}