// 1. Gestión de pedidos con rest y destructuración
// Crea una función procesarPedido(pedido, ...extras) donde pedido es un objeto con {cliente,
// producto, cantidad}.
// • Usa destructuración para obtener sus propiedades.
// • Usa parámetros rest para almacenar los extras del pedido.
// La función debe retornar un objeto final con toda la información consolidada.

import {procesarPedido} from "./funciones/index.js";

const pedidoMio ={
    cliente: "Carlos",
    producto:"Laptop",
    cantidad:4
}
const imprimirPedido = procesarPedido(pedidoMio,"Mouse Inalambrico","Funda","Cosas");

console.log("----Pedido Procesado----");
console.log(imprimirPedido);
