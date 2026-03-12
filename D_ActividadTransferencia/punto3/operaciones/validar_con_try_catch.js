export default function validar_con_try_catch(cliente, productos) {
    // valida que clientes y productos sean validos usando try catch
    try {
        // Validar cliente
        if (!cliente.nombre) {
            throw new Error("error debes ingresar un nombre");
        }
        if (!cliente.correo) {
            throw new Error("error el correo no es valido");
        }

        // Valida cada producto del array
        productos.forEach((producto) => {
            if (!producto.nombre) {
                throw new Error("erro debes ingresar el nombre de los productos no pueden quedar vacios");
            }
            if (!producto.precio) {
                throw new Error("erro debes ingresar el precio de los productos no pueden quedar vacios");
            }
        });

        return true;

    } catch (error) {
        console.error(error.message);
        return false;
    }
    
}