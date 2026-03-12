/*Requerimiento:
Implementa una función procesarCompra(cliente, productos) donde:
• cliente es un objeto con {nombre, correo}.
• productos es una lista de objetos con {nombre, precio}.
La función debe:
1. Validar con try...catch que el cliente tenga los dos datos y que los productos sean
válidos.
2. Utilizar spread para crear un nuevo objeto con toda la información del cliente.
3. Usar destructuración para separar el primer producto comprado del resto.
4. Retornar un informe con:
o Total de productos
o Precio total
o Primer producto adquirido */

import prompt from 'prompt-sync'
const vaca = prompt();
import {usar_destructuracion,precio_total,total_de_productos,validar_con_try_catch,utilizar_spread} from "./operaciones/index.js";
function procesarcompra() {
    const nombre = vaca("Ingrese su nombre: ");
    const correo = vaca("Ingrese su correo: ");

    const nombreproducto1 = vaca("Nombre del primer producto: ");
    const precioproducto1 = parseFloat(vaca("Precio del primer producto: "));

    const nombreproducto2 = vaca("Nombre del segundo producto: ");
    const precioproducto2 = parseFloat(vaca("Precio del segundo producto: "));

    const nombreproducto3 = vaca("Nombre del tercer producto: ");
    const precioproducto3 = parseFloat(vaca("Precio del tercer producto: "));

    // creamos el objeto cliente
    const cliente = {
        nombre: nombre,
        correo: correo,
    }
    // creamos una lista de productos
    const productos = [
        {nombre: nombreproducto1, precio: precioproducto1},
        {nombre: nombreproducto2, precio: precioproducto2},
        {nombre: nombreproducto3, precio: precioproducto3}
    ]
    // validacion del try-catch
    const esValido = validar_con_try_catch(cliente, productos);
    if (!esValido) return null; 
    const { primerproducto } = usar_destructuracion(productos);
    return {
        totalProductos: total_de_productos(productos),
        precioTotal: precio_total(productos),
        primerproducto: primerproducto
    };
}



const resultado = procesarcompra();

// if y else para validar el try catch
if (resultado) {
    // imprimimos los resultados
    console.log(" Informe de la compra ");
    console.log("Total de productos:", resultado.totalProductos);
    console.log("Precio total:", resultado.precioTotal);
    console.log("Primer producto:", resultado.primerproducto);
} else {
    console.log("Datos invalidos, no se proceso la compra");
}
