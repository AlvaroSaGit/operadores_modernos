export const agregarInventario = (lista,nuevosItems) =>  {

    // Una constante ocn todos los elementos de lista y los nuevos item
    const nuevoInventario = [...lista, nuevosItems];
    console.log(`El inventario ha sido actualizado.\n${nuevoInventario}`);
    return nuevoInventario;
} 