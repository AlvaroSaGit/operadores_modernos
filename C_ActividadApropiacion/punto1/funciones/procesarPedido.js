
export const procesarPedido = (pedido, ...extras) =>{
    // El extras se convierte en un arreglo gracias a REST
    
    const {cliente, producto, cantidad} = pedido;

    return {
        cliente,
        producto,
        cantidad,
        masItems: extras,
    }
}


